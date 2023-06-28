<template>
  <div>
    <div class="parent">
      <div v-for="data in data" :key="data.id">
        <button class="btn product-price" disabled="disabled">
          &#8358;
          {{ data.sale }}
        </button>
        <span class="price">
          <strike>&#8358;{{ data.amount }}</strike>
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
