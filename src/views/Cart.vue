<template>
  <div class="container-cart">
    <div v-if="cart.length === 0">hhhhhhhhh</div>
    <div class="card-cart">
      <div class="row">
        <div class="col-md-8 cart">
          <div class="title">
            <div class="row">
              <div class="col">
                <h4><b>Shopping Cart</b></h4>
              </div>
              <div class="col align-self-center text-right text-muted">
                {{ cart.length }} items
              </div>
            </div>
          </div>

          <div
            class="row border-top border-bottom"
            v-for="item in cart"
            :key="item.id"
          >
            <div class="row main align-items-center">
              <div class="col-2">
                <img class="img-fluid" :src="item.imageUrl" alt="" />
              </div>
              <div class="col">
                <div class="row text-muted">{{ item.name }}</div>
                <div class="row">{{ item.category }}</div>
              </div>
              <div class="col">
                <button
                  class="border"
                  @click="update(item, item.quantity - 1, true)"
                >
                  -
                </button>
                <a href="#" class="border">{{ item.quantity }}</a>
                <button
                  class="border"
                  @click="update(item, item.quantity + 1, false)"
                >
                  +
                </button>
              </div>
              <div class="col">
                &euro; {{ item.price * item.quantity }}
                <button @click="removeItem(item)">
                  <span class="close">&#10005;</span>
                </button>
              </div>
            </div>
          </div>

          <router-link :to="{ name: 'products' }">
            <div class="back-to-shop">
              <a href="#">&leftarrow;</a
              ><span class="text-muted">Back to shop</span>
            </div>
          </router-link>
        </div>

        <div class="col-md-4 summary">
          <div>
            <h5><b>Summary</b></h5>
          </div>
          <hr />
          <div class="row">
            <div class="col" style="padding-left: 0">
              ITEMS {{ cart.length }}
            </div>
            <div class="col text-right">
              &euro;
              {{
                cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
              }}
            </div>
          </div>
          <form>
            <p>SHIPPING</p>
            <select>
              <option class="text-muted">Standard-Delivery- &euro;5.00</option>
            </select>
            <p></p>
            <div></div>
          </form>
          <div
            class="row"
            style="border-top: 1px solid rgba(0, 0, 0, 0.1); padding: 2vh 0"
          >
            <div class="col">TOTAL PRICE</div>
            <div class="col text-right">
              &euro;
              {{
                cart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) + 5
              }}
            </div>
          </div>
          <router-link :to="{ name: 'checkout' }" class="button"
            ><button class="btn">CHECKOUT</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("fetchFromCart");
  },
  methods: {
    update(item, newQ, updated) {
      if (updated && item.quantity == 1) {
        return;
      }
      item.quantity = newQ;
      this.$store.dispatch("setQuantity", item);
    },
    removeItem(item) {
      console.log("id from cart " + item);
      
      this.$store.dispatch("deleteProduct",  item);
    },
    
  },

  computed: mapState(["cart"]),
};
</script>

<style scoped>
.container-cart {
  margin-top: 20px;
  height: 100%;
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
}

.title {
  margin-bottom: 5vh;
}
.card-cart {
  margin: auto;
  max-width: 950px;
  width: 90%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}
@media (max-width: 767px) {
  .card-cart {
    margin: 3vh auto;
  }
}
.cart {
  width: 60%;
  background-color: #fff;
  padding: 4vh 5vh;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}
@media (max-width: 767px) {
  .cart {
    width: 100%;
    padding: 4vh;
    border-bottom-left-radius: unset;
    border-top-right-radius: 1rem;
  }
}
.summary {
  margin-right: 0;
  width: 40%;
  object-fit: cover;
  background-color: #ddd;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 4vh;
  color: rgb(65, 65, 65);
}
@media (max-width: 767px) {
  .summary {
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
    background-color: #ddd;
    width: 100%;
  }
}
.summary .col-2 {
  padding: 0;
}
.summary .col-10 {
  padding: 0;
}
.row {
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
}
.title b {
  font-size: 1.5rem;
}
.main {
  margin: 0;
  padding: 2vh 0;
  width: 100%;
}
.col-2,
.col {
  padding: 0 1vh;
}
a {
  padding: 0 1vh;
}
.close {
  margin-left: auto;
  font-size: 0.7rem;
}
img {
  width: 3.5rem;
}
.back-to-shop {
  margin-top: 4.5rem;
}
h5 {
  margin-top: 4vh;
}
hr {
  margin-top: 1.25rem;
}
form {
  padding: 2vh 0;
}
select {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.5vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
.btn {
  background-color: #000;
  border-color: #000;
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 0;
}
.btn:focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  transition: none;
}
.btn:hover {
  color: white;
}
a {
  color: black;
}
a:hover {
  color: black;
  text-decoration: none;
}
#code {
  background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.253),
      rgba(255, 255, 255, 0.185)
    ),
    url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
}
</style>