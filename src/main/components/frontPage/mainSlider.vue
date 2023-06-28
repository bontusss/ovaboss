<template>
  <div>
    <!-- slider for laptops and ipads-->
    <div class="main_slider d-none d-lg-block">
      <div class="container">
        <category-description></category-description>
        <div class="row">
          <div class="col">
            <div class="main_slider_content d-flex flex-row">
              <div class="main_slider_cat_menu">
                <category-menu></category-menu>
              </div>
              <div id="main_slider_wrapper" class="main_slider_wrapper slider">
                <!-- Main Slider Item -->
                <div class="main_slider_owl-item">
                  <img src="images/FrontSlide1.png" alt />
                </div>

                <!-- Main Slider Item -->
                <div class="main_slider_owl-item">
                  <img src="images/FrontSlide3.png" alt />
                </div>

                <!-- Main Slider Item -->
                <div class="main_slider_owl-item">
                  <img src="images/bank-blur-business-buy-870x400.jpg" alt />
                </div>

                <!-- Main Slider Item -->
                <div class="main_slider_owl-item">
                  <img
                    src="images/person-using-black-and-white-smartphone-and-holding-blue-870x400.jpg"
                    alt
                  />
                </div>
              </div>
              <div class="main_slider_ad_wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of slider for laptops -->
    <!-- <mobile-slider /> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.main_slider {
  margin-top: 7%;
}
.main_slider_wrapper {
  position: relative;
  height: 430px;
  margin-top: -30px;
}

@media (max-width: 450px) {
  .main_slider_wrapper {
    height: 100%;
    width: 100%;
  }
  .main_slider {
    margin-top: 140px;
  }

  #main_slider_wrapper {
    width: 100% !important;
  }
}
</style>
