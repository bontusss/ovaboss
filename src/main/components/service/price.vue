<template>
  <div>
    <div class="parent">
      <div>
        <button class="btn product-price" disabled="disabled" v-if="!isFree">
          &#8358;
          {{ product_price }}
        </button>
        <span class="price">
          <strike>&#8358;1000</strike>
        </span>
      </div>
      <div>
        <button class="btn btn-block wish">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sale_percent: 40,
      product_price: "2,580",
      isDiscounted: true,
      isFree: false
    };
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
  /* border: 1px solid red; */
  background-color: #f8f9fa;
  /* margin-bottom: -60px; */
}

.sale {
  /* padding-top: 9px; */
  color: #fff;
  font-weight: bold;
  background-color: #df3b3b;
  border: 1px solid;
  border-radius: 100%;
  padding: 10px;
  font-size: 12px;
}

strike {
  color: #df3b3b;
}

.product-price {
  font-size: 25px;
  font-weight: 500;
  color: white;
  font-stretch: expanded;
  background-color: rgb(3, 163, 83);
  font-family: Georgia;
}

.wish {
  margin-top: 6px;
  background-color: gold;
  color: white;
  font-weight: bold;
}

.price {
  font-size: 20px;
  color: rgb(36, 35, 35);
  margin-left: 20px;
  font-family: monospace;
}

@media (min-width: 320px) and (max-width: 991px) {
  .parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-bottom: 0px;
  }

  .wish {
    margin-left: 0;
  }
}
</style>
