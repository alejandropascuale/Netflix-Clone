const basicFetch = async (endpoint) => {
    const req = await fetch(`${process.env.TMDB_API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originales de Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&languege=es-AR&api_key=${process.env.TMDB_API_Key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para vos',
                items: await basicFetch(`/trending/all/week?languege=es-AR&api_key=${process.env.TMDB_API_Key}`)
            },
            {
                slug: 'toprated',
                title: 'En alta',
                items: await basicFetch(`/movie/top_rated?languege=es-AR&api_key=${process.env.TMDB_API_Key}`)
            },
            {
                slug: 'action',
                title: 'Acción',
                items: await basicFetch(`/discover/movie?with_genres=28&languege=es-AR&api_key=${process.env.TMDB_API_Key}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&languege=es-AR&api_key=${process.env.TMDB_API_Key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&languege=es-AR&api_key=${process.env.TMDB_API_Key}`)
            },
            {
                slug: 'romance',
                title: 'Románticas',
                items: await basicFetch(`/discover/movie?with_genres=10749&languege=es-AR&api_key=${process.env.TMDB_API_Key}`)
            },
            {
                slug: 'documentary',
                title: 'Documentales',
                items: await basicFetch(`/discover/movie?with_genres=99&languege=es-AR&api_key=${process.env.TMDB_API_Key}`)
            }
        ];
    }
}