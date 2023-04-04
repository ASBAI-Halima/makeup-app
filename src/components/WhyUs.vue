<template>
  <section class="why-us">
    <div class="container-why">
      <div class="row-why">
        <div class="col-md-6-left">
          <div>
            <h2>Why Us?</h2>
            <p>
              We are a company that prides itself on providing the highest
              quality products and services to our customers. We use only the
              best ingredients and materials in our products, and our team is
              dedicated to providing excellent customer service and support.
              With fast and reliable delivery options, you can trust us to get
              your products to you as quickly as possible. Choose us for all of
              your needs and experience the difference in quality and service.
            </p>
          </div>
          <div class="why-us-content">
            <div class="why-us-item">
              <h3>Quality</h3>
              <p>
                We use only the best ingredients and materials to ensure the
                highest quality products.
              </p>
            </div>
            <div class="why-us-item">
              <h3>Service</h3>
              <p>
                Our team is dedicated to providing excellent customer service
                and support.
              </p>
            </div>
            <div class="why-us-item">
              <h3>Delivery</h3>
              <p>
                We offer fast and reliable delivery options to get your products
                to you as quickly as possible.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img
            class="u-expanded-width-lg u-expanded-width-xl u-image u-image-default u-image-1"
            src="//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/b72fb2c522a95ccfbc42846e/bfa58c15-fd77-f52e-94e7-443d7f3d5aec.jpg"
            alt=""
            data-image-width="874"
            data-image-height="917"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.why-us {
  background-color: #000;
  padding: 50px 0;
  color: #fff;
  border-radius: 10px;
}

.why-us h2 ,h3{
  text-align: center;
  margin-bottom: 50px;
  font-family: "Playball", cursive;
}
.row-why {
  display: flex;
  justify-content: space-around;
}
.col-md-6-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.why-us img {
  display: block;
  max-width: 500px;
  height: auto;
  margin-bottom: 30px;
}

@media screen and (max-width: 767px) {
  .why-us .row {
    flex-direction: column;
  }

  .why-us img {
    margin-bottom: 20px;
  }
}

.why-us-content {
  display: flex;
  flex-direction: row;
  color: #fff;
  z-index: 22;
}

.why-us-item {
  width: 100%;
  margin-bottom: 30px;
 border: #fff 1px solid;
 border-radius: 10px;
 padding: 10px;
 margin: 4%;
  transform: translateY(30px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}




.why-us-item p,p {
  font-size: 18px;
  line-height: 1.5;
}

.why-us-image {
  text-align: right;
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.why-us-image img {
  max-width: 100%;
  height: auto;
}

@media screen and (min-width: 768px) {
  .why-us-content {
    flex-wrap: nowrap;
  }

  .why-us-item {
    width: calc(100% / 3);
    margin-right: 30px;
    margin-bottom: 0;
  }

  .why-us-item:last-child {
    margin-right: 0;
  }

  .why-us-image {
    width: 50%;
    text-align: right;
    padding-left: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}

.why-us-content .why-us-item.animated,
.why-us-image.animated {
  opacity: 1;
  transform: translateX(0);
} 
</style>