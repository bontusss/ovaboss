<template>
  <div
    class="search-result"
    v-if="
      loadingText.length ||
      products.length ||
      services.length ||
      businesses.length ||
      (!(products.length || services.length || businesses.length) &&
        !loadingText.length &&
        searchTerm.length)
    "
  >
    <div v-if="loadingText.length">
      <div class="loading">
        <img
          :src="`${baseUrl}/images/OvabossLoadingDouble_Ring-2.4s-490px.svg`"
          alt="Ovaboss Loading Image"
        />
        <strong>{{ loadingText }}</strong>
      </div>
    </div>
    <div v-if="products.length || services.length || businesses.length">
      <div class="products" v-if="products.length">
        <h5 class="result-group-title">Products</h5>
        <a
          :href="product.url"
          :key="product.id"
          class="search-wrap-link"
          v-for="product in products"
        >
          <img :alt="product.title" :src="product.thumbnail" class="thumbnail" />
          <p class="details">
            <strong class="title">{{ product.title }}</strong>
          </p>
        </a>
      </div>
      <div class="services" v-if="services.length">
        <h5 class="result-group-title">Services</h5>
        <a
          :href="service.url"
          :key="service.id"
          class="search-wrap-link"
          v-for="service in services"
        >
          <img :alt="service.title" :src="service.thumbnail" class="thumbnail" />
          <p class="details">
            <strong class="title">{{ service.title }}</strong>
          </p>
        </a>
      </div>
      <div class="businesses" v-if="businesses.length">
        <h5 class="result-group-title">Businesses</h5>
        <a
          :href="business.url"
          :key="business.id"
          class="search-wrap-link"
          v-for="business in businesses"
        >
          <img :alt="business.name" :src="business.logo" class="thumbnail" />
          <p class="details">
            <strong class="title">{{ business.name }}</strong>
          </p>
        </a>
      </div>
    </div>
    <div
      v-if="
        !(products.length || services.length || businesses.length) &&
        !loadingText.length &&
        searchTerm.length
      "
    >
      <p class="text-center">
        No Product, Services or Business found relating to your search term
        <strong>{{ searchTerm }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import SearchAPI from '@/resources/api/store/Search'
// import HomeUrlMixin from "../inc/navCommonMixin";

const searchAPI = new SearchAPI()

export default {
  // mixins: [HomeUrlMixin],
  props: {
    searchTerm: {
      type: String,
      required: true
    }
  },
  name: 'SearchComponent',
  data: () => {
    return {
      products: [],
      services: [],
      businesses: [],
      loadingText: ''
    }
  },
  watch: {
    // whenever question changes, this function will run
    searchTerm: function (newSearchTerm, oldSearchTerm) {
      this.loadingText = 'Waiting for you to stop typing...'
      this.debouncedSearchByTerm()
    }
  },
  created: function () {
    // this.debouncedSearchByTerm = _.debounce(this.searchByTerm, 500)
  },
  methods: {
    searchByTerm: function () {
      if (this.searchTerm.length < 1) {
        this.loadingText = ''
        return
      }
      this.loadingText = 'Searching...'
      searchAPI
        .searchByTerm(this.searchTerm, (data) => {
          this.products = data.products
          this.services = data.services
          this.businesses = data.businesses
          this.loadingText = ''
        })
        .catch((error) => {
          this.loadingText = 'Error! Could not reach the API. ' + error
        })
    }
  }
}
</script>

<style scoped>
.search-result {
  position: absolute;
  width: 100%;
  background: #f5f5f5;
  top: 100%;
  padding: 15px 15px 25px;
  overflow-y: auto;
  max-height: 80vh;
}

.search-result,
.search-result .products,
.search-result .services,
.search-result .businesses {
  display: flex;
  flex-direction: column;
}

.search-result .result-group-title {
  font-size: 0.9rem;
  border-bottom: 1px solid #eee;
  margin: 15px 0 10px;
}

.search-result .search-wrap-link,
.search-result .loading {
  display: flex;
  flex-direction: row;
}

.search-result .search-wrap-link {
  padding-bottom: 5px;
  border-bottom: 1px dashed;
  margin-bottom: 5px;
  text-decoration: none;
  transition: all ease 300ms;
}
.search-result .search-wrap-link:hover {
  padding: 5px;
  border: none;
  background: #ededed;
}

.search-result .search-wrap-link > img,
.search-result .loading > img {
  flex-grow: 0;
  max-width: 30%;
  margin-right: 10px;
}

.loading > strong {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
