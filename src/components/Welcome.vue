<template>
<div class="container-welcome">
  <div class="container-wel">
  <div class="card">
    <h2>Elegance</h2>
    <i class="fas fa-arrow-right"></i>
    <p>ZARA Collection</p>
    <div class="pic"></div>
   
    
    <button>
    </button>
  </div>
    <div class="card card2">
    <h2>Harmony</h2>
    <i class="fas fa-arrow-right"></i>
    <p>ZARA Collection</p>
    <div class="pic"></div>
   
    
    <button>
    </button>
  </div>
</div>
 <div class="container-wel">
  <div class="card card3">
    <h2>Charm</h2>
    <i class="fas fa-arrow-right"></i>
    <p>ZARA Collection</p>
    <div class="pic"></div>
   
    
    <button>
    </button>
  </div>
    <div class="card card4">
    <h2>Delicacy</h2>
    <i class="fas fa-arrow-right"></i>
    <p>ZARA Collection</p>
    <div class="pic"></div>
    
    
    <button>
    </button>
  </div>
</div>

<a href="https://dribbble.com/YancyMin" class="dr-url" target="_blank"><img class="dr" src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png" alt=""></a>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container-welcome{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

i {
  opacity: 0;
  font-size: 18px;
  color: #fff;
  will-change: transform;
  -webkit-transform: scale(0.1);
  transform: scale(0.1);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

h2{
  pointer-events:none;
}

body {
  background-color: #E6E5E1;
  width: 100vw;
  height: 100vh;
}

.container-wel {
    margin: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
  .card {
    position: relative;
    width: 500px;
    height: 300px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 4px;
  }
    .card:before {
      content: "";
      z-index: 99;
      position: absolute;
      top: -10px;
      left: 32px;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background-color: #E6E5E1;
    }
    .card:after {
      content: "";
      z-index: 99;
      position: absolute;
      bottom: -10px;
      left: 32px;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background-color: #E6E5E1;
    }
    ul {
      z-index: 99;
      position: absolute;
      left: 39px;
      top: 5px;
      list-style-type: none;}
      ul li {
        width: 2px;
        height: 2px;
        border-radius: 2px;
        margin: 6px 0;
        background-color: #E6E5E1;
      }
  
    h2 {
      z-index: 99;
      font-family: "Poppins", sans-serif;
      position: absolute;
      bottom: 0;
      right: 130px;
      font-size: 60px;
      font-weight: 700;
      color: #fff;
    }

    .fa-arrow-right {
      z-index: 100;
      position: absolute;
      right: 75px;
      bottom: 25px;
      font-size: 40px;
      cursor: pointer;
    }
    p {
      z-index: 99;
      position: absolute;
      top: 20px;
      right: 70px;
      color: #fff;
      opacity: 0.7;
      font-size: 12px;
      letter-spacing: 1px;
      writing-mode: vertical-lr;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
    .pic {
      z-index: 100;
      width: 100%;
      height: 100%;
      background-image: url("https://cdn.shopify.com/s/files/1/0539/7233/6814/files/Hero-Image-Slide-Show_Hair_R2_2048x.jpg?v=1618959909");
      background-size: 100% 100%;
      
    }

    .social {
      position: absolute;
      left: 60px;
      top: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 180px;
      height: 64px;
      border-radius: 80px;
    }

    .social i:nth-of-type(1) {
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;
    }

    .social i:nth-of-type(2) {
      -webkit-transition-delay: 0.3s;
      transition-delay: 0.3s;
    }

    .social i:nth-of-type(3) {
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .social i:nth-of-type(4) {
      -webkit-transition-delay: 0.1s;
      transition-delay: 0.1s;
    }

    .social:hover i {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

   
     button i {
        font-size: 3rem;
      }

    button:hover button {
      transform: scale(16.5);
    }

    button:hover p {
      color: #fff;
    }
    
    button:hover .pic {
      filter: grayscale(0);
      
    }
  
  

    .card2 .pic {
      background-image: url("https://cdn.shopify.com/s/files/1/0539/7233/6814/files/Hero-Image-Slide-Show_Skincare_R2_2048x.jpg?v=1618959882");
    }
      .card3 .pic {
      background-image: url("https://cdn.shopify.com/s/files/1/0539/7233/6814/files/Hero-Image-Slide-Show_Makeup_R2_2048x.jpg?v=1618959936");
    }
      .card4 .pic {
      background-image: url("https://cdn.shopify.com/s/files/1/0539/7233/6814/files/Hero_Shop_by_Product_R2_2048x.jpg?v=1619192808");
    }
    .card2 button {
      background-color:  #2b26c3;
    }
  


.dr {
position: absolute;
  bottom: 16px; 
  right: 16px;
  width:100px;
}
 
</style>