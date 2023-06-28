<template>
  <div>
    <section>
      <p>Size</p>
      <button class="red e">23</button>
      <button class="green e">32</button>
      <button class="blue e">18</button>
      <button class="orange e">11</button>
      <!-- <button class="grey e">40</button>
      <button class="purple e">42</button>-->
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
  border-radius: 50%;
  color: white;
  font-size: 10px;
  font-weight: 900;
  background-color: #bbb;
}

.e:hover {
  border: 5px solid gold;
  outline: none;
  outline-color: gold;
}

.color {
  display: inline-block;
}
</style>
