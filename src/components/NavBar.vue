<template>
  <div id="nav" class="nav">
        <Delivery />
        
        <nav>
        <header class="l-header" id="header">
        <div class="navbar">
            <div class="brand">
                <router-link to="/" class="brand"><a href="#"><img class="logo" :src="logo" alt="My Logo"/></a></router-link>
            </div>
            <div class="nav" id="nav">
              <div
                class="nav__menu"
                :class="this.showMobileMenu ? 'fade_card' : ''"
                id="nav-menu"
                   @click="showMenu()"  >
                <ul class="nav__menu">
                   
                  <li class="nav__item">  <router-link :to="{ name: 'home' }" class="nav__link active-link">Home</router-link> </li>
                  <li class="nav__item"> <router-link :to="{ name: 'products' }" class="nav__link active-link"> all products</router-link></li>
                  <li class="nav__item"> 
                    <router-link :to="{ name: 'category',params:{cat:'face'} }" class="nav__link active-link">Face</router-link> 
                  </li>
                  <li class="nav__item"> <router-link :to="{ name: 'category',params:{cat:'lips'}  }" class="nav__link active-link">Lips</router-link> </li>
                  <li class="nav__item"> <router-link :to="{ name: 'category',params:{cat:'eyes'}  }" class="nav__link active-link">Eyes</router-link> </li>
                  <li class="nav__item"> <router-link :to="{ name: 'category',params:{cat:'brushe'}  }" class="nav__link active-link">Brushes & Tools</router-link> </li>
                  <li class="nav__item"> <router-link :to="{ name: 'category',params:{cat:'palette'}  }" class="nav__link active-link">Palettes</router-link> </li>
                  <li class="nav__item"> <router-link :to="{ name: 'category',params:{cat:'bag'}  }" class="nav__link active-link">Bags & Organizers</router-link> </li>
                  <li class="nav__item"> <router-link :to="{ name: 'category',params:{cat:'travel'}  }" class="nav__link active-link">Travel Size</router-link> </li>
                  <li class="nav__item"> <router-link :to="{ name: 'category',params:{cat:'ulta'}  }" class="nav__link active-link">ULTA Collection</router-link> </li>
                      
                 
                </ul>
                </div>
                  
            </div>

            <div class="nav__cart" id="nav-cart">
               <a @click="addItemToCart()" class="nav__link active-link">
                 <stron><i class='bx bx-cart cart-icon change-theme' id='theme-button'></i></stron>
               </a>
               <router-link :to="{ name: 'signin' }" class="nav__link active-link">
                 <stron><i class='bx bx-user cart-icon change-theme' id='theme-button'></i></stron>
               </router-link>

               <li class="icone_list" @click="showMenu()"><stron><i class='bx bx-list-ul cart-icon change-theme' id='theme-button'></i></stron>
               </li>
            </div>
        </div>
    </header>
    </nav>
  </div>
</template>
<script>
/* eslint-disable */
import VueRouter from "@/router/index";
import Delivery from '@/components/Delivery';
export default {
     components: {
    Delivery
  },
  data() {
    return {
      logo: require('@/assets/logo.png'),
       showMobileMenu: true,
    }
  },
   methods :{
   addItemToCart() {
    
      if (sessionStorage.getItem("user") != null) {  
        VueRouter.push({ name: "cart" });
      } else {
        VueRouter.push({ name: "signin" });
      }
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    }
  

}
</script>

<style>
/* eslint-disable */
    .nav {
        align-items: center;
       
       flex-direction: column;
       justify-content: space-between;
    }
    nav{
        z-index: 2;
        position: fixed;
        width: 100%;
    }
    .logo{
        width:100px;
        height: auto;
    }
    .navbar{
        display: flex;
        align-items: flex-start;
       justify-content: space-between;
       
    }
    .brand{
        display: flex;
        justify-self: flex-start;
        padding-right: 4rem;
        margin-left: 1rem;
    }
    .nav__cart{
        width: 100px;
        font-size: 28px;
        display: flex;
        justify-content: space-around;
    }
    .show-menu {
      top: 5rem;
    }
   .nav__item {
  position: relative;
} 
.icone_list {
  display: none;
}

@media screen and (max-width: 1200px) {
  .nav ul.nav__item {
    display: block;
    width: 100%;
    height: 100%;
    
    
    
  }
  .fade_card {
    display: none;
    
  }
  .icone_list {
  display: block;
  
}
}
.nav__link,
.nav__logo,
.nav__toggle {
  color: #161212;
  font-weight: 600;
}

</style>