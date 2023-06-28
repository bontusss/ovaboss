<template>
  <div>
    <section>
      <p>Color</p>
      <p v-for="data in data" :key="data.id">{{ data.color }}</p>
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
}

.e:hover {
  border: 5px solid gold;
  outline: none;
  outline-color: gold;
}
.green {
  background-color: green;
}
.purple {
  background-color: purple;
}

.red {
  background-color: red;
}

.orange {
  background-color: orange;
}
.blue {
  background-color: blue;
}
.grey {
  background-color: grey;
}
.color {
  display: inline-block;
}
</style>
