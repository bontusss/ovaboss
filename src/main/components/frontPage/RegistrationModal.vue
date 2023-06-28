<template>
  <div
    class="modal fade"
    id="modalRegisterForm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form @submit="registerMember" id="memberRegistrationForm">
          <div class="modal-header text-center">
            <h2 class="modal-title w-100 font-weight-bold">
              Become an ovaboss
            </h2>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <div class="md-form">
              <div class="d-flex flex-row input-wrap">
                <i class="far fa-user prefix grey-text"></i>
                <input
                  type="text"
                  v-model="member.name"
                  name="name"
                  id="orangeForm-name"
                  class="form-control validate"
                  placeholder="Enter Your Name"
                />
              </div>
              <label
                data-error="wrong"
                data-success="right"
                for="orangeForm-name"
                >Your name</label
              >
            </div>
            <div class="md-form">
              <div class="d-flex flex-row input-wrap">
                <i class="far fa-envelope prefix grey-text"></i>
                <input
                  type="email"
                  v-model="member.email"
                  name="email"
                  id="ovabossForm-email"
                  class="form-control validate"
                  placeholder="Enter Email Address"
                />
              </div>
              <label
                data-error="wrong"
                data-success="right"
                for="ovabossForm-email"
                >Your email</label
              >
            </div>
            <div class="md-form">
              <div class="d-flex flex-row input-wrap">
                <i class="far fa-address-book prefix grey-text"></i>
                <input
                  type="tel"
                  v-model="member.phone"
                  name="phone"
                  id="ovabossForm-phone"
                  class="form-control validate"
                  placeholder="Enter Phone Number"
                />
              </div>
              <label
                data-error="wrong"
                data-success="right"
                for="ovabossForm-email"
                >Your Phone Number</label
              >
            </div>

            <div class="md-form">
              <div class="d-flex flex-row input-wrap">
                <i class="fas fa-lock prefix grey-text"></i>
                <input
                  type="password"
                  v-model="member.password"
                  name="password"
                  id="ovabossForm-pass"
                  class="form-control validate"
                  placeholder="Enter Password"
                />
              </div>
              <label
                data-error="wrong"
                data-success="right"
                for="ovabossForm-pass"
                >Your password</label
              >
            </div>

            <div class="md-form">
              <div class="d-flex flex-row input-wrap">
                <i class="fas fa-lock prefix grey-text"></i>
                <input
                  type="password"
                  v-model="member.confirmpassword"
                  name="confirmpassword"
                  id="ovabossForm-confirm-pass"
                  class="form-control validate"
                  placeholder="Confirm Password"
                />
              </div>
              <label
                data-error="wrong"
                data-success="right"
                for="ovabossForm-confirm-pass"
                >Confirm password</label
              >
            </div>

            <div class="md-form" v-if="member.sponsor">
              <div class="d-flex flex-row input-wrap">
                <i class="far fa-key prefix grey-text"></i>
                <input
                  :value="member.sponsor"
                  name="sponsor"
                  type="text"
                  id="ovabossForm-sponsor-pin"
                  class="form-control validate"
                  placeholder="Enter Sponsor PIN"
                  readonly
                />
              </div>
            </div>
            <div v-if="message.length" class="alert alert-success" role="alert">
              {{ message }}
            </div>
            <div v-if="errors.length" class="alert alert-danger" role="alert">
              <p v-for="error in errors" :key="error">
                {{ error }}
              </p>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-deep-orange">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { isValidEmail, isValidPhone } from "../../inc/utils";

export default {
  mounted() {
    this.member.sponsor = new URL(window.location.href).searchParams.get(
      "sponsor"
    );
  },
  data: () => {
    return {
      message: "",
      errors: [],
      member: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
        sponsor: ""
      }
    };
  },
  methods: {
    registerMember: function(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.member.email) {
        this.errors.push("Email required!");
      }
      if (!isValidEmail(this.member.email)) {
        this.errors.push("Invalid email Email format!");
      }
      if (!this.member.phone) {
        this.errors.push("Phone Number required!");
      }
      if (isValidPhone(this.member.phone.length)) {
        this.errors.push("Invalid phone number format!");
      }
      if (!this.member.password) {
        this.errors.push("Password required.");
      }
      if (this.member.password.length < 8) {
        this.errors.push("Password should be at least 8 characters in length!");
      }
      if (this.member.password !== this.member.confirmpassword) {
        this.errors.push("Password Mismatch!");
      }
      if (!this.errors.length) {
        this.$store
          .dispatch("auth/register", {
            name: this.member.name,
            email: this.member.email,
            phone: this.member.phone,
            password: this.member.password,
            password_confirmation: this.member.confirmpassword,
            sponsor: this.member.sponsor
          })
          .then(() => {
            this.message =
              "Registration Successful!\n\rYou're now Logged In,\n\rPage will reload shortly!";
            setTimeout(() => location.reload(), 2000);
          })
          .catch(error => {
            if (error.response.status === 422) {
              //Validation Failed
              for (let [, value] of Object.entries(
                error.response.data.errors
              )) {
                this.errors.push(value[0]);
              }
            } else if (error.response.status === 500) {
              this.errors.push(
                "An error occurred while trying to submit your data, kindly try again later."
              );
            } else {
              this.errors.push(
                "Unable to communicate with our server, kindly try again later."
              );
            }
          });
      }
    }
  }
};
</script>

<style scoped>
h2 {
  color: grey;
}

form {
  background-color: #f8f9fa;
  border-style: solid;
  border-width: 2px;
  border-color: #ffc107;
}

.input-wrap {
  border-style: solid !important;
  border-width: 1px !important;
  border-color: #ffc107 !important;
}

i {
  color: grey;
}

button {
  background-color: #ffc107 !important;
  color: grey !important;
  font-size: 16px !important;
  padding: 5px 20px !important;
  border-style: solid;
  border-width: 1px;
  border-color: grey;
  font-weight: bold;
}

p {
  color: brown !important;
}
</style>
