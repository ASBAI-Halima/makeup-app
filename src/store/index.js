import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '@/services/ProductService'
import CartService from '@/services/CartService'
import VueRouter from '@/router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    category: [],
    cart: [],
  },
  getters: {
    catLength: (state) => state.products.length,
  },
  mutations: {
    // ----Products ---
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_CATEGORY(state, category) {
      state.category = category
    },
    // ---Cart---
    SET_CART(state, cart) {
      state.cart = cart
    },
    SET_QUANTITY(state, product) {
      state.cart = state.cart.map((e) => {
        if (e.id === product.id) {
          e.quantity = product.quantity;
        }
        return e;
      })
    },
    ADD_TO_CART(state, product) {
      state.cart.push(product)
    },
    REMOVE_FROM_CART(state, id) {
      const index = state.cart.findIndex(product => product.id === id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    }
  },
    actions: {
      // ---Products ---
      fetchProducts({ commit }) {
        ProductService.getProducts()
          .then((response) => {
            commit('SET_PRODUCTS', response.data);
            console.log('Product---' + this.state.products.length)
          })
          .catch((error) => {
            console.error(error.message)
          })
      },
      fetchCategory({ commit }, category) {
        ProductService.getProductByCategory(category)
          .then((response) => {
            commit('SET_CATEGORY', response.data);
            console.log('category---' + this.state.category.length)
          })
          .catch((error) => {
            console.error(error.message)
          })
      },
      //----Cart---
      fetchFromCart({ commit }) {
        CartService.getProductsFromCart()
          .then((response) => {
            commit('SET_CART', response.data);
            console.log('cart---' + this.state.cart.length)
          })
          .catch((error) => {
            console.error(error.message)
          })
      },
      addToCart({ commit }, product) {
        if (this.state.cart.includes(product)) {
          VueRouter.push({ name: 'cart' });
        } else {
          console.log('from store'+product.id);
          CartService.addToCart(product)
           .then((response) => {
             commit('ADD_TO_CART', product);
             console.log('add to cart---'+this.state.cart.length)
            })
           .catch((error) => {
             console.log(error.message)
           });
           VueRouter.push({ name: 'cart' });
        }
       
        
      },

      setQuantity({ commit }, product) {
        try {
          CartService.putProduct(product).then((response) => {
            commit('SET_QUANTITY', response.data);
          })
        } catch (error) {
          console.log(error);
        }
      },
      deleteProduct({ commit },product) {
        try {
          CartService.deleteProduct(product)
            .then((response) => {
              commit('REMOVE_FROM_CART', product.id);
            })
        } catch (error) {
          console.log('--erreur---' + error);
        }
      }
    },
    modules: {
    }
  })
