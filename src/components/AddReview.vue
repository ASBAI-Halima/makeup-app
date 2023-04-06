<template>
  <div class="avis-container">
    <h1>Add your review about this product</h1>
    <form ref="form" @submit="AddReview">
      <div class="form-group">
        <label for="nom">Name:</label>
        <input type="text" id="nom" name="nom" v-model="name"
         @focus="deleteErrors('name')" />
      </div>
       <p v-if="errorsName.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsName" >{{ error }}</li>
                </ul>
              </p>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email"
         @focus="deleteErrors('email')" />
      </div>
       <p v-if="errorsEmail.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmail" >{{ error }}</li>
                </ul>
              </p>
      <div class="form-group">
        <label for="avis"  >Rating:</label>
        <div class="stars">
        <div class="rating" v-for="i in ratingArr" :key="i" >
          <input type="radio" name="rating" :id="i" :value="i" v-model="picked" /><label :for="i"
            class="star"
            >&#9733;</label
          >
         
        </div>
        </div>
      </div>
       <p v-if="pickedErrors.length">    
                <ul class="ul-error">
                  <li v-for="error in pickedErrors" >{{ error }}</li>
                </ul>
              </p>
      <div class="form-group">
        <label for="commentaire">Review:</label>
        <textarea
          id="commentaire"
          name="commentaire"
          v-model="review"
           @focus="deleteErrors('review')"
        ></textarea>
      </div>
       <p v-if="errorsReview.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsReview" >{{ error }}</li>
                </ul>
              </p>
      <button type="submit" >Add Review</button>
    </form>
  </div>
</template>

<script>
import Validate from "@/validation/Validate";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      name: null,
      email: null,
      review: null,
      picked: null,
      errorsEmail: [],
      errorsName: [],
      errorsReview: [],
      pickedErrors: [],
      ratingArr: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    AddReview(e) {
      e.preventDefault();

      this.errorsEmail = Validate.fieldIsEmpty(this.email, "Email field");
      this.errorsName = Validate.fieldIsEmpty(this.name, "Name field");
      this.errorsReview = Validate.fieldIsEmpty(this.review, "Review field");
      this.pickedErrors = Validate.fieldIsEmpty(
        this.picked,
        "picking statr to rating the product"
      );
      console.log(this.picked);
      if (
        this.errorsEmail.length === 0 &&
        this.errorsName.length === 0 &&
        this.errorsReview.length === 0 &&
        this.picked !== null
      ) {
        const newReview = {
          name: this.name,
          email: this.email,
          rating: parseInt(this.picked),
          review: this.review,
        };
        this.$store.dispatch("addReview", { id: this.id, review: newReview });
        this.$data.email = "";
        this.$data.name = "";
        this.$data.review = "";
        this.$data.picked = "";
      }
    },

    deleteErrors(str) {
      if (str === "email") {
        this.errorsEmail = [];
      }
      if (str === "name") {
        this.errorsName = [];
      }
      // if(this.picked ==null){
      //   return "rating is required"
      // }
      if (str === "review") {
        this.errorsReview = [];
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap");
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Sansita Swashed", cursive;
}
.avis-container {
  position: relative;
  padding: 50px 50px;
  background: #fff;
  border-radius: 10px;
  margin: auto;
  padding: 2.5em 0;
  width: 60%;
  height: 100%;
  margin-top: 90px;
  margin-bottom: 50px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.avis-container h1 {
  font-size: 2em;
  border-left: 5px solid #000;
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
}

form {
  display: inline-block;
  text-align: left;
}

.form-group input {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
}

.rating {
  direction: rtl;
  unicode-bidi: bidi-override;
}
.stars {
  display: flex;
  flex-direction: row;
}

.star {
  display: inline-block;
  font-size: 30px;
  color: #bbb;
  cursor: pointer;
  transition: color 0.25s ease-in-out;
}

.star:hover,
.star:hover ~ .star {
  color: #f8d64e;
}

input[type="radio"] {
  display: none;
}

button[type="submit"] {
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
}

button[type="submit"]:hover {
  background-color: gray;
}
.ul-error {
  list-style: square;
  color: red;
  margin-top: -0.8em;
  margin-bottom: 0.8em;
  font-size: 0.7rem;
  margin-left: 20px;
}
</style>