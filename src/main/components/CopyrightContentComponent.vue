<template>
  <div class="copyright_content">
    Copyright Ovaboss &copy; {{ currentYear }}
    All rights reserved
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped></style>
