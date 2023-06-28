<template>
  <a class="dropdown-item" @click="logoutMember">Logout</a>
</template>

<script>
export default {
  mounted() {},
  data: function() {
    return {};
  },
  methods: {
    logoutMember: function(e) {
      e.preventDefault();
      this.$store
        .dispatch("auth/logout")
        .then(() => location.reload())
        .catch();
    }
  }
};
</script>

<style scoped></style>
