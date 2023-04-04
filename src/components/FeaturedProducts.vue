<template>
  <div class="container-category">
    <h2>Shop Makeup</h2>
    <div class="container-categ">
      <router-link  class="router"
        :to="{ name: 'category', params: { cat: 'face' } }"
      >
        <div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/face-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>Face</p>
          </div>
        </div>
      </router-link>

      <router-link
        :to="{ name: 'category', params: { cat: 'lips' } }"
        ><div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/lips-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>Lips</p>
          </div>
        </div></router-link
      >
      <router-link
        :to="{ name: 'category', params: { cat: 'eyes' } }"
        ><div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/eyes-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>Eyes</p>
          </div>
        </div></router-link
      >
      <router-link
        :to="{ name: 'category', params: { cat: 'brushe' } }"
        ><div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/makeup-brushes-tools-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>Makeup Brushes & Tools</p>
          </div>
        </div></router-link
      >
      <router-link
        :to="{ name: 'category', params: { cat: 'body' } }"
      >
        <div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/body-makeup-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>body Makeup</p>
          </div>
        </div></router-link
      >
      <router-link
        :to="{ name: 'category', params: { cat: 'palette' } }"
      >
        <div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/makeup-palettes-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>Makeup Palettes</p>
          </div>
        </div></router-link
      >
      <router-link
        :to="{ name: 'category', params: { cat: 'bag' } }"
      >
        <div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/makeup-bags-cases-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>Makeup Bags & Organizers</p>
          </div>
        </div></router-link
      >
      <router-link
        :to="{ name: 'category', params: { cat: 'ulta' } }"
      >
        <div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/ulta-collection-makeup-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>ULTA Collection</p>
          </div>
        </div></router-link
      >
      <router-link
        :to="{ name: 'category', params: { cat: 'travel' } }"
        ><div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/makeup-travel-size-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>Travel Size</p>
          </div>
        </div></router-link
      >
      <router-link
        :to="{ name: 'category', params: { cat: 'gift' } }"
        >
        <div class="box">
          <div class="imgBox">
            <img
              src="https://media.ulta.com/i/ulta/makeup-gifts-bubble?w=256&h=256&fmt=webp"
              alt=""
            />
          </div>
          <div class="content-categ">
            <p>Gifts & Value Sets</p>
          </div>
        </div></router-link
      >
    </div>
     <router-link
        :to="{ name: 'products' }"
        >
    <button>View All Products</button></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a{
  font-size: 15px;
  color : black;
}
a:hover{
  color: gray;
}
.container-category {
  padding: 50px;
  height: 100%;
}
h2 {
  padding: 40px;
  font-family: "Playball", cursive;
  font-display: unset;
}
.content-categ p {
  transition: background-color 0.3s ease-in-out;
  position: relative;
}
.content-categ p::after {
  content: "";
  position: absolute;
  text-align: center;
  bottom: -1px;
  left: 10px;
  width: 100%;
  height: 1px;
  background-color: #000000;
  transition: transform 0.3s ease-in-out;
  transform: scaleX(0);
  transform-origin: bottom right;
}

.content-categ p:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.container-categ {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

@media (min-width: 600px) {
  .container-categ {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 900px) {
  .container-categ {
    grid-template-columns: repeat(5, 1fr);
  }
}

.imgBox {
  padding: 10px;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}
.imgBox img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  resize: both;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}
.imgBox img:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}
button {
  margin-top: 50px;
  padding: 30px;
  animation: 1.5s ease infinite alternate running shimmer;
  background: linear-gradient(90deg, #6769d4 0%, #000 30%, #9192ff 85%);
  background-size: 200% 100%;
  border: none;
  border-radius: 6px;
  box-shadow: -2px -2px 10px rgba(255, 227, 126, 0.5),
    2px 2px 10px rgba(144, 148, 255, 0.5);
  color: #fff;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 670;
  line-height: 24px;
  overflow: hidden;
  padding: 12px 24px;
  position: relative;
  text-decoration: none;
  transition: 0.2s;
}
buttonsvg {
  left: -20px;
  opacity: 0.5;
  position: absolute;
  top: -2px;
  transition: 0.5s cubic-bezier(0.5, -0.5, 0.5, 1.5);
}

button:hover svg {
  opacity: 0.8;
  transform: translateX(50px) scale(1.5);
}

button:hover {
  transform: rotate(-3deg);
}

button:active {
  transform: scale(0.95) rotate(-3deg);
}

@keyframes shimmer {
  to {
    background-size: 100% 100%;
    box-shadow: -2px -2px 6px rgba(255, 227, 126, 0.5),
      2px 2px 6px rgba(144, 148, 255, 0.5);
  }
}
</style>