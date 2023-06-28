// rework on the navbar
<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="navbar">
    <div class="container">
      <!-- start logo -->
      <a :href="`${baseUrl}`" class="navbar-brand" id="logo">
        <img :src="`${baseUrl}/images/logo550x165.png`" alt="Ovaboss Logo" />
      </a>

      <a :href="`${baseUrl}/cart`" class="mobile-cart">
        <i class="fas fa-cart-plus"></i>
        <span class="badge badge-warning">{{ cartCount }}</span>
      </a>
      <!-- categories dropdown for mobile -->
      <mobile-category :categories="categories" :is-logged-in="isLoggedIn" />
      <!-- end of categories dropdown for mobile -->

      <div class="d-block d-sm-none search-mobile-wrap">
        <input
          class="d-block d-sm-none search-mobile"
          name="search"
          placeholder="Search for Products, Services and Businesses"
          size
          type="text"
          v-model="searchTerm"
        />
        <search-component :search-term="searchTerm" />
      </div>

      <form class="form-inline my-2 my-lg-0">
        <!-- searchbar for laptop -->
        <div class="search-laptop-group d-none d-sm-flex">
          <input
            id="search-laptop"
            name="search"
            placeholder="Search for Products, Services and Businesses"
            type="text"
            v-model="searchTerm"
          />
          <button class="search-btn" type="submit">
            <i class="fa fa-search"></i>
          </button>
          <!-- end search -->
          <search-component :search-term="searchTerm" />
        </div>
        <div class="blank"></div>
        <!-- navlinks -->
        <ul class="navbar-nav mr-auto" id="nav">
          <li class="nav-item active">
            <a :href="`${baseUrl}/cart`" class="nav-link">
              <i class="fas fa-cart-plus"></i> Cart
              <span class="badge badge-warning">{{ cartCount }}</span>
            </a>
          </li>
          <li class="nav-item dropdown d-none d-lg-block">
            <a :href="`${baseUrl}/member/dashboard`" class="dropdown-item mb-1" v-if="isLoggedIn"
              >My Community</a
            >
            <a
              class="nav-link"
              data-target="#modalLoginForm"
              data-toggle="modal"
              href="#"
              role="button"
              style="color: black"
              v-else
              >My Community</a
            >
          </li>
          <!-- show logout is user is logged in -->
          <li class="nav-item d-none d-lg-block" v-if="isLoggedIn">
            <a @click="logoutMember" class="nav-link" href="#" id="extra-pad">Logout</a>
          </li>
          <!-- hide sign up if user logs in -->
          <li class="nav-item d-none d-lg-block" v-else>
            <a
              class="nav-link"
              data-target="#modalRegisterForm"
              data-toggle="modal"
              href="#"
              id="with-border"
              >Signup & Earn</a
            >
          </li>
        </ul>
        <!-- end -->
      </form>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import LogoutButtonComponent from './frontPage/LogoutButtonComponent.vue'
import DropdownLoginComponent from './DropdownLoginComponent.vue'
import MobileCategory from './mobileCategoryMenu.vue'
import SearchComponent from './searchComponent.vue'

export default {
  // mixins: [HomeUrlMixin],
  components: { SearchComponent, LogoutButtonComponent, DropdownLoginComponent, MobileCategory },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  name: 'Navbar',
  data: () => {
    return {
      searchTerm: '',
      baseUrl: location.origin,
      cartCount: 3 // sort cart mapgetter and remove this line
    }
  },
  computed: {
    searchCssProps: function () {
      return {
        '--header-search-icon': `url("${this.baseUrl}/icons/search.png")`
      }
    },
    isBcc: function () {
      return false
    },
    ...mapGetters('auth', {
      isLoggedIn: 'isLoggedIn',
      profileName: 'profileName'
    }),
    // ...mapGetters('cart', {
    //   cartCount: 'count'
    // })
  },
  mounted() {
    this.$store.dispatch('cart/getCount').catch((_) => {})

    $(window).scroll(function () {
      if ($(document).scrollTop() === 0) {
        $('#bars').hide()
      } else {
        $('#bars').show()
      }
    })
  },
  methods: {
    logoutMember: function (e) {
      e.preventDefault()
      this.$store
        .dispatch('auth/logout')
        .then(() => location.reload())
        .catch()
    },
    openModal() {
      $('#modalLoginForm').modal({})
    }
  }
}
</script>

<style lang="css" scoped>
i {
  color: grey;
  padding-left: 2px;
}

#navbar {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}

.mobile-cart {
  position: absolute;
  margin-left: 60%;
  font-size: 24px;
  margin-top: -17px !important;
}

.search-btn {
  background-color: gold !important;
  color: white !important;
  border: 0px solid gold;
  padding: 7.5px 10px;
}

#search-laptop[placeholder] {
  font-size: 15px;
  color: #000;
}

#search-laptop {
  padding: 8px 10px;
}

#search-laptop,
.search-btn {
  background-color: #fff;
  font-size: 17px;
  cursor: pointer;
  outline: none;
}

.search-mobile {
  border: 0.5px solid gold;
  height: 35px;
  width: 100%;
}

.search-mobile[placeholder] {
  padding-left: 10px;
}

#search-mobile {
  display: none;
}

li {
  font-size: 14px;
}

li:nth-child(3) {
  margin-left: 2.5em;
}

li:nth-child(2) {
  margin-left: 1em;
}

#with-border {
  /* margin-top: 3px; */
  border: 0px solid black;
  padding: 8px 18px;
  color: black;
  font-weight: 200;
  background-color: gold;
}

#extra-pad {
  padding: 8px 40px;
  color: black;
  font-weight: 200;
  background-color: gold;
  border: 0px solid black;
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.btn-outline-dark {
  color: #343a40;
  background-color: transparent;
  background-image: none;
  border-color: #343a40;
}

.btn-outline-dark:hover {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

a#logo {
  flex: 21;
}
form.form-inline.my-2.my-lg-0 {
  flex: 79;
}
.search-laptop-group {
  padding: 0;
  margin: 0;
  flex: 1;
  display: flex;
}

#search-laptop {
  border: 1px solid gold;
}
.search-laptop-group #search-laptop {
  flex: 1;
}
form .blank {
  width: 7rem;
}

/* media Queries */
/* NOrmal phones like pixel2 and nexus5x */
@media (max-width: 768px) {
  a#logo {
    flex: 1;
  }

  #search-mobile {
    width: 100%;
    display: block !important;
    outline: none;
  }

  #search-laptop,
  .search-btn {
    display: none;
  }

  #navbar {
    margin-bottom: 20px;
  }

  #cart {
    color: #6c757d;
    font-size: 20px;
  }

  #nav {
    display: none;
  }

  #signup {
    margin-left: 6em;
  }

  form .blank {
    display: none;
  }
}
</style>
