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
    categories: [],
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
    SET_CATEGORIES(state, categories) {
      state.categories = categories
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
    fetchCategories({ commit }) {
      ProductService.getProducts()
        .then((response) => {
          let res = [];
          response.data.forEach((obj) => {
            if (!res.includes(obj.category)) {
              res.push(obj.category);
            }
          })
          commit('SET_CATEGORIES', res)
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
    signIn({ commit }, {email, password}) {
      UserService.getUsers().then((res) => {

        res.data.forEach((user) => {
          if(user.email === email && user.password === password){
            sessionStorage.setItem("user", user.id);
            commit('SET_USERS', { id: user.id })
            if (user.cart != null && user.cart.length > 0) {
              VueRouter.push({ name: 'cart' })
            } else {
              VueRouter.push({ name: 'home' })
            }
          }
        })
        
      }).catch((error) => { console.error(error.message) })

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
        let cartItem = [product];
        if (response.data.cart != null) {
          cartItem = [...response.data.cart, product];
        }
        let user = {
          id: response.data.id,
          username: response.data.username,
          password: response.data.password, email: response.data.email,
          cart: cartItem 
        };


        if ((response.data.cart != null && !response.data.cart.some((p) => p.id === product.id) || response.data.cart == null)) {

          UserService.putUser(user).then((response) => {
            commit('SET_CART', response.data.cart)
          }).catch((error) => {
            console.error(error.message)
          })
        }
      }).catch((error) => {
        console.error(error.message)
      })

    },
    cleanCartAfterConfirm({ commit },  idUser ) {
      let cart = [];
      UserService.deleteProductFromCart(idUser, cart)
        .then((response) => {
          commit('CLEAN_CART');
        }).catch((error) => {
          console.error(error.message)
        })
    }

  },
  modules: {
  }
})
