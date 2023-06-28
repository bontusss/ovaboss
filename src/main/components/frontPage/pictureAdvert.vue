<template>
  <div class="container">
    <div class="box">
      <img class="img" src="images/AdBanner3.png" alt="" />
    </div>
    <p></p>
    <div id="box" class="box">
      <img class="img" src="images/AdBanner4.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.container {
  box-sizing: border-box;
  margin-top: -30px;
}

.box {
  float: left;
  width: 48%;
  /* padding: 10px; */
  /* height: 226px; */
  /* color: grey; */
  /* background-color: white; */
  /* border: solid;
  border-radius: 20px; */
  /* border-color: grey; */
  /* border-width: 1px; */
  /* box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1); */
}

#box {
  margin-left: 4%;
}

.container:after {
  content: "";
  display: table;
  clear: both;
}

.img {
  /* height: 226px; */
  width: 100%;
}

@media screen and (max-width: 600px) {
  .box {
    width: 100%;
    /* height: 100%; */
    margin: 5px 0px !important;
  }
}
</style>
