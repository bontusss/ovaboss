<template>
  <div class="container">
    <div class="parent">
      <div class="column">
        <side-bar />
      </div>
      <div class="column">
        <pagnation />
        <product />
        <product />
        <product />
        <product />
        <product />
        <product />
        <pagnation />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.parent {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 2px;
  grid-row-gap: 0px;
  /* border: 1px solid red; */
}

.column {
  /* border: 1px solid rgb(61, 4, 4); */
}
</style>
