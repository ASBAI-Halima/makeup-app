<template>
  <div>
    <Hero />
    <!-- <Welcome /> -->
    <h2>FeaturedProducts</h2>
    <div class="container-fr-prod">
      <div class="featured-prod" >
        <FeaturedProducts  v-for="feat in featuredProds" :key="" :featuredProd="feat" />
      </div>
    </div>
    <CategoriesProducts />
    <WhyUs />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import FeaturedProducts from "@/components/FeaturedProducts.vue";
import WhyUs from "@/components/WhyUs.vue";
import Welcome from "@/components/Welcome.vue";
import CategoriesProducts from "@/components/CategoriesProducts.vue";
export default {
  components: {
    Welcome,
    Hero,
    FeaturedProducts,
    WhyUs,
    CategoriesProducts,
  },
 
  created() {
    this.$store.dispatch("fetchProducts");
  },

  computed: {
    
    featuredProds() {
      let ps = [...this.$store.state.products];
      return ps.filter((e)=>e.featured);
    },
  },
};
</script>
<style scoped>
h2 {
  padding: 40px;
  font-family: "Playball", cursive;
  font-display: unset;
}
.container-fr-prod {
  padding-right: 10%;
  padding-left: 5%;
  height: 100%;
}
.featured-prod {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 110px;
}
@media screen and (max-width: 616px){
  .featured-prod{
    padding-left: 2%;
    padding-right:2%;
    width: max-content;
  }
}
</style>
