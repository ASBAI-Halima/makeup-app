<template>
  <footer class="footer" id="contact">
        <div class="footer__list section container grid">
            <div class="footer__data">
                <h1><a href="#"><img class="logo" :src="logo" alt="My Logo" /></a></h1>
                <div class="footer__data-social">
                    <a href=""><i class='bx bxl-facebook social__icon'></i></a>
                    <a href=""><i class='bx bxl-instagram social__icon' ></i></a>
                    <a href=""><i class='bx bxl-whatsapp social__icon' ></i></a>
                </div>
            </div>
            <div class="footer__data">
               <h2>Our Services</h2>
                <p>Pricing<br>Discount<br>Shipping mode</p>
            </div>
            <div class="footer__data">
               <h2>our Company</h2>
                <p>Blog<br>About Us<br>Our mission</p>
            </div>
            <div class="footer__data">
                <h2>Contact</h2>
                <p>(+212) 11014779</p>
                <p>(+212) 11014779</p>
                <p></p>
            </div>
        </div>
        <div class="copy">
            <span>&copy; All rights reserved</span>
            <p>MADE WITH LOVE BY Asbai Halima SQLI </p>
        </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      logo: require('@/assets/logo.png')
    }
  }
}
</script>

<style>

</style>