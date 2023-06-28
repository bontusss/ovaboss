<template>
  <div>
    <div class="row">
      <div class="column left">
        <p class="clear-top">1. Tithe</p>
        <p class="first-column">2. Offering</p>
        <p class="first-column">3. Special Seed</p>
        <p class="first-column">4. Prophetic seed</p>
        <p class="first-column">5. Bible Sponsorship</p>
        <p class="first-column">6. Building Project</p>
      </div>
      <div class="column middle">
        <input
          class="clear-top"
          type="text"
          placeholder="Amount"
          name=""
          id=""
        />
        <input type="text" placeholder="Amount" name="" id="" />
        <input type="text" placeholder="Amount" name="" id="" />
        <input type="text" placeholder="Amount" name="" id="" />
        <input type="text" placeholder="Amount" name="" id="" />
        <input type="text" placeholder="Amount" name="" id="" />
      </div>
      <div class="column right">
        <p class="text">Total Amount</p>
        <p class="amt">{{ total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: ""
    };
  }
};
</script>

<style lang="css" scoped>
.column {
  float: left;
  width: 30%;
  background-color: #e3e3e4;
  height: auto;
  border-style: solid;
  border-width: 0px;
  box-shadow: 0px 10px 10px grey;
}

.row {
  /* border-style: solid;
  border-width: 1px; */
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.middle,
.right {
  margin-left: 49px;
}

.left {
  background-color: #fff;
}

.left > p {
  font-size: 20px;
  text-align: center;
  padding-bottom: 7px;
}

.middle > input[placeholder] {
  font-size: 18px;
  text-align: center;
}

input {
  margin-bottom: 15px;
  margin-left: 25px;
  border: none;
  height: 40px;
  outline-color: yellow;
}

.clear-top {
  margin-top: 10px;
}

.text {
  font-size: 20px;
  text-align: center;
  margin-top: 40%;
}
</style>
