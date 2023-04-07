<template>
  <main>
    <section>
      <div class="form-wrap">
        <div class="tabs">
          <h3 class="signup-tab" @click="signUpMethod">
            <a :class="signUp ? 'active' : ''" href="#">Sign Up</a>
          </h3>
          <h3 class="login-tab" @click="signInMethod">
            <a :class="signIn ? 'active' : ''" href="#">Sign In</a>
          </h3>
        </div>
        <!--.tabs-->

        <div class="tabs-content">
          <div id="signup-tab-content" :class="signUp ? 'active' : ''">
            <form class="signup-form" @submit="onSignUp">
              <input
                type="email"
                class="input"
                id="user_email"
                autocomplete="off"
                placeholder="Email"
                v-model="email_signup"
                @focus="deleteErrors('email')"
              />
              <p v-if="errorsEmailSignUp.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmailSignUp" >{{ error }}</li>
                </ul>
              </p>
              <input
                type="text"
                class="input"
                id="user_name"
                autocomplete="off"
                placeholder="Username"
                v-model="user_name_signup"
                 @focus="deleteErrors('userName')"
              />
              <p v-if="errorsUserNameSignUp.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsUserNameSignUp" >{{ error }}</li>
                </ul>
              </p>
              <input
                type="password"
                class="input"
                autocomplete="off"
                placeholder="Password"
                v-model="password_signup"
                @focus="deleteErrors('passwordSignIn')"
              />
              <p v-if="errorsPasswordSignUp.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsPasswordSignUp" >{{ error }}</li>
                </ul>
              </p>
              <input type="submit" class="button" value="Sign Up" />
            </form>
            <!--.login-form-->
            <div class="help-text">
              <p>By signing up, you agree to our</p>
              <p><a href="#">Terms of service</a></p>
              <p class="succeful-login" v-if="successfulSignUp">Your account is created please sign in now</p>
              <p class="error-login" v-if="failedLogin">Something went wrong, please refresh and try again.</p>
            </div>
            <!--.help-text-->
          </div>
          <!--.signup-tab-content-->

          <div id="login-tab-content" :class="signIn ? 'active' : ''">
            <form class="login-form" @submit="onSignIn">
              <input
                type="text"
                class="input"
                id="user_login"
                autocomplete="off"
                placeholder="Email "
                v-model="email_sign_in"
                 @focus="deleteErrors('emailSignIn')"
              />
               <p v-if="errorsEmailSignIn.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsEmailSignIn" >{{ error }}</li>
                </ul>
              </p>
              <input
                type="password"
                class="input"
                id="user_pass"
                autocomplete="off"
                placeholder="Password"
                v-model="password_sign_in"
                 @focus="deleteErrors('passwordSignIn')"
              />
               <p v-if="errorsPasswordSignIn.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsPasswordSignIn" >{{ error }}</li>
                </ul>
              </p>
              <input type="checkbox" class="checkbox" id="remember_me" v-model="checked" @click="rememberMe()"/>
              <label for="remember_me">Remember me</label>
              <p v-if="errorsSignIn.length">    
                <ul class="ul-error">
                  <li v-for="error in errorsSignIn" >{{ error }}</li>
                </ul>
              </p>
              <input type="submit" class="button" value="Login" />
            </form>
           
            
          
          </div>
        
        </div>
       
      </div>
   
    </section>
  </main>
</template>

<script>
import Validate from "@/validation/Validate";
import Cookie from "@/cookies/Cookie";
import { mapState } from "vuex";
import VueRouter from '@/router/index';
export default {
  data() {
    return {
      signIn: true,
      signUp: false,
      email_signup: null,
      user_name_signup: null,
      password_signup: null,
      errorsEmailSignUp: [],
      errorsPasswordSignUp: [],
      errorsUserNameSignUp: [],
      errorsEmailSignIn: [],
      errorsPasswordSignIn: [],
       errorsSignIn: [],
      successfulSignUp: false,
      failedLogin: false,
      email_sign_in: null,
      password_sign_in: null,
      checked: false,
    };
  },
  created() {
    this.$store.dispatch("getUsers");
    
  },
  computed: mapState(["users"]),
  methods: {
    signInMethod() {
      this.signIn = true;
      this.signUp = false;
    },
    signUpMethod() {
      this.signIn = false;
      this.signUp = true;
    },
    onSignUp(e) {
      e.preventDefault();
      this.errorsEmailSignUp = Validate.emailIsNotValid(
        this.email_signup,
        this.users
      );
      this.errorsUserNameSignUp = Validate.userNameIsNotValid(
        this.user_name_signup
      );
      this.errorsPasswordSignUp = Validate.passwordIsNotValid(
        this.password_signup
      );
      if (
        this.errorsEmailSignUp.length === 0 &&
        this.errorsPasswordSignUp.length === 0 &&
        this.errorsUserNameSignUp.length === 0
      ) {
        let user_signup = {
          email: this.email_signup,
          username: this.user_name_signup,
          password: this.password_signup,
        };
        this.$store.dispatch("signUp", user_signup);
        this.successfulSignUp = true;
      }
    },
   onSignIn(e) {
      e.preventDefault();
      this.errorsEmailSignIn = Validate.fieldIsEmpty(
        this.email_sign_in,
        "Email"
      );
      this.errorsPasswordSignIn = Validate.fieldIsEmpty(
        this.password_sign_in,
        "Password"
      );
      let logged = false;
      if (
        this.errorsEmailSignIn.length === 0 &&
        this.errorsPasswordSignIn.length === 0
      ) {
        this.users.forEach((user) => {
          if (
            user.email === this.email_sign_in &&
            user.password === this.password_sign_in
          ) {
            logged = true;
            sessionStorage.setItem("user", user.id);
            if (this.checked === true) {
              document.cookie =
                "idMakeup=" +
                user.id +
                ";expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
              document.cookie =
                "usernameMakeup=" +
                user.username +
                ";expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
              document.cookie =
                "emailMakeup=" +
                user.email +
                ";expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
            }
            this.$store.dispatch("signIn", {email: user.email, password: user.password});
          }
        });
      }
      if(logged == false) {
        this.errorsSignIn.push("login failed")
      }
    },
    deleteErrors(str) {
      if (str === "email") {
        this.errorsEmailSignUp = [];
      }
      if (str === "password") {
        this.errorsPasswordSignUp = [];
      }
      if (str === "userName") {
        this.errorsUserNameSignUp = [];
      }
      if (str === "emailSignIn") {
        this.errorsEmailSignIn = [];
      }
      if (str === "passwordSignIn") {
        this.errorsPasswordSignIn = [];
      }
    },
    rememberMe() {
      this.checked = !this.checked;
    },
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  color: #666;
  text-decoration: none;
}
a:hover {
  color: #da2535;
}
input {
  font: 16px/26px "poppins", sans-serif;
}
body {
  color: #666;
  background-color: #f1f2f2;
  font: 16px/26px "poppins", sans-serif;
}
.ul-error {
  list-style: square;
  color: red;
  margin-top: -0.8em;
  margin-bottom: 0.8em;
  font-size: 0.7rem;
  margin-left: 20px;
}
.succeful-login {
  color: #0fd30f;
  margin: 0.6rem 0;
  font-size: 1rem;
}
.error-login {
  color: red;
  margin: 0.6rem 0;
  font-size: 1rem;
}
.form-wrap {
  background-color: #fff;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  box-shadow: 0px 1px 8px #bebebe;
  -webkit-box-shadow: 0px 1px 8px #bebebe;
  -moz-box-shadow: 0px 1px 8px #bebebe;
}
.form-wrap .tabs {
  overflow: hidden;
}
.form-wrap .tabs h3 {
  float: left;
  width: 50%;
}
.form-wrap .tabs h3 a {
  padding: 0.5em 0;
  text-align: center;
  font-weight: 400;
  background-color: #e6e7e8;
  display: block;
  color: #666;
}
.form-wrap .tabs h3 a.active {
  background-color: #fff;
}
.form-wrap .tabs-content {
  padding: 1.5em;
}
.form-wrap .tabs-content div[id$="tab-content"] {
  display: none;
}
.form-wrap .tabs-content .active {
  display: block !important;
}
.form-wrap form .input {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  color: inherit;
  padding: 0.8em 0 10px 0.8em;
  border: 1px solid #cfcfcf;
  outline: 0;
  display: inline-block;
  margin: 0 0 0.8em 0;
  padding-right: 2em;
  width: 100%;
}
.form-wrap form .button {
  width: 100%;
  padding: 0.8em 0 10px 0.8em;
  background-color: #000;
  border: none;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
}
.form-wrap form .button:hover {
  background-color: gray;
}
.form-wrap form .checkbox {
  visibility: hidden;
  padding: 20px;
  margin: 0.5em 0 1.5em;
}
.form-wrap form .checkbox:checked + label:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  opacity: 1;
}
.form-wrap form label[for] {
  position: relative;
  padding-left: 20px;
  cursor: pointer;
}
.form-wrap form label[for]:before {
  content: "";
  position: absolute;
  border: 1px solid #cfcfcf;
  width: 17px;
  height: 17px;
  top: 0px;
  left: -14px;
}
.form-wrap form label[for]:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  content: "";
  position: absolute;
  width: 9px;
  height: 5px;
  background-color: transparent;
  top: 4px;
  left: -10px;
  border: 3px solid #da2535;
  border-top: none;
  border-right: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.form-wrap .help-text {
  margin-top: 0.6em;
}
.form-wrap .help-text p {
  text-align: center;
  font-size: 14px;
}
</style>