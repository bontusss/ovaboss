<template>
  <div>
    <p class="rating text-center fixed-buttom" v-if="rating === null">
      There is no rating for this product yet.
      <br />be the first to
      <a href="http://" target="_blank" rel="noopener noreferrer">rate</a>
    </p>
    <p class="rating" v-if="rating === !null"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: null
    };
  }
};
</script>

<style scoped>
.header {
  font-size: 20px;
}
</style>
