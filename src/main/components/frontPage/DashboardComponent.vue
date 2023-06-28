<template>
  <div class="card">
    <div class="card-header">User's Information</div>
    <div class="card-body">
      <div class="alert alert-success" role="alert">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },

  mounted() {
    this.name = "Henry Ejemuta";
  }
};
</script>

<style scoped></style>
