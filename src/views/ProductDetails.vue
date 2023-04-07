<template>
  <div>
    <loder v-if="product == null"/>
    <section class="product" v-else> 
      <div class="product__photo">
        <div class="photo-container">
          <div class="photo-main">
            <div class="controls">
              <img v-bind:src="product.imageUrl" alt="green apple slice" />
            </div>
          </div>
        </div>
      </div>
      <div class="product__info">
        <div class="title">
          <h1>{{ product.name }}</h1>
          <span>{{ product.category }} category</span>
        </div>
        <div class="price">
          $ <span>{{ product.price }}</span>
        </div>
        <div v-if="product.reviews !== null" class="variant">
          <h3>
            <AwesomeVueStarRating
              v-if="product.reviews"
              :star="
                Math.round(
                  product.reviews.reduce((acc, review) => {
                    if (review.rating != null) acc += review.rating;
                    return acc;
                  }, 0) / product.reviews.length
                )
              "
              :disabled="this.disabled"
              :maxstars="this.maxstars"
              :starsize="this.starsize"
              :hasresults="this.hasresults"
              :hasdescription="this.hasdescription"
              :ratingdescription="this.ratingdescription"
            />
            <div class="reviews" v-else>
              <i class="far fa-star"></i> <i class="far fa-star"></i>
              <i class="far fa-star"></i> <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <span class="description__rating">(no rating yet)</span>
            </div>
          </h3>
        </div>
        <div class="description">
          <h3>Descreption</h3>
          <ul>
            <p>{{ product.description }}</p>
          </ul>
        </div>
        <button @click="addItemToCart(product)" class="buy--btn">
          ADD TO CART
        </button>
      </div>
    </section>
    <!-- --------- donner un avis ---- -->
    <AddReview :id="product.id" />
    <!-- ------------view ------------ -->
    <h1>Reviews</h1>
    <div>
      <div v-if="product.reviews" class="container-review">
        <div v-for="review in product.reviews">
          <Review :review="review" />
        </div>
      </div>
      <div v-else>No reviews exist in this product</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueRouter from "@/router/index";
import Review from "@/components/Review.vue";
import AddReview from "@/components/AddReview.vue";
import AwesomeVueStarRating from "awesome-vue-star-rating";
import Loder from '@/components/Loder.vue';
export default {
  components: {
    Review,
    AddReview,
    AwesomeVueStarRating,
    Loder,
  },
  data() {
    return {
      productId: null,

      ratingdescription: [
        {
          text: "Poor",
          class: "star-poor",
        },
        {
          text: "Below Average",
          class: "star-belowAverage",
        },
        {
          text: "Average",
          class: "star-average",
        },
        {
          text: "Good",
          class: "star-good",
        },
        {
          text: "Excellent",
          class: "star-excellent",
        },
      ],
      hasresults: false,
      hasdescription: false,
      starsize: "lg", //[xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars: 5,
      disabled: false,
    };
  },
  created() {
    this.productId = this.$route.params.id;
    this.$store.dispatch("fetchProduct", this.productId);
  },
  computed: mapState(["product"]),

  methods: {
    addItemToCart(product) {
      if (sessionStorage.getItem("user") != null) {
        this.$store.dispatch("setProductInCart", {
          product: product,
          id: sessionStorage.getItem("user"),
        });
        VueRouter.push({ name: "cart" });
      } else {
        VueRouter.push({ name: "signin" });
      }
    },
  },
};
</script>

<style scoped>
/* ----- Variables ----- */
/* ----- Global ----- */
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  display: grid;
  grid-template-rows: 1fr;
  font-family: "Raleway", sans-serif;
}
.description__rating {
  color: #202020;

  margin-left: 0.5rem;

  font-size: 0.7rem;
}

h3 {
  font-size: 0.7em;
  letter-spacing: 1.2px;
  color: #a6a6a6;
}
h1 {
  font-size: 2em;
  border-left: 5px solid #000;
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 6px;
  font-weight: bold;
  padding-left: 10px;
}

img {
  max-width: 100%;
  height: 100%;
  filter: drop-shadow(1px 1px 3px #a6a6a6);
}
p {
  padding-right: 15px;
  letter-spacing: 1px;
}
/* ----- Product Section ----- */
.product {
  /* display: grid;
  grid-template-columns: 0.9fr 1fr;
   */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  margin: auto;
  padding: 2.5em 0;
  width: 60%;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 100px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* ----- Photo Section ----- */
.product__photo {
  position: relative;
}

.photo-container {
  position: absolute;
  left: -2.5em;
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}

.photo-main {
  border-radius: 6px 6px 0 0;
  /* background: radial-gradient(#e1e2de,#a6a6a6 ); */
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.photo-main .controls {
  display: flex;
  justify-content: space-between;
  padding: 0.8em;
  color: #fff;
}
.photo-main .controls i {
  cursor: pointer;
}
.photo-main img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.9;
  transition: opacity 0.2s ease-out;
  border-radius: 10px;
}

.photo-album {
  padding: 0.7em 1em;
  border-radius: 0 0 6px 6px;
  background-color: #fff;
}
.photo-album ul {
  display: flex;
  justify-content: space-around;
}
.photo-album li {
  float: left;
  width: 55px;
  height: 55px;
  padding: 7px;
  border: 1px solid #a6a6a6;
  border-radius: 3px;
}

/* ----- Informations Section ----- */
.product__info {
  padding: 0.8em 0;
}

.title h1 {
  margin-bottom: 0.1em;
  color: #4c4c4c;
  font-size: 1.5em;
  font-weight: 900;
}
.title span {
  font-size: 0.7em;
  color: #a6a6a6;
}

.price {
  margin: 1.5em 0;
  color: #000;
  font-size: 1.2em;
}
.price span {
  padding-left: 0.15em;
  font-size: 2.9em;
}

.variant {
  overflow: auto;
}
.variant h3 {
  margin-bottom: 1.1em;
}
.variant li {
  float: left;
  width: 35px;
  height: 35px;
  padding: 3px;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
}
.variant li:first-child,
.variant li:hover {
  border: 1px solid #a6a6a6;
}
.variant li:not(:first-child) {
  margin-left: 0.1em;
}

.description {
  clear: left;
  margin: 2em 0;
}
.description h3 {
  margin-bottom: 1em;
}
.description ul {
  font-size: 0.8em;
  list-style: none;
  margin-left: 1em;
}
.description li {
  text-indent: -0.6em;
  margin-bottom: 0.5em;
}

.buy--btn {
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #000;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
}
.buy--btn:active {
  transform: scale(0.97);
}
@media only screen and (max-width: 1000px) {
  .product__photo {
    position: static;
  }
  .photo-container {
    position: static;
  }

  .photo-main img {
    position: static;
    height: 100%;
  }
}
/* ------------ review------ */
.container-review {
  margin-top: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
</style>