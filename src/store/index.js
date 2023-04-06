import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '@/services/ProductService'
import CartService from '@/services/CartService'
import UserService from '@/services/UserService'
import VueRouter from '@/router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    category: [],
    cart: [],
    users: [],
    reviews: [],
    user: null,
    product: null
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
    SET_PRODUCT(state, product) {
      state.product = product
    },
    ADD_TO_REVIEWS(state, review) {
      state.reviews.push(review)
    },
    SET_REVIEWS(state, reviews) {
      state.reviews = reviews
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
    },
    // ------user ------
    SIGN_UP(state, user) {
      state.users.push(user);
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    // ---Products ---
    fetchProducts({ commit }) {
      ProductService.getProducts()
        .then((response) => {
          commit('SET_PRODUCTS', response.data);
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
    fetchProduct({ commit }, id) {
      ProductService.getProduct(id)
        .then((response) => {
          commit('SET_PRODUCT', response.data);
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
    fetchCart({ commit }, id) {
      UserService.getUserById(id)
        .then((response) => {
          commit('SET_CART', response.data.cart)
        })
        .catch((error) => {
          console.error(error.message)
        })
    },
    addToCart({ commit }, product) {
      if (this.state.cart.includes(product)) {
        VueRouter.push({ name: 'cart' });
      } else {
        console.log('from store' + product.id);
        CartService.addToCart(product)
          .then(() => {
            commit('ADD_TO_CART', product);
            console.log('add to cart---' + this.state.cart.length)
          })
          .catch((error) => {
            console.log(error.message)
          });
        VueRouter.push({ name: 'cart' });
      }


    },

    setQuantity({ commit }, { product, id }) {
      let cart = [...this.state.cart.map((e) => {
        if (e.id === product.id) {
          return { ...e, quantity: product.quantity };
        }
        return e;
      })]
      UserService.putCartOfUser(id, cart).then((response) => {

        commit('SET_QUANTITY', response.data.cart)

      }).catch((error) => {

        console.error(error.message)

      })
    },


    addReview({ commit }, { id, review }) {

      ProductService.getProduct(id)
        .then((response) => {

          if (response.data.reviews != null) {
            console.log(response.data)
            this.state.reviews = [...response.data.reviews, review];

          }
          else {
            this.state.reviews.push(review);
          }
          try {
            ProductService.addReviewAboutProduct(id, this.state.reviews)
              .then(() => {
                commit('ADD_TO_REVIEWS', review);
                ProductService.getProduct(id)
                  .then((response) => {
                    commit('SET_PRODUCT', response.data);
                  })
                  .catch((error) => {
                    console.error('--erreur---2' + error.message)
                  });
                alert('Your review has been added!');
              })
          } catch (error) {
            console.log('--erreur---' + error);
          }
        })
        .catch((error) => {
          console.error('--erreur---2' + error.message)
        });

    },

    deleteProduct({ commit }, { product, id }) {
      let cart = this.state.cart.filter(p => p.id !== product.id);
      try {
        UserService.deleteProductFromCart(id, cart)
          .then((response) => {
            commit('REMOVE_FROM_CART', product.id);
          })
      } catch (error) {
        console.log('--erreur---' + error);
      }
    },
    signUp({ commit }, user) {
      let successSignUp = true;
      UserService.postUser(user)
        .then((response) => {
          commit('SIGN_UP', user)
        }).catch((error) => {
          console.error(error.message)
          successSignUp = false;
        })
      return successSignUp;
    },
    signIn({ commit }, id) {
      UserService.getUserById(id).then((response) => {
        commit('SET_USERS', { id: response.data.id })
        if (response.data.cart != null && response.data.cart.length > 0) {
          VueRouter.push({ name: 'cart' })
        } else {
          VueRouter.push({ name: 'home' })
        }
      }).catch((error) => {
        console.error(error.message)
      })
    },
    getUsers({ commit }, email) {
      UserService.getUsers().then((response) => {
        commit('SET_USERS', response.data)
      }).catch((error) => {
        console.error(error.message)
      })
    },
    setUser({ commit }, id) {
      UserService.getUserById(id).then((response) => {
        commit('SET_USER', response.data)
      }).catch((error) => {
        console.error(error.message)
      })
    },
    setProductInCart({ commit }, { product, id }) {

      UserService.getUserById(id).then((response) => {
        commit('SET_USER', { id: response.data.id });

        let user = {
          id: response.data.id,
          username: response.data.username,
          password: response.data.password, email: response.data.email,
          cart: [...response.data.cart, product]
        };

        if (!response.data.cart.some((p) => p.id === product.id)) {

          UserService.putUser(user).then((response) => {
            commit('SET_PRODUCT_TO_CART', response.data, product)
          }).catch((error) => {
            console.error(error.message)
          })
        }
      }).catch((error) => {
        console.error(+ error.message)
      })

    },

  },
  modules: {
  }
})
