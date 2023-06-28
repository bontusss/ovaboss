<template>
  <div>
    <div class="row">
      <div class="column left">
        <img src="/images/blog_7.jpg" alt="banner" />
      </div>
      <div class="column right">
        <section class="date">
          <p v-bind="date">
            {{ date.month }} <br />
            {{ date.day }}
          </p>
        </section>

        <section class="caption">
          <p>{{ service.caption }}</p>
        </section>

        <section class="body">
          <p v-bind="body">
            by <a :href="body_link">{{ service.body_name }}</a>
          </p>
        </section>

        <section class="price" v-if="free === true">
          <p>Free</p>
        </section>

        <section class="price" v-else>
          <p>Paid</p>
        </section>

        <button>
          Register
        </button>
      </div>
    </div>
    <!-- <hr /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      free: false,
      body_link: "#",
      date: {
        month: "Mar",
        day: "04"
      },
      service: {
        caption: "Standing Tall: An International Women's Day Event",
        body_name: "Women Will Lekki"
      }
    };
  }
};
</script>

<style lang="css" scoped>
.column {
  float: left;
  /* border-style: solid;
  border-width: 1px; */
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.row {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  height: 400px;
  /* background-color: #868e96; */
  /* border-style: solid;
  border-width: 1px; */
  margin-top: 7%;
}

.left {
  /* border-style: solid;
  border-width: 1px; */
  width: 73%;
}

.right {
  /* border-style: solid;
  border-width: 1px; */
  width: 23%;
  margin-left: 48px;
  padding-left: 15px;
  background-color: #f8f9fa;
}

.date > p {
  font-size: 18px;
  /* font-family: monospace; */
}

.caption > p {
  font-weight: bold;
  font-size: 20px;
  /* font-family: monospace; */
}

.body > p {
  /* font-family: monospace; */
}

img {
  width: 894px;
  height: 397px;
}

.price > p {
  /* font-family: monospace; */
  font-weight: bolder;
  font-size: 35px;
}

button {
  padding: 5px 60px;
  border-style: solid;
  border-width: 0px;
  /* font-family: monospace; */
  margin-left: 30px;
  margin-top: 30px;
}
</style>
