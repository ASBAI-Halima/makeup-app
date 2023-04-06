import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://makeup-application-asbai-halima.onrender.com',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
})
  
export default {
  getProducts() {
    return apiClient.get('/products')
  }, 
  getProduct(id) {
    return apiClient.get(`/products/${id}`)
  },
  getProductByCategory(category) {
    return apiClient.get(`products?category=${category}`)
  },
  addReviewAboutProduct(id, reviews) {
    return apiClient.patch('/products/' + id, { reviews: reviews })
  },
  getReviews(id) {
    return apiClient.get(`/products/${id}`);
  }
  
}