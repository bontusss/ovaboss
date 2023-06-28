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
        <div class="right">
          <span class="fas fa-star checked"></span>
          <span class="fas fa-star checked"></span>
          <span class="fas fa-star checked"></span>
          <span class="fas fa-star"></span>
          <span class="fas fa-star"></span>
          <span class="pl-4">(39 ratings)</span>
          <h3 class="product-title">{{ data.title }}</h3>
          <p class="product-status">{{ product_status }}</p>
          <p class="product-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatibus iusto vitae ea alias quam adipisci ex consectetur
            corrupti ad, excepturi minus eum placeat neque? Nisi repellendus
            adipisci sed facilis.
          </p>
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
    return {};
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
