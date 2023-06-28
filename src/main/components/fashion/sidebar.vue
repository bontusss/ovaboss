<template>
  <div class="vertical-menu">
    <header>Select Goods Category</header>
    <section class="top-level">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Fashion and Accessories</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Home and Office</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Computer and Gadgets</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Agriculture and Food</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Automobile and Machinery</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Gifts and Toys</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Electrics and Electronics</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Beauty Products</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Other Products</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Instore Products</p>
      </a>
    </section>
    <!-- Price Range -->
    <section class="price-range">
      <header>Price Range</header>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Under &dollar; 10</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>&dollar; 10 - &dollar; 100</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>&dollar; 100 - &dollar; 1000</p>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <p>Above &dollar; 1000</p>
      </a>
    </section>
    <!-- Custom Price -->
    <section class="custom-price">
      <input type="number" placeholder="$Min" class="ml-2" />
      <input type="number" placeholder="$Max" class="ml-2 mr-2" />

      <button class="btn">
        <a href="http://" target="_blank" rel="noopener noreferrer">GO</a>
      </button>
    </section>
    <!-- Delivery options -->
    <section class="delivery">
      <header>Delivery Options</header>
      <a href="#">
        <p>Instore</p>
      </a>
      <a href="#">
        <p>Pick Up</p>
      </a>
      <a href="#">
        <p>Delivery</p>
      </a>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.vertical-menu {
  width: 300px;
  overflow-y: auto;
  height: auto;
}

header {
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
}

input {
  width: 80px;
}
</style>
