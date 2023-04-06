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
  getUsers() {
    return apiClient.get('/users')
  },

  postUser(user) {
    return apiClient.post('/users', user)
  },

  putUser(user) {
    return apiClient.put('/users/' + user.id, user)
  },
  getUserById(id) {
    console.log(id);
    return apiClient.get('/users/' + id);
  },
  putCartOfUser(id, cart) {
    return apiClient.patch('/users/' + id, { cart: cart })
  },

  deleteProductFromCart(id, cart) {
    return apiClient.patch('/users/' + id, { cart: cart })
  }
}