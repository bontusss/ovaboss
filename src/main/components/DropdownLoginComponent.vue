<template>
  <form @submit="loginMember" class="p-3" id="memberLoginForm">
    <div :class="messageCssClass" role="alert" v-if="message.length">
      {{ message }}
    </div>
    <div class="form-group">
      <h1>Login</h1>
      <input
        class="form-control "
        id="email"
        name="email"
        placeholder="username@example.com"
        type="email"
        v-model="state.email"
      />
    </div>
    <div class="form-group">
      <input
        class="form-control "
        id="password"
        name="password"
        placeholder="Password"
        required
        type="password"
        v-model="state.password"
      />
    </div>
    <button class="form-control sign-in" type="submit">Sign in</button>
    <a href="#" id="link">Forgot password?</a>
  </form>
</template>

<script>
export default {
  mounted() {},
  data: function() {
    return {
      messageCssClass: "alert alert-danger",
      message: "",
      errors: [],
      state: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginMember: function(e) {
      e.preventDefault();
      this.errors = [];
      this.message = "";

      if (!this.state.email) {
        this.message += "Email required.";
      }
      if (!this.state.password) {
        this.message += "Password required.";
      }

      if (!(this.message.length > 1)) {
        this.$store
          .dispatch("auth/login", {
            email: this.state.email,
            password: this.state.password
          })
          .then(
            () =>
              location.reload() /*{
                        this.messageCssClass = 'alert alert-success';
                        this.message = 'Login Successful!';
                        setTimeout(() => location.reload(), 2000);
                    }*/
          )
          .catch(error => {
            this.message = "Invalid Login Details Combination!";
            if (error.response.status === 401) {
              //Validation Failed
              this.errors.push(error.response.data.error);
            } /*else if (error.response.status === 406) {//Validation Failed
                            for (let [, value] of Object.entries(error.response.data.error)) {
                                for (let [, v] of Object.entries(value)) {
                                    this.errors.push(v);
                                }
                            }
                        } else if (error.response.status === 500) {
                            this.errors.push("An error occurred while trying to submit your data, kindly try again later.");
                        } else {
                            this.errors.push("Unable to communicate with our server, kindly try again later.");
                        }*/
          });
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 18px;
  text-align: center;
}

.sign-in {
  background-color: #ffc107;
  color: white;
  cursor: pointer;
  border: solid;
  border-width: 0px;
}

#link {
  font-size: 14px;
  /* text-align: center; */
  color: #ffc107;
  /* padding: auto !important; */
  margin-left: 48px;
}
</style>
