import axios from 'axios';


const httpRequest = (verb, endpoint, data, headers = {}) => {
  const config = {
    headers: headers
  };

  const token = process.env.TMDB_API_Token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.method = verb;
  config.url = process.env.TMDB_API_BASE + endpoint;
  if (data) {
    config.data = data;
  }

  return new Promise((resolve, reject) => {
    axios(config)
      .then(res => resolve(res.data))
      .catch(error => reject(error));
  });
};


//handle get requests
/**
 * @param {string} endpoint
 * @param {object} headers
 * @returns {Promise}
 *
 * this function is used to handle get requests, receives the endpoint and the headers,
 * if not headers are passed, then the headers object is setted to {}
 * if token exist in localStorage, then add it to headers
 */
export function getRequest(endpoint, headers) {
  return httpRequest('get', endpoint, null, headers);
}