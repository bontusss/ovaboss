<template>
  <div class="dashboard-content-one">
    <!-- Breadcumbs Area Start Here -->
    <div class="breadcrumbs-area">
      <h3>404 Not Found</h3>
    </div>
    <!-- Dashboard Content Start Here -->
    <div class="row gutters-20">
      <img alt="Page Not Found" class="img-fluid" src="images/404.jpg" />
    </div>
    <!-- Dashboard Content End Here -->

    <social-links />
    <credits />
  </div>
</template>

<script>
import SocialLinks from '../components/SocialLinks.vue'
export default {
  name: '404',
  components: { SocialLinks }
}
</script>

<style scoped></style>
