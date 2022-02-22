const newUrl = process.env.REACT_APP_TMDB_API_BASE4;
const url = process.env.REACT_APP_TMDB_API_BASE3;
const apiKey = process.env.REACT_APP_TMDB_API_Key;

const basicFetch = async (url, endpoint) => {
    const req = await fetch(`${url}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originales de Netflix',
                items: await basicFetch(url, `/discover/tv?with_network=213&language=es-AR&api_key=${apiKey}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para vos',
                items: await basicFetch(url, `/trending/all/week?language=es-AR&api_key=${apiKey}`)
            },
            {
                slug: 'toprated',
                title: 'En alta',
                items: await basicFetch(url, `/movie/top_rated?language=es-AR&api_key=${apiKey}`)
            },
            {
                slug: 'action',
                title: 'Acción',
                items: await basicFetch(newUrl, `/discover/movie?with_genres=28&language=es-AR&api_key=${apiKey}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(newUrl, `/discover/movie?with_genres=35&language=es-AR&api_key=${apiKey}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(newUrl, `/discover/movie?with_genres=27&language=es-AR&api_key=${apiKey}`)
            },
            {
                slug: 'romance',
                title: 'Románticas',
                items: await basicFetch(newUrl, `/discover/movie?with_genres=10749&language=es-AR&api_key=${apiKey}`)
            },
            {
                slug: 'documentary',
                title: 'Documentales',
                items: await basicFetch(newUrl, `/discover/movie?with_genres=99&language=es-AR&api_key=${apiKey}`)
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(url, `/movie/${movieId}?language=es-AR&api_key=${apiKey}`);
                    break;
                case 'tv':
                    info = await basicFetch(url, `/tv/${movieId}?language=es-AR&api_key=${apiKey}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}