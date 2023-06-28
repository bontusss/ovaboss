<template>
  <!-- Product Panel -->
  <div class="product_panel panel active">
    <div class="arrivals_slider slider">
      <!-- Slider Item starts-->
      <div class="arrivals_slider_item">
        <div class="border_active"></div>
        <div
          class="product_item is_new d-flex flex-column align-items-center justify-content-center text-center"
          v-for="product in products"
          :key="product.key"
        >
          <div
            class="product_image d-flex flex-column align-items-center justify-content-center"
          >
            <img :src="product.img" alt />
          </div>

          <div class="product_content">
            <div class="product_price">&dollar; {{ product.price }}</div>
            <div class="product_name">
              <div>
                <a :href="`${baseUrl}/products/test-product`"
                  >Huawei MediaPad...</a
                >
              </div>
            </div>
            <div class="product_extras">
              <div class="product_color">
                <input
                  type="radio"
                  checked
                  name="product_color"
                  style="background:#b19c83"
                />
                <input
                  type="radio"
                  name="product_color"
                  style="background:#000000"
                />
                <input
                  type="radio"
                  name="product_color"
                  style="background:#999999"
                />
              </div>
              <button class="btn btn-outline-dark">
                Add to Cart
              </button>
            </div>
          </div>
          <div class="product_fav">
            <i class="fas fa-heart"></i>
          </div>
          <ul class="product_marks">
            <li class="product_mark product_discount" v-if="isDiscount">
              {{ product.discount }}
            </li>
            <li class="product_mark product_new" v-if="isNew">new</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      baseUrl: location.origin,
      isDiscount: false,
      isNew: false,
      products: [
        {
          id: 1,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 2,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 3,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 4,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 5,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 6,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 7,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 8,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 9,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 10,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 11,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 12,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 13,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 14,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 15,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        },
        {
          id: 16,
          name: "Huawei MediaPad...",
          isNew: true,
          isDiscount: true,
          discount: 200,
          price: 350,
          img: "images/new_7.jpg"
        }
      ]
    };
  },

  computed: {
    ...mapGetters("product", {
      getProductById: "id"
    })
  }
};
</script>

<style scoped></style>
