<template>
  <div id="content">
       <div >
         <AwesomeVueStarRating :star="this.review.rating" 
              :disabled="this.disabled" 
              :maxstars="this.maxstars" 
              :starsize="this.starsize" 
              :hasresults="this.hasresults" 
              :hasdescription="this.hasdescription" 
              :ratingdescription="this.ratingdescription" />

      </div>
    <div class="testimonial">
   
      <blockquote>
        

        {{review.review}}
      </blockquote>
      <div></div>
      <p >{{review.name}}</p>
       <!-- <p >{{review.email}}</p> -->
       <p></p>
    </div>
  </div>
</template>

<script>
import AwesomeVueStarRating from 'awesome-vue-star-rating'
export default {
   components: {
    AwesomeVueStarRating
  },
   props: {
    review: {
      type: Object,
      required: true,
    },
  },
   data() {
    return {
      star: 5, // default star
      ratingdescription: [
        {
          text: 'Poor',
          class: 'star-poor'
        },
        {
          text: 'Below Average',
          class: 'star-belowAverage'
        },
        {
          text: 'Average',
          class: 'star-average'
        },
        {
          text: 'Good',
          class: 'star-good'
        },
        {
          text: 'Excellent',
          class: 'star-excellent'
        }
      ],
      hasresults: false,
      hasdescription: false,
      starsize: 'xs', //[xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars: 5,
      disabled: false
    }
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
#content{
  border: 1px #1a1a1a solid;
  border-radius: 10px;
}

</style>