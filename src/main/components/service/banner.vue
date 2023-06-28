<template>
  <div>
    <div class="container">
      <!-- start left -->
      <div class="parent">
        <div class="column left">
          <img src="/images/blog_7.jpg" alt="banner" />
        </div>
        <!-- start right -->
        <div class="column right">
          <section class="date">
            <p v-bind="date">
              {{ date.month }}
              <br />
              {{ date.day }}
            </p>
          </section>

          <section class="caption">
            <p>{{ service.caption }}</p>
          </section>

          <section class="body">
            <p v-bind="body">
              by
              <a :href="body_link">{{ service.body_name }}</a>
            </p>
          </section>

          <section class="price" v-if="free === true">
            <p>Free</p>
          </section>

          <section class="price" v-else>
            <p>Paid</p>
          </section>

          <button>Register</button>
        </div>
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
.container {
  margin-top: 70px;
}
.parent {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
}

.left {
  margin-left: 20px;
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
