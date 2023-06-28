<template>
  <div>
    <div class="container">
      <div class="parent">
        <p class="pa">
          <a
            class="btn1"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            >Contact Seller</a
          >
          <!-- <div class="social"> -->
          <Share :business="business" />
          <!-- </div> -->
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body" v-if="business.id">
            <p class="contact-info">
              <a class="" :href="`tel:${business.phone}`">{{ business.phone }}</a>
              <a class="" :href="`mailto:${business.email}}`">{{ business.email }}</a>
              <a class="" href="http://" target="_blank" rel="noopener noreferrer"
                >Chat with seller</a
              >
              <a class="" :title="`${business.address}`" href="">{{
                business.address.substring(0, 23) + '...'
              }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Share from './share.vue'
export default {
  props: {
    business: {
      type: Object,
      required: true
    }
  },
  components: { Share }
}
</script>

<style lang="css" scoped>
.parent {
  margin-top: 10px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
}

.pa {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 700px;
  grid-row-gap: 0px;
}
.btn1 {
  text-align: center;
  font-weight: bold;
  margin-top: 10%;
}
.btn,
a {
  /* color: #000 !important; */
  /* padding: 5px 15px; */
  /* font-size: 15px; */
  /* font-family: monospace; */
  text-align: center;
  font-weight: bold;
  margin-top: 5%;
  /* text-decoration: underline; */
  /* background-color: #f8f9fa; */
}

a {
  /* background-color: #ffd700; */
  /* color: white; */
  text-decoration: none;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  padding: -20px 5px;
  margin-top: -15px;
  margin-bottom: -10px;
}
@media (min-width: 320px) and (max-width: 991px) {
  .parent {
    margin-top: 10px;
  }
  .contact-info {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
  }

  .pa {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
}
</style>
