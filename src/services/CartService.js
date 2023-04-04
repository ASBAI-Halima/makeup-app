import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getProductsFromCart() {
        return apiClient.get('/cart')
    },
    addToCart(product) {
        return apiClient.post('/cart', product)
    },
    putProduct(product) {
        console.log('product added to cart', product);
        return apiClient.put('/cart/'+product.id, product)
    },
    deleteProduct(pr) {
        return apiClient.delete('/cart/'+pr.id);
    }
}