<template>
  <div class="container">
    <div class="parent">
      <div class="column">
        <p>Breadcrumbs here</p>
        <p class="title">Fashion and Accessories</p>
        <br />
        <span>
          <p class="results">{{ results }} products found</p>
        </span>
      </div>
      <div class="column">
        <input type="search" name id placeholder="search ovaboss fashion" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: 1000
    };
  }
};
</script>

<style lang="css" scoped>
.parent {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 2px;
  grid-row-gap: 0px;
  /* border: 1px solid red; */
}

.container {
  margin-top: 6em;
}

.title {
  font-size: 20px;
}

.results {
  margin-top: -40px;
}

input {
  margin-left: 76%;
}
</style>
