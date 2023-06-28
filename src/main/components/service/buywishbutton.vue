<template>
  <div>
    <div class="parent">
      <div class="shop-name">
        <p>
          This products is sold by
          <a href="#">
            <b>{{ shop_name }}</b>
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
      count: 0,
      baseUrl: location.origin,
      shop_name: "Octovia Pharmacy",
      shop_address: `${this.baseUrl}/store/test-business`
    };
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
