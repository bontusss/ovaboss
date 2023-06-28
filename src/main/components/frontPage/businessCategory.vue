<template name="component-name">
  <div class="container">
    <div class="parent">
      <span class="clo"><header>popular business category</header></span>
      <!-- <div class="column" v-for="category in categories" :key="category.id">
        <a :href="category.link"><img :src="category.img" alt=""/></a>
      </div> -->
      <a :href="category.link" v-for="category in categories" :key="category.id"
        ><img :src="category.img" alt=""
      /></a>
    </div>
  </div>
</template>
<script>
// JS
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          img: "images/133.png",
          link: ""
        },
        {
          id: 2,
          img: "images/135.png",
          link: ""
        },
        {
          id: 3,
          img: "images/137.png",
          link: ""
        },
        {
          id: 4,
          img: "images/138.png",
          link: ""
        },
        {
          id: 5,
          img: "images/136.png",
          link: ""
        }
      ]
    };
  }
};
</script>
<style lang="css" scoped>
.parent {
  display: grid;
  grid-template-columns: 0.5fr repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 0px;
  /* border: 1px solid black; */
}

.container {
  margin-bottom: 10px;
}

header {
  text-align: center;
  padding-top: 70px;

  color: black !important;
}

img {
  width: 100%;
  /* height: 200px; */
}

img:hover {
  opacity: 0.2;
}

@media (min-width: 320px) and (max-width: 991px) {
  .parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 5px;
    margin-top: 20em;
  }
}
</style>
