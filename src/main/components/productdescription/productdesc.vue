<template>
  <div>
    <!-- first row -->
    <div class="container">
      <!-- column one -->
      <div class="parent">
        <section class="left">
          <image-slider />
        </section>

        <!-- column two -->
        <div class="right" v-for="data in data" :key="data.id">
          <span class="fas fa-star checked"></span>
          <span class="fas fa-star checked"></span>
          <span class="fas fa-star checked"></span>
          <span class="fas fa-star"></span>
          <span class="fas fa-star"></span>
          <span class="pl-4">{{}}</span>
          <h3 class="product-title">{{ data.title }}</h3>
          <p class="product-status">{{ data.stock }} in stock</p>
          <p class="product-desc">{{ data.summary }}</p>
          <hr />
          <price></price>

          <hr />
          <delivery-info />
          <counter></counter>
          <buy-wish></buy-wish>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    axios
      .get(
        "https://ovaboss.dev.i.ng/api/v1/products/apple-apple-iphone-x-58-3gb-ram-64gb-rom-12mp-12mp-7mp-smartphone-white"
      )
      .then(response => {
        this.data = response.data;
        console.log(data);
      });
  }
};
</script>

<style lang="css" scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 6em;
}

.right {
  /* margin-left: 13%; */
  margin-top: 30px;
}

.checked {
  color: #ffc107;
}

.product-title {
  font-weight: bolder;
}

.first-column {
  margin-left: 16px;
}

/* media */
@media (min-width: 320px) and (max-width: 991px) {
  .row-container {
    width: 100%;
    margin: 90px 0px;
  }
  .column {
    width: 100%;
    margin-top: 10px;
    margin-left: 40px;
  }
  .parent {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin: 0;
  }
  .product-desc {
    width: 100%;
  }

  .right {
    margin-top: -140px;
  }
  .left {
    margin-top: 40px;
  }
}
</style>
