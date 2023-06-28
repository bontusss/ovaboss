<template>
  <div>
    <div class="container">
      <p class="page-title">Airtime and VTU Panel</p>
      <div class="contain">
        <p class="tab-title">
          Service Provider Info
        </p>
        <hr />
        <!-- form -->
        <div class="tab">
          <div class="row-one">
            <span class="legend">Country:</span>
            <select id="" name="">
              <option value="" v-bind="country">{{ country }}</option>
              <!-- <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option> -->
            </select>
            <br />
            <sub><i>* we only accept Nigeria for now</i></sub>
          </div>
          <div class="row-two">
            <p class="tab-title-two">
              Choose your service provider
            </p>
            <span class="row">
              <div class="column">
                <img src="/images/glo.jpg" alt="GLO" />
              </div>
              <div class="column">
                <img
                  v-bind="network.airtel"
                  src="/images/airtel.png"
                  alt="Airtel"
                />
              </div>
              <div class="column">
                <img src="/images/9mobile.jpg" alt="9mobile" />
              </div>
              <div class="column">
                <img src="/images/mtn.png" alt="MTN" />
              </div>
            </span>
          </div>
          <button id="proceed"><a href="#">Proceed</a></button>
        </div>
      </div>
    </div>

    <!-- form two -->
    <div class="container hidden-container">
      <p class="page-title">Airtime and VTU Panel</p>
      <div class="contain">
        <p class="tab-title">
          More Top Up INFO
        </p>
        <!-- <hr /> -->

        <div class="tab">
          <div class="row-one">
            <span class="legend">Top up type:</span>
            <select id="" name="">
              <option value="" :v-bind="airtime">{{ airtime }}</option>
              <option value="" :v-bind="data">{{ data }}</option>
            </select>
            <br />
            <!-- <sub><i>* we only accept Nigeria for now</i></sub> -->
          </div>
          <div class="row-one">
            <span class="legend" v-bind="phone_number">Number:</span>
            <input
              type="tel"
              name=""
              id=""
              placeholder="Enter your phone number"
            />
          </div>
          <div class="row-one">
            <span class="legend">Amount:</span>
            <!-- add stylish input for numbers -->
            <input
              class="amount"
              type="text"
              name=""
              id=""
              placeholder="1000.00"
            />
          </div>
          <button><a href="#">Recharge</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: undefined,
      country: "Nigeria",
      data: "Data",
      airtime: "Airtime",
      phone_number: "",
      network: [
        {
          airtel: "",
          nine_mobile: "",
          mtn: "",
          glo: ""
        }
      ]
    };
  },
  mounted() {
    $(document).ready(function() {
      $("#proceed").click(function() {
        $(".container").hide();
        $(".hidden-container").show();
      });
    });
  }
};
</script>

<style lang="css" scoped>
.container {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 7%;
  height: 90vh;
  background-color: #f8f9fa;
}

.contain {
  width: 50%;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  margin-top: 40px;
}

.page-title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.tab-title {
  font-size: 24px;
  font-weight: 300;
  text-align: center;
}

hr {
  width: 30px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -20px;
  border-width: 3px;
  border-radius: 10px;
  border-color: rgb(58, 56, 56);
}

.tab {
  width: 80%;
  height: 80%;
  border-style: solid;
  border-width: 0px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0px 10px 15px #ffc107;

  /* padding-right: auto; */
}

.legend {
  font-size: 20px;
  color: #828282;
}

select {
  width: 150px;
  margin-left: 50px;
  color: grey;
  padding: 5px 0px 5px 50px;
  outline: none;
  border-bottom-width: 0px;
}
.row-one {
  padding-top: 50px;
  padding-left: 20%;
}
sub {
  color: brown;
  margin-left: 120px;
}

.tab-title-two {
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  margin-top: 20px;
}

.column {
  float: left;
  width: 80px;
  height: 50px;
  /* border-style: solid;
  border-width: 1px; */
  margin-right: auto;
  margin-left: auto;
}
.row {
  /* border-style: solid;
  border-width: 1px; */
  width: 70%;
  margin-right: auto;
  margin-left: auto;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

img {
  height: 50px;
  width: 80px;
}

button {
  color: white;
  font-weight: 700;
  background-color: #ffc107;
  border-style: solid;
  border-width: 0px;
  padding: 8px 30px;
  cursor: progress;
  margin-left: 40%;
  margin-top: 20px;
}

a {
  color: white;
}

a:hover {
  color: #fff !important;
}

input {
  margin-left: 50px;
}

.amount {
  margin-left: 70px;
  font-size: 18px;
  font-family: monospace;
  border-width: 0px;
}

.amount:focus {
  border-width: 0px !important;
  outline-width: 0px;
}

.hidden-container {
  display: none;
}
</style>
