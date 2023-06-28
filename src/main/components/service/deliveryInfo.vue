<template>
  <div>
    <div class="parent">
      <div class="left">
        <i class="fas fa-truck-loading"></i>
        <span>Delivery Available</span>
      </div>
      <div class="right">
        <i class="fas fa-truck-pickup"></i>
        <span>Pickup Available</span>
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  margin-bottom: 10px;
}

i {
  padding-right: 10px;
  color: silver;
}
</style>
