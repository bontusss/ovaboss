<template>
  <div>
    <div class="container">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            >Product details</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            >Specifications</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            >Warranty</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="pickup-info-tab"
            data-toggle="pill"
            href="#pickup-info"
            role="tab"
            aria-controls="pickup-info"
            aria-selected="false"
            >Delivery and Pickup Info</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="return-policy-tab"
            data-toggle="pill"
            href="#return-policy"
            role="tab"
            aria-controls="return-policy"
            aria-selected="false"
            >Return Policy</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="reviews-tab"
            data-toggle="pill"
            href="#reviews"
            role="tab"
            aria-controls="reviews"
            aria-selected="false"
            >Reviews</a
          >
        </li>
      </ul>
      <div
        class="tab-content"
        id="pills-tabContent"
        v-for="data in data"
        :key="data.id"
      >
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <p v-html="data.description">{{ data.description }}</p>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <ul>
            <li v-for="feature in data.features" :key="feature.id">
              {{ feature }}
            </li>
          </ul>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          contact
        </div>
        <div
          class="tab-pane fade"
          id="pickup-info"
          role="tabpanel"
          aria-labelledby="pickup-info-tab"
        >
          pickup and delivery
        </div>
        <div
          class="tab-pane fade"
          id="return-policy"
          role="tabpanel"
          aria-labelledby="return-policy-tab"
        >
          Return Policy
        </div>
        <div
          class="tab-pane fade"
          id="reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
        >
          <reviews />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      features: []
    };
  },
  mounted() {
    axios
      .get(
        "https://ovaboss.dev.i.ng/api/v1/products/apple-apple-iphone-x-58-3gb-ram-64gb-rom-12mp-12mp-7mp-smartphone-white"
      )
      .then(response => {
        this.data = response.data;
        console.log(data);
      });
  }
};
</script>

<style lang="css" scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
}

.left {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
}

@media (min-width: 320px) and (max-width: 991px) {
  .parent {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .left {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
}
</style>
