<template>
  <div style="background-color: white" class="viewed mt-4">
    <div style="background-color: white" class="container">
      <div style="background-color: white" class="row">
        <div style="background-color: white" class="col">
          <div style="margin-top: -10px" class="viewed_title_container">
            <P style="margin:auto" class="title-one">
              Customers who viewed this also viewed
            </P>
            <div class="pr-5 viewed_nav_container">
              <div class="viewed_nav viewed_prev">
                <i class="fas fa-chevron-left"></i>
              </div>
              <div class="viewed_nav viewed_next">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>

          <div style="margin-top: -30px" class="viewed_slider_container">
            <!-- Recently Viewed Slider -->

            <div class="owl-carousel owl-theme viewed_slider">
              <!-- Recently Viewed Item -->
              <div class="owl-item">
                <div
                  class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                >
                  <div class="viewed_image">
                    <img :src="`${baseUrl}/images/view_1.jpg`" alt />
                  </div>
                  <div class="viewed_content text-center">
                    <div class="viewed_price">
                      $225
                      <span>$300</span>
                    </div>
                    <div class="viewed_name">
                      <a href="#">Beoplay H7</a>
                    </div>
                  </div>
                  <ul class="item_marks">
                    <li class="item_mark item_discount">-25%</li>
                    <li class="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>

              <!-- Recently Viewed Item -->
              <div class="owl-item">
                <div
                  class="viewed_item d-flex flex-column align-items-center justify-content-center text-center"
                >
                  <div class="viewed_image">
                    <img :src="`${baseUrl}/images/view_2.jpg`" alt />
                  </div>
                  <div class="viewed_content text-center">
                    <div class="viewed_price">$379</div>
                    <div class="viewed_name">
                      <a href="#">LUNA Smartphone</a>
                    </div>
                  </div>
                  <ul class="item_marks">
                    <li class="item_mark item_discount">-25%</li>
                    <li class="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>

              <!-- Recently Viewed Item -->
              <div class="owl-item">
                <div
                  class="viewed_item d-flex flex-column align-items-center justify-content-center text-center"
                >
                  <div class="viewed_image">
                    <img :src="`${baseUrl}/images/view_3.jpg`" alt />
                  </div>
                  <div class="viewed_content text-center">
                    <div class="viewed_price">$225</div>
                    <div class="viewed_name">
                      <a href="#">Samsung J730F...</a>
                    </div>
                  </div>
                  <ul class="item_marks">
                    <li class="item_mark item_discount">-25%</li>
                    <li class="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>

              <!-- Recently Viewed Item -->
              <div class="owl-item">
                <div
                  class="viewed_item is_new d-flex flex-column align-items-center justify-content-center text-center"
                >
                  <div class="viewed_image">
                    <img :src="`${baseUrl}/images/view_4.jpg`" alt />
                  </div>
                  <div class="viewed_content text-center">
                    <div class="viewed_price">$379</div>
                    <div class="viewed_name">
                      <a href="#">Huawei MediaPad...</a>
                    </div>
                  </div>
                  <ul class="item_marks">
                    <li class="item_mark item_discount">-25%</li>
                    <li class="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>

              <!-- Recently Viewed Item -->
              <div class="owl-item">
                <div
                  class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                >
                  <div class="viewed_image">
                    <img :src="`${baseUrl}/images/view_5.jpg`" alt />
                  </div>
                  <div class="viewed_content text-center">
                    <div class="viewed_price">
                      $225
                      <span>$300</span>
                    </div>
                    <div class="viewed_name">
                      <a href="#">Sony PS4 Slim</a>
                    </div>
                  </div>
                  <ul class="item_marks">
                    <li class="item_mark item_discount">-25%</li>
                    <li class="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>

              <!-- Recently Viewed Item -->
              <div class="owl-item">
                <div
                  class="viewed_item d-flex flex-column align-items-center justify-content-center text-center"
                >
                  <div class="viewed_image">
                    <img :src="`${baseUrl}/images/view_6.jpg`" alt />
                  </div>
                  <div class="viewed_content text-center">
                    <div class="viewed_price">$375</div>
                    <div class="viewed_name">
                      <a href="#">Speedlink...</a>
                    </div>
                  </div>
                  <ul class="item_marks">
                    <li class="item_mark item_discount">-25%</li>
                    <li class="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      baseUrl: location.origin
    };
  }
};
</script>

<style lang="css" scoped>
.viewed_item {
  margin: 0px 3px !important;
}

.title-one {
  font-size: 20px;
  padding-top: 10px;
  padding-left: 15px;
  /* box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3); */
  /* border-style: solid;
        border-width: 1px; */
}

.viewed
  .container
  .row
  .viewed_title_container
  .viewed_slider_container
  .viewed_slider {
  background-color: white !important;
}

/* mobile */
</style>
