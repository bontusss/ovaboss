<template>
  <div class="row">
    <div class="column" v-for="data in data" :key="data.id">
      <div class="card">
        <span class="badge" id="de" v-if="data.percentage"
          >{{ data.percentage }}% OFF</span
        >
        <i class="fa fa-heart"></i>
        <div class="image">
          <img :src="data.thumbnail" :alt="data.title" />
        </div>
        <!-- <div class>
          <div class="float-left">
            <span class="fa fa-star" v-if="data.ratings.rating === 1"></span>
            <span v-if="data.ratings.rating === 2" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 2" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 3" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 3" class="fa fa-star"></span>
            <span v-if="data.ratings === 3" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 4" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 4" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 4" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 4" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 5" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 5" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 5" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 5" class="fa fa-star"></span>
            <span v-if="data.ratings.rating === 5" class="fa fa-star"></span>
            <p>{{ data.reviews > 0 ? `${data.reviews} Reviews` : "No reviews" }}</p>
          </div>
          <p class="price float-right">&dollar; {{ data.amount }}</p>
        </div>-->
        <p class="name">{{ data.title }}</p>

        <button
          class="cart"
          v-if="!data.isAddedToCart"
          @click="addToCart(data.id)"
        >
          {{ addToCartLabel }}
        </button>
        <button
          class="cart"
          v-if="data.isAddedToCart"
          @click="removeFromCart(data.id, false)"
        >
          {{ removeFromCartLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    axios.get("https://ovaboss.dev.i.ng/api/v1/products").then(response => {
      this.data = response.data;
      console.log(data);
    });
  },
  methods: {
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
      this.$store.commit("addToCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    saveToFavorite(id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit("addToFavourite", id);
      } else {
        this.$store.commit("showLoginModal", true);
      }
    },
    removeFromFavourite(id) {
      this.$store.commit("removeFromFavourite", id);
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    }
  }
};
</script>

<style lang="css" scoped>
/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  /* color: #fff; */
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 auto;
  width: 100%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  margin-top: 7px;

  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #fff;
  height: 400px;
  transition: 0.5s ease-in;
  margin-top: 7px;
}

.card:hover {
  border-style: solid;
  border-width: 1px;
  border-color: #ffd700;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.image {
  height: 200px;
  border-style: solid;
  border-width: 0px;
  /* border-color: #ffd700; */
  margin-top: 50px;
}
img {
  height: 100%;
}

.name {
  font-weight: 600;
}

.cart {
  width: 100%;
  outline: none;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  padding-top: 5px;
  padding-bottom: 5px;
  border-color: orange;
  color: orange;
  transition: 0.5s ease-in-out;
  font-weight: 800;
  /* color: #fff; */
}

.cart:hover {
  background-color: orange;
  color: #fff !important;
  cursor: pointer;
}

.badge {
  border-style: solid;
  border-width: 0px;
  background-color: orange;
  width: 45px;
  font-size: 14px;
  color: #fff;
  /* margin-right: -1px; */
}

#de {
  border-style: solid;
  border-width: 0px;
  background-color: orangered;
  width: 60px;
  font-size: 14px;
  color: #fff;
}

.price {
  font-size: 20px;
  padding-top: 20px;
  font-family: monospace;
  font-weight: 800;
}

i {
  margin-left: 80%;
  margin-top: -11%;
  font-size: 20px;
  color: orange;
}

i:hover {
  cursor: pointer;
  font-size: 25px;
  transition: 0.5s ease-in-out;
}
/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>
