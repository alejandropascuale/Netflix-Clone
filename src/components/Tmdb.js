export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originales de Netflix',
                items: []
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