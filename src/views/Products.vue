<template>
  <div>
    <div class="loder" v-if="products == null">
      <Loder />
    </div>
    <div class="container-products" v-else>
      <!-- ---search ---- -->

      <div class="container-search">
        <Search :categories="categories" @category="setCategory" />
        <Search :prices="prices" @price="setPrice" />
        <Search :rating="ratingSelect" @rating="setRating" />
      </div>

      <!-- ---products ---- -->

      <div class="containers-products">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />

        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import Product from "@/components/Product.vue";
import Search from "@/components/Search.vue";
import Loder from "@/components/Loder.vue";

export default {
  components: {
    Icon,
    Product,
    Search,
    Loder,
  },
  data() {
    return {
      category: null,
      price: null,
      rating: null,
      prices: [
        { value: 100, text: "< 100$" },
        { value: 300, text: "< 300$" },
        { value: 500, text: "< 500$" },
        { value: 1000, text: "< 1000$" },
      ],
      ratingSelect: [1, 2, 3, 4, 5],
    };
  },

  created() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchCategories");
  },
  computed: {
    products() {
      return this.$store.state.products
        .filter(
          (product) =>
            (this.category != null && this.category == product.category) ||
            this.category == null
        )
        .filter(
          (product) =>
            (this.price != null && product.price <= this.price) ||
            this.price == null
        )
        .filter((product) => {
          if (
            this.rating != null &&
            this.rating != 0 &&
            product.reviews != null &&
            product.reviews.length != 0
          ) {
            let rate = Math.round(
              product.reviews.reduce((acc, review) => {
                if (review.rating != null) acc += review.rating;
                return acc;
              }, 0) / product.reviews.length
            );
            if (this.rating <= rate) {
              return product;
            }
          } else if (
            (this.rating != null && product.reviews == null) ||
            (this.rating != null &&
              product.reviews != null &&
              product.reviews.length == 0) ||
            this.rating == null
          ) {
            return product;
          }
        });
    },
    categories() {
      return this.$store.state.categories;
    },
  },

  methods: {
    handleSearch(searchTerm) {
      this.searchResults = [
        ...this.products.filter((item) => {
          console.log("from parent de search " + searchTerm);
          return (
            item.category.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
          );
        }),
      ];
    },
    setCategory(value) {
      this.category = value;
    },
    setPrice(value) {
      this.price = value;
    },
    setRating(value) {
      this.rating = value;
    },
  },
};
</script>

<style scoped>
.loder {
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: auto;

  margin-top: 100px;
}
@media (max-width: 1260px) {
  .container-search {
    display: flex;
    flex-direction: column;
  }
}
.container-products {
  height: 100%;
  margin-right: 6%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #130f40;
  font-family: "Lato" !important;
}
.search-box {
  margin-left: 40%;

  width: fit-content;
  position: relative;
}
.input-search {
  height: 50px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;
  background-color: #000;
  padding-right: 40px;
  color: #000;
}
.input-search::placeholder {
  color: #000;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}
.btn-search {
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color: #ffffff;
  background-color: transparent;
  pointer-events: painted;
}
.btn-search:focus ~ .input-search {
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid #000;
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
.input-search:focus {
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
/* -----------products ------------- */
.containers-products {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: "Roboto", sans-serif;
}

.card {
  width: 20rem;
  height: 30rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: #ffffff;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
}
.card img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.9;
  transition: opacity 0.2s ease-out;
}

.card h2 {
  position: absolute;
  inset: auto auto 30px 30px;
  margin: 0;
  transition: inset 0.3s 0.3s ease-out;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  padding: 5%;
}

.card p,
a {
  position: absolute;
  opacity: 0;
  max-width: 80%;
  transition: opacity 0.3s ease-out;
}

.card p {
  inset: auto auto 80px 30px;
}

.card a {
  inset: auto auto 40px 30px;
  color: inherit;
  text-decoration: none;
}

.card:hover h2 {
  inset: auto auto 220px 30px;
  transition: inset 0.3s ease-out;
}

.card:hover p,
.card:hover a {
  opacity: 1;
  transition: opacity 0.5s 0.1s ease-in;
}

.card:hover img {
  transition: opacity 0.3s ease-in;
  opacity: 1;
}

.material-symbols-outlined {
  vertical-align: middle;
}
</style>