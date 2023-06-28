<template>
  <div class="container">
    <div class="box">
      <img
        id="with-border"
        type="button"
        data-toggle="modal"
        data-target="#modalRegisterForm"
        href="#"
        class="img"
        src="images/AdBanner1.png"
      />
    </div>
    <p></p>
    <div id="box" class="box">
      <img class="img" src="images/AdBanner2.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.container {
  box-sizing: border-box;
  margin-bottom: 0px;
  /* background-color: #fff; */
}

[type="button"][data-toggle="modal"] {
  cursor: pointer;
}

.box {
  float: left;
  width: 48%;
  /* padding: 10px; */
  /* height: 226px; */
  /* background-color: #fff; */
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
  /* height: 226px */
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
