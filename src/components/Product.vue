<template>


        <main>
        <div class="card">
            <img
            :src="product.imageUrl"
            alt=""
            />
            <div class="card-content">
            <h2>{{product.name}}</h2>
            <p>
                {{product.price}}$
            </p>
            <router-link :to="{ name: 'details', params:{ id:product.id} }"  class="button"  >
                      
                details 
              
            </router-link> 
            
             <a  @click="addItemToCart(product)" class="card-content-details">          
                <stron><i class='bx bx-cart cart-icon change-theme' id='theme-button'></i></stron>
                <span class="material-symbols-outlined"> add </span>
            </a>             
            </div>
        </div>
        </main>  
</template>

<script>
import VueRouter from "@/router/index";
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    
    methods :{
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

/* -----------products ------------- */

.container-products {
  height: 100%;
  margin-top: 100px;
}
@media (min-width: 600px) {
  .containers-products {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  .containers-products {
    grid-template-columns: repeat(3, 1fr);
  }
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
.card-content-details{
  margin: 200px;
  margin-bottom: 370px;
  color:#fff;
  font-size: 15px;
  border: 0.5px solid #000;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top:10px;
  background-color: #000 ;
  font-family: "Roboto Condensed", sans-serif;
}
.card-content-details:hover{
  background-color: gray ;
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