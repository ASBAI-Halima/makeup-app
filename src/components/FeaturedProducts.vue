<template>
  <div class="card-hover">
    <div class="card-hover__content">
      <h3 class="card-hover__title">
        {{ featuredProd.name }}
      </h3>

      <router-link
        :to="{ name: 'details', params: { id: featuredProd.id } }"
        class="card-hover__link"
      >
        <span>Details</span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </router-link>
    </div>

    <img :src="featuredProd.imageUrl" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    featuredProd: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&display=swap");

html {
  box-sizing: border-box;
  font-size: 100%;
}

html,
body {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  -webkit-text-size-adjust: 100%;
  font-variant-ligatures: none;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 100%;
  font-family: "Fira Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5 {
  margin-top: 0;
  margin-bottom: 0;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  color: #000;
  background-color: #f0f8e1;
}

.card-hover {
  
  width: 300px;
  height: 400px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.08);
}

.card-hover:hover .card-hover__extra {
  transform: translateY(0);
  transition: transform 0.35s;
}

.card-hover:hover .card-hover__content {
  background-color: #dee8c2;
  bottom: 100%;
  transform: translateY(100%);
  padding: 50px 60px;
  transition: all 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
}

.card-hover:hover .card-hover__link {
  opacity: 1;
  transform: translate(-50%, 0);
  transition: all 0.3s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
}

.card-hover:hover img {
  transform: scale(1);
  transition: 0.35s 0.1s transform cubic-bezier(0.1, 0.72, 0.4, 0.97);
}

.card-hover__content {
  width: 100%;
  text-align: center;
  background-color: #fefefec7;
  padding: 0 20px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(0);
  transition: all 0.35s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
  will-change: bottom, background-color, transform, padding;
  z-index: 1;

}

.card-hover__content::before,
.card-hover__content::after {
  content: "";
  width: 100%;
  height: 120px;
  background-color: inherit;
  position: absolute;
  left: 0;
  z-index: -1;
}

.card-hover__content::before {
  top: -80px;
  clip-path: ellipse(60% 80px at bottom center);
}
.card-hover__title {
  font-size: 1.5rem;
  margin-bottom: 1em;
}

.card-hover__text {
  font-size: 0.75rem;
}

.card-hover__link {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 10%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
  color: #000;
  opacity: 0;
  padding-top: 10px;
  transition: all 0.35s;
}

.card-hover__link :hover svg {
  transform: translateX(4px);
}

.card-hover__link svg {
  width: 18px;
  margin-left: 4px;
  transition: transform 0.3s;
}

.card-hover__extra {
  height: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-size: 0.5rem;
  text-align: center;
  background-color: #fefefec7;
  padding: 80px;
  bottom: 0;
  z-index: 0;
  color: #dee8c2;
  transform: translateY(100%);
  will-change: transform;
  transition: transform 0.35s;
}

.card-hover__extra span {
  color: #2d7f0b;
}

.card-hover img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: 0.35s transform cubic-bezier(0.1, 0.72, 0.4, 0.97);
  transform: scale(1.1);
}

.card-hover:hover .card-hover__content {
  background-color: #fefefec7;
  bottom: 100%;
  transform: translateY(100%);
  padding: 50px 60px;
  transition: all 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
}

.card-hover:hover .card-hover__link {
  opacity: 1;
  transform: translate(-50%, 0);
  transition: all 0.3s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
}

.card-hover:hover img {
  transform: scale(1);
  transition: 0.35s 0.1s transform cubic-bezier(0.1, 0.72, 0.4, 0.97);
}

.card-hover:has(.card-hover__link:hover) .card-hover__extra {
  transform: translateY(0);
  transition: transform 0.35s;
}
</style>