<template>
  <div class="row" style="margin-top: 100px">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="col-75">
      <div class="container-checkout">
        <form @submit="checkout">
          <div class="row">
            <div class="col-50">
              <h3>Billing Address</h3>
              <label for="fname"><i class="fa fa-user"></i> Full Name</label>
              <input
                v-model="full_name"
                @focus="deleteErrors('fullName')"
                type="text"
                id="fname"
                name="firstname"
                placeholder="John M. Doe"
              />

                 <p v-if="errorsFullName.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsFullName" >{{ error }}</li>
                </ul></p>

              <label for="email"><i class="fa fa-envelope"></i> Email</label>
              <input
                type="text"
                id="email"
                name="email"
                v-model="email"
                @focus="deleteErrors('email')"
                placeholder="john@example.com"
              />

             <p v-if="errorsEmail.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmail" >{{ error }}</li>
                </ul></p>

              <label for="adr"
                ><i class="fa fa-address-card-o"></i> Address</label
              >
              <input
                v-model="address"
                @focus="deleteErrors('address')"
                type="text"
                id="adr"
                name="address"
                placeholder="542 W. 15th Street"
              />
               <p v-if="errorsAdress.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsAdress" >{{ error }}</li>
                </ul></p>
              <label for="city"><i class="fa fa-institution"></i> City</label>
              <input
                v-model="city"
                @focus="deleteErrors('city')"
                type="text"
                id="city"
                name="city"
                placeholder="New York"
              />
               <p v-if="errorsCity.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsCity" >{{ error }}</li>
                </ul></p>

              <div class="row">
                <div class="col-50">
                  <label for="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    v-model="state"
                    @focus="deleteErrors('state')"
                    placeholder="NY"
                  />
                   <p v-if="errorsState.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsState" >{{ error }}</li>
                </ul></p>
                </div>
                <div class="col-50">
                  <label for="zip">Zip</label>
                  <input
                    v-model="zip"
                    @focus="deleteErrors('zip')"
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="10001"
                  />
                   <p v-if="errorsZip.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsZip" >{{ error }}</li>
                </ul></p>
                </div>
              </div>
            </div>

            <div class="col-50">
              <h3>Payment</h3>
              <label for="fname">Accepted Cards</label>
              <div class="icon-container">
                <i class="fa fa-cc-visa" style="color: navy"></i>
                <i class="fa fa-cc-amex" style="color: blue"></i>
                <i class="fa fa-cc-mastercard" style="color: red"></i>
                <i class="fa fa-cc-discover" style="color: orange"></i>
              </div>
              <label for="cname">Name on Card</label>
              <input
                type="text"
                id="cname"
                name="cardname"
                v-model="name_on_card"
                @focus="deleteErrors('nameOnCard')"
                placeholder="John More Doe"
              />
               <p v-if="errorsNameOnCard.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsNameOnCard" >{{ error }}</li>
                </ul></p>
              <label for="ccnum">Credit card number</label>
              <input
                type="text"
                id="ccnum"
                name="cardnumber"
                v-model="credit_card_number"
                @focus="deleteErrors('credit_card_number')"
                placeholder="1111-2222-3333-4444"
              />
              <p v-if="errorsCreditCartNumber.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsCreditCartNumber" >{{ error }}</li>
                </ul></p>
              <label for="expmonth">Exp Month</label>
              <input
                type="text"
                id="expmonth"
                name="expmonth"
                v-model="exp_month"
                @focus="deleteErrors('expMonth')"
                placeholder="September"
              />
               <p v-if="errorsExpMonth.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsExpMonth" >{{ error }}</li>
                </ul></p>
              <div class="row">
                <div class="col-50">
                  <label for="expyear">Exp Year</label>
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    v-model="exp_year"
                    @focus="deleteErrors('expYear')"
                    placeholder="2018"
                  />
                   <p v-if="errorsExpYear.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsExpYear" >{{ error }}</li>
                </ul></p>
                </div>
                <div class="col-50">
                  <label for="cvv">CVV</label>
                  <input
                    v-model="cvv"
                    @focus="deleteErrors(errorsCVV)"
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="352"
                  />
                   <p v-if="errorsCVV.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsCVV" >{{ error }}</li>
                </ul></p>
                </div>
              </div>
            </div>
          </div>
          <!-- <label>
            <input type="checkbox" checked="checked" name="sameadr" /> Shipping
            address same as billing
          </label> -->
          <input type="submit" value="Continue to checkout" class="btn" />
        </form>
      </div>
    </div>
    <div class="col-25">
      <div class="container-checkout">
        <h4>
          Cart
          <span class="price" style="color: black"
            ><i class="fa fa-shopping-cart"></i> <b>{{ cart.length }}</b></span
          >
        </h4>
        <p v-for="item in cart">
          <a href="#">{{ item.name }}</a
          ><span>{{ item.quantity }}</span>
          <span class="price">${{ item.price }}</span>
        </p>
        <hr />
        <p>
          Total (delivery counted)<span class="price" style="color: black"
            ><b
              >$
              {{
                cart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) + 5
              }}</b
            ></span
          >
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import Validate from "@/validation/Validate";
import VueRouter from "@/router/index";
import { mapState } from "vuex";
export default {
  data() {
    return {
      full_name: null,
      email: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      name_on_card: null,
      credit_card_number: null,
      exp_month: null,
      exp_year: null,
      cvv: null,
      errorsFullName: [],
      errorsEmail: [],
      errorsAdress: [],
      errorsCity: [],
      errorsNameOnCard: [],
      errorsCreditCartNumber: [],
      errorsExpMonth: [],
      errorsExpYear: [],
      errorsState: [],
      errorsZip: [],
      errorsCVV: [],
    };
  },
  created() {
    this.$store.dispatch("fetchFromCart");
  },
  computed: mapState(["cart"]),
  methods: {
    checkout(event) {
      event.preventDefault();
      // this.errorsEmail = Validate.emailIsNotValid(
      //   this.email,
      //   this.users
      // );
      //  this.errorsFullName = Validate.userNameIsNotValid(
      //   this.full_name
      // );
      // this.errorsAdress = Validate.validateAddress(
      //   this.address
      // );
      // this.errorsCity = Validate.validateCity(
      //   this.city
      // );
      // this.errorsNameOnCard = Validate.nameOnCardIsNotValid(
      //   this.name_on_card
      // );
      // this.errorsCreditCartNumber = Validate.isMoroccanCreditCardNumberValid(
      //   this.credit_card_number
      // );
      // this.errorsExpMonth = Validate.validateExpMonth(
      //   this.exp_month
      // );
      // this.errorsExpYear = Validate. validateExpYear(
      //   this.exp_year
      // );
      // this.errorsState = Validate.validateState(
      //   this.state
      // );
      // this.errorsZip = Validate. validateZipCode(
      //   this.zip
      // );
      // this.errorsCVV = Validate.validateCVV(
      //   this.cvv
      // );

      if (
        this.errorsFullName.length == 0 &&
        this.errorsEmail.length == 0 &&
        this.errorsAdress.length == 0 &&
        this.errorsCity.length == 0 &&
        this.errorsNameOnCard.length == 0 &&
        this.errorsCreditCartNumber.length == 0 &&
        this.errorsExpMonth.length == 0 &&
        this.errorsExpYear.length == 0 &&
        this.errorsState.length == 0 &&
        this.errorsZip.length == 0 &&
        this.errorsCVV.length == 0
      ) {
        VueRouter.push({ name: "order" });
      }
    },
 
  },
};
</script>

<style scoped>
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  padding: 8px;
  box-sizing: border-box;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  border-radius: 10px;
}

.col-50 {
  border-radius: 10px;
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}
.ul-error {
  list-style: square;
  color: red;
  margin-top: -0.8em;
  margin-bottom: 0.8em;
  font-size: 0.7rem;
  margin-left: 20px;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container-checkout {
  background-color: #fff;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  font-family: "Inter", sans-serif;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.container-checkout p {
  padding-left: 0;
  margin-left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.btn {
  background-color: #000;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: gray;
}

a {
  color: rgb(65, 65, 65);
  font-size: 18px;
  padding: 20px;
  font-family: monospace;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>







