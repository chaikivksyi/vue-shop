export default {
    state: {
        products: [
            {
                id: 1,
                title: 'Product 1',
                price: 100
            },
            {
                id: 2,
                title: 'Product 2',
                price: 200
            },
            {
                id: 3,
                title: 'Product 3',
                price: 300
            },
            {
                id: 4,
                title: 'Product 4',
                price: 400
            },
            {
                id: 5,
                title: 'Product 5',
                price: 500
            },
            {
                id: 6,
                title: 'Product 6',
                price: 600
            }
        ]
    },
    getters: {
        products(state) {
            return state.products
        }
    }
}