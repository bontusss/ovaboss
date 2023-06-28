<template>
  <div>
    <section>
      <p>Brand</p>
      <p v-for="data in data" :key="data.id">{{ data.brand }}</p>
    </section>
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
p {
  margin-bottom: -4px;
  font-weight: bold;
}
.e {
  border: 1px solid white;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  font-size: 10px;
  font-weight: 900;
  background-color: #bbb;
}

.e:hover {
  border: 5px solid gold;
  outline: none;
  outline-color: gold;
}

.color {
  display: inline-block;
}
</style>
