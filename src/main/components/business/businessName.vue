<template>
  <div>
    <div class="front-nav-spaced" id="BusinessNameMainWrapper">
      <div v-if="business.id">
        <div class="container">
          <div class="details-wrap">
            <div class="rounded">
              <p class="title">
                Welcome to
                <b>{{ business.store_name }}</b>
              </p>
              <div class="about-business">
                <p>{{ business.description }}</p>
              </div>
            </div>
            <div class="business-logo">
              <img :alt="`${business.name} Logo`" :src="business.logo" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="parent-two">
            <div class="one bc">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span> |
              <i>43 of 80 Reviews</i>
            </div>
            <div class="two rounded bc">
              <p>
                Club:
                <b><!--{{ clubLevel }}--></b>
              </p>
            </div>
            <div class="three rounded bc">
              <p
                data-placement="right"
                data-toggle="tooltip"
                title="This business has been verified"
              >
                Verified badge
              </p>
            </div>
            <div class="four rounded bc">
              <p>
                <!--              {{ successful_sales }}-->
                <b>Sales</b>
              </p>
            </div>
            <!-- <div class="five rounded bc">
                          <p>Fashion</p>
                        </div> -->
            <div class="six rounded bc">
              <p data-placement="right" data-toggle="tooltip" title="10 years on Ovaboss">
                10
                <b>years</b>
              </p>
            </div>
            <div class="seven rounded bc">
              <p>{{ business.country }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    business: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      data: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/sass/_variables.scss';
@import '/src/assets/sass/_mixins.scss';

#BusinessNameMainWrapper {
  margin-top: 113px;

  @include for-tablet-landscape-up {
    margin-top: 6.5%;
  }
}

.details-wrap {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column-reverse;

  @include for-tablet-landscape-up {
    padding: 0 50px;
    background-color: #f8f9fa;
    flex-direction: row;
  }
}

.title {
  text-align: center;
  color: rgb(46, 42, 42);
  font-size: 1.5rem;
  @include for-tablet-landscape-up {
    margin-top: 4%;
    font-size: 35px;
    text-align: left;
  }
}

img {
  height: auto;
  width: 100%;
  max-width: 100%;
}

.business-logo[data-v-6d9ff8d0] {
  max-width: 20%;
  margin: auto;
}

.about-business {
  padding: 0;
  margin-top: 0%;
  width: 100%;
  text-align: justify;
  word-wrap: break-word;

  @include for-tablet-landscape-up {
    padding: 20px 20px 20px 0;
    margin-top: -5%;
  }
}

.parent-two {
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  margin-top: 20px;
}

.checked {
  color: #ffd700;
}

.bc {
  background-color: #f8f9fa;
  text-align: center;
  padding-top: 15px;
}

@media (min-width: 320px) and (max-width: 991px) {
  .parent-two {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
  }
}
</style>
