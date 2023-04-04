<template>
  <div>
    
    <Hero/>
    <Welcome />
    <FeaturedProducts/>
    <WhyUs />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from '@/components/Hero.vue';
import FeaturedProducts from '@/components/FeaturedProducts.vue';
import WhyUs from '@/components/WhyUs.vue';
import Welcome from '@/components/Welcome.vue';
export default {
  components: {
    Welcome,
    Hero,
    FeaturedProducts,
    WhyUs
  }
  
}
</script>
<style scoped>

</style>
