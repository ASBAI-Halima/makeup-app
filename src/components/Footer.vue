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
               <h2>Our address</h2>
                <p>123 Wedding Street<br>São Paulo - SP</p>
            </div>
            <div class="footer__data">
               <h2>our schedule</h2>
                <p>Monday to Friday<br>from 09:00 am to 06:00 pm</p>
            </div>
            <div class="footer__data">
                <h2>Contact</h2>
                <p>(+212) 11014779</p>
                <p>(+212) 11014779</p>
            </div>
        </div>
        <div class="copy">
            <p>&copy; All rights reserved</p>
            <span>Made with 🤎 by MarquesCode</span>
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