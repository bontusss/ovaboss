<template>
  <div>
    <button class="calc" onclick="calc()">Calculate</button>
    <button class="pay">Pay</button>
  </div>
</template>

<script>
export default {
  methods: {
    calc() {
      alert("hello");
    }
  }
};
</script>

<style lang="css" scoped>
button {
  border: none;
  font-size: 20px;
  padding: 5px 30px;
  cursor: pointer;
  color: grey;
  background-color: #fff;
  margin-top: 30px;
}

button:hover {
  box-sizing: 0px 5px 5px grey;
}

.pay {
  margin-left: 20px;
}

.calc {
  margin-left: 69%;
}
</style>
