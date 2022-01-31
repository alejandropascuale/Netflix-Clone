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
                items: await basicFetch(`/discover/tv`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para vos',
                items: []
            },
            {
                slug: 'action',
                title: 'Acción',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Románticas',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentales',
                items: []
            }
        ];
    }
}