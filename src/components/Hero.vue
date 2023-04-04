<template>
  <div class="container_hero">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class=" hero-img hero-img" :src="image1" />
        </div>
        <div class="swiper-slide">
          <img class=" hero-img" :src="image2" />
        </div>
        <div class="swiper-slide">
          <img class=" hero-img" src="https://img.beautylaunchpad.com/files/base/allured/all/image/2021/01/Screenshot_2021_01_13_121927.5fff39e1680ab.png?auto=format%2Ccompress&q=70&w=700" />
        </div>
        <div class="swiper-slide">
          <img class=" hero-img" :src="image3" />
        </div>
        <div class="swiper-slide">
          <img class=" hero-img" :src="image4" />
        </div>
        <div class="swiper-slide">
          <img class=" hero-img" :src="image5" />
        </div>
        <div class="swiper-slide">
          <img class=" hero-img" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F05%2Fexperimental-makeup-trends-FI.jpg?w=960&cbr=1&q=90&fit=max" />
        </div>
        <div class="swiper-slide">
          <img class=" hero-img" src="https://cdn11.bigcommerce.com/s-0d47ho/images/stencil/832x750/uploaded_images/rose-gold-metallic-powder-on-eyes.jpg?t=1551989945" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
  mounted() {
    new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 5,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      lazy: true,
      pagination: {
        el: '.swiper-pagination'
      }
    });
  },
  data() {
    return {
      image1: require('@/assets/Hero/image1.jpg'),
      image2: require('@/assets/Hero/image2.jpg'),
      image3: require('@/assets/Hero/image3.jpg'),
      image4: require('@/assets/Hero/image4.jpg'),
      image5: require('@/assets/Hero/image5.png'),
    }
  },
};
</script>
<style scoped>
 .swiper-slide {
  margin-top:100px;
  padding: 30px;
  height: 70vh;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

.swiper-slide:nth-child(even) {
  animation-name: slideInRight;
}

.swiper-slide:nth-child(odd) {
  animation-name: slideInLeft;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.hero-img {
  max-width: 100%;
  max-height: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

.swiper-slide img:nth-child(even) {
  animation-name: fadeInRight;
}

.swiper-slide img:nth-child(odd) {
  animation-name: fadeInLeft;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>