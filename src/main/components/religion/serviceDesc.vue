<template>
  <div>
    <div class="container">
      <div class="col left">
        <section class="prog-desc">
          <p class="excerpt">
            <b>{{ excerpt }}</b>
          </p>
          <p class="title">About this Event</p>
          <p class="description">
            {{ description }}
          </p>
        </section>
      </div>
      <div class="col right">
        <section class="info">
          <p class="title">
            Date and Time
          </p>
          <p class="prog-date">
            {{ info.date }}
          </p>

          <p class="title">
            Location
          </p>
          <p class="prog-location">
            {{ info.location }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      excerpt:
        "Standing tall is organized to commomerate Int'l Womens day. We want to encourage women to stand up and stand out",
      description:
        "Standing tall is organized to commomerate Int'l Womens day. The theme of this years IWD is tagged #EachForAll, and the key achievement is to celebrate womens objective as well as to encourage more women to stand up and stand out - thus our theme",
      info: {
        date: "Sat, March 7, 2020 - 9:00Am - 5:00PM",
        location:
          "The Kairos Club, Plot 94 The Providence Street #Block 2 Lagos, LA"
      }
    };
  }
};
</script>

<style lang="css" scoped>
.col {
  float: left;
  /* border-style: solid;
  border-width: 1px; */
  height: auto;
  background-color: #f8f9fa;
}

.container:after {
  content: "";
  display: table;
  clear: both;
}

.container {
  margin-top: 3%;
  margin-bottom: 20px;
}

.left {
  width: 73%;
  /* border-style: solid;
  border-width: 1px; */
}

.right {
  width: 23%;
  /* border-style: solid;
  border-width: 1px; */
  margin-left: 48px;
}

.prog-desc {
  height: auto;
  width: 800px;
  /* border-style: solid;
  border-width: 1px; */
  margin-right: auto;
  margin-left: auto;
  margin-top: 2%;
  background-color: white;
  padding: 30px;
}

.prog-desc > p {
  /* font-family: monospace; */
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #828282;
}

.info {
  padding: 20px;
}

.info > p {
  /* font-family: monospace; */
}
</style>
