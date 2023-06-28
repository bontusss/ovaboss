<template>
  <div>
    <div class="parent">
      <div v-for="data in data" :key="data.id" class="shop-name">
        <p>
          This products is sold by
          <a :href="data.shop.url">
            <b>{{ data.shop.name }}</b>
          </a>
        </p>
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
a:hover {
  text-decoration: none;
}
.parent {
  display: grid;
  grid-template-columns: repeat(2fr, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  margin-top: 20px;
}

.e {
  border-radius: 50%;
  border: 1px solid white;
  height: 30px;
  width: 30px;
  cursor: pointer;
  color: white;
  font-size: 10px;
  font-weight: 900;
}
p {
  font-size: 20px;
}

@media (min-width: 320px) and (max-width: 991px) {
  p {
    width: 100%;
  }
}
</style>
