<template>
  <div id="content">
    <div class="testimonial">
      <blockquote>
        {{review.review}}
      </blockquote>
      <div></div>
      <p >{{review.name}}</p>
       <p >{{review.email}}</p>
    </div>
  </div>
</template>

<script>
export default {
   props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
body {
  color: #1a1a1a;
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.6em;
  text-align: center;
  background: #757f9a;
  background: -webkit-linear-gradient(to left, #d7dde8, #757f9a);
  background: linear-gradient(to left, #d7dde8, #757f9a);
}

#content {
  max-width: 600px;
  /* margin: 25vh auto; */
  margin: 20px;
}

.testimonial blockquote {
  margin: 10px 10px 0;
  background: #efefef;
  padding: 20px 60px;
  position: relative;
  border: none;
  border-radius: 8px;
  font-style: italic;
}

.testimonial blockquote:before,
.testimonial blockquote:after {
  content: "\201C";
  position: absolute;
  font-size: 80px;
  line-height: 1;
  color: #757f9a;
  font-style: normal;
}

.testimonial blockquote:before {
  top: 0;
  left: 10px;
}

.testimonial blockquote:after {
  content: "\201D";
  right: 10px;
  bottom: -0.5em;
}

.testimonial div {
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #efefef;
  margin: 0 0 0 60px;
}

.testimonial p {
  margin: 8px 0 0 20px;
  text-align: left;
  color: #1a1a1a;
  font-size: 15px;
}

</style>