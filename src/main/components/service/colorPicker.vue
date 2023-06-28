<template>
  <div>
    <section>
      <p>Color</p>
      <button class="red e"></button>
      <button class="green e"></button>
      <button class="blue e"></button>
      <button class="orange e"></button>
      <!-- <button class="grey e"></button>
      <button class="purple e"></button> -->
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
p {
  margin-bottom: -4px;
  font-weight: bold;
}
.e {
  border: 1px solid white;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.e:hover {
  border: 5px solid gold;
  outline: none;
  outline-color: gold;
}
.green {
  background-color: green;
}
.purple {
  background-color: purple;
}

.red {
  background-color: red;
}

.orange {
  background-color: orange;
}
.blue {
  background-color: blue;
}
.grey {
  background-color: grey;
}
.color {
  display: inline-block;
}
</style>
