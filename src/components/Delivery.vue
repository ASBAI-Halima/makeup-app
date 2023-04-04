<template>
  <div id="page-top-bar" class="page-top-bar top-bar-01 top-bar-layout-1l">
    <div class="container">
      <div class="top-bar-wrap">
        <div class="top-bar-section">
          <div class="row">
            <div class="col-md-12 top-bar-left">
              <div class="top-bar-column-wrap">
                <div class="top-bar-text">
                  <span class="top-bar-tag" style="font-size: 12px"
                    >Experience the magic of Moroccan beauty with Zara Morocin 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-bar-wrap">
        <div class="top-bar-section">
          <div class="row">
            <div class="col-md-12 top-bar-left">
              <div class="top-bar-column-wrap">
                <div class="top-bar-text">
                  <span class="top-bar-tag" style="font-size: 12px">
                    <div class="footer__content">
                      <a href="#" class="footer__social">
                        <i class="bx bxl-facebook"></i>
                      </a>
                      <a href="#" class="footer__social">
                        <i class="bx bxl-twitter"></i>
                      </a>
                      <a href="#" class="footer__social">
                        <i class="bx bxl-instagram-alt"></i>
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Top bar styles */
.page-top-bar {
  width: 100%;
  display: block;
  background-color:#000;
  padding: 10px 5px;
  border-bottom: 1px solid #ebebeb;
  font-size: 14px;
  border-radius: 5px;
}
.container{
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.top-bar-tag {
  background-color: #000;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 5px;
}

.top-bar-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar-column-wrap {
  display: flex;
  align-items: center;
}

.top-bar-text {
  margin-right: 20px;
}

.top-bar-collapsible-toggle {
  display: none;
}

@media only screen and (max-width: 768px) {
  /* Styles for mobile screens */
  .top-bar-section {
    flex-direction: column;
  }

  .top-bar-left,
  .top-bar-right {
    width: 100%;
  }

  .top-bar-right {
    margin-top: 10px;
  }

  .top-bar-collapsible-toggle {
    display: block;
    font-size: 24px;
    margin-left: auto;
  }
}

.footer__social {
  color: #ffffff;
}

.footer__social:hover {
  color: #cccccc;
}
.footer__content{
  width: 100px;
  display: flex;
  align-content: center;
  justify-content: space-between;
 
}
a{
  font-size: 22px;
}



</style>