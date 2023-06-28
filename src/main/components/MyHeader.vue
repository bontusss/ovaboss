<template>
  <nav class="navbar nav fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="drop_down_mobile" id="hidden-menu">
        <div class="dropbtn_mobile">
          <div class="fas fa-bars"></div>
        </div>
        <div class="dropdown-content-mobile">
          <category-menu></category-menu>
        </div>
      </div>
      &nbsp;
      <a class="navbar-brand" :href="`${baseUrl}`">
        <img
          alt="Ovaboss Logo"
          id="logo"
          :src="`${baseUrl}/images/logo550x165.png`"
        />
      </a>
      <!-- <i id="hidden-menu2" class="fas fa-bars"></i>  -->
      <div class="drop_down" id="bars">
        <div class="dropbtn">
          <div class="fas fa-bars" id="hidden-menu2"></div>
        </div>
        <div class="dropdown-content">
          <category-menu></category-menu>
        </div>
      </div>

      <a class="nav-link header-nav-icon-links" href="#">
        <span class="hidden-header-content">
          <i
            data-toggle="modal"
            data-target="#modalRegisterForm"
            class="fas fa-user-plus"
          ></i
          >``
        </span>
      </a>
      <span class="hidden-header-content dropdown" style="cursor: pointer;">
        <a
          aria-expanded="false"
          aria-haspopup="true"
          class="dropdown-toggle nav-link one active"
          data-toggle="dropdown"
          ><i class="fas fa-user"></i
        ></a>

        <!--Menu-->
        <span class="dropdown-menu" aria-labelledby="profileDropdownButton">
          <!-- Authentication Links -->
          <dropdown-login-component v-if="!isLoggedIn" />
          <span v-else>
            <h6 class="dropdown-item">{{ profileName }}</h6>
            <span class="dropdown-divider"></span>
            <span class="p-2">
              <a
                class="dropdown-item mb-1"
                :href="`${baseUrl}/member/dashboard`"
                >My Dashboard</a
              >
              <logout-button-component></logout-button-component>
            </span>
          </span>
        </span>
      </span>
      <!--/Dropdown primary-->

      <a class="nav-link header-nav-icon-links" href="#"
        ><span class="hidden-header-content"
          ><i class="fas fa-cart-plus"></i
        ></span>
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="search form-inline my-2 my-lg-0">
          <input
            style="outline:none"
            aria-label="Search"
            class="form-control mr-sm-2"
            id="SearchInput1"
            placeholder="Search for Products, Services and Businesses"
            size="50%"
            type="search"
            :style="searchCssProps"
          />
          <!-- <button id="btn" class="btn my-2 my-sm-0" type="submit">Search</button> -->
        </form>
        <ul class="d-ls-none navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link one" href="cart.html"
              ><i class="fas fa-cart-plus"></i> Cart
              <span class="badge badge-warning">$80</span>
            </a>
          </li>
          <li class="nav-item active">
            <div class="dropdown" style="cursor: pointer;">
              <a
                aria-expanded="false"
                aria-haspopup="true"
                class="dropdown-toggle nav-link one active"
                data-toggle="dropdown"
              >
                <i class="fas fa-user"></i> My Community</a
              >

              <!--Menu-->
              <div class="dropdown-menu">
                <!-- Authentication Links -->
                <dropdown-login-component v-if="!isLoggedIn" />
                <div v-else>
                  <h6 class="dropdown-item">{{ profileName }}</h6>
                  <div class="dropdown-divider"></div>
                  <div class="p-2">
                    <a
                      class="dropdown-item mb-1"
                      :href="`${baseUrl}/member/dashboard`"
                      >My Dashboard</a
                    >
                    <logout-button-component></logout-button-component>
                  </div>
                </div>
              </div>
            </div>
            <!--/Dropdown primary-->
          </li>
          <li class="nav-item active">
            <a
              id="with-border"
              class="nav-link one"
              type="button"
              data-toggle="modal"
              data-target="#modalRegisterForm"
              href="#"
            >
              SignUp & Earn</a
            >
          </li>
        </ul>
      </div>
      <form class="search form-inline my-2 my-lg-0" id="hidden-search">
        <input
          aria-label="Search"
          class="form-control mr-sm-2"
          id="SearchInput2"
          placeholder="Search for products, services and businesses"
          size="50%"
          type="text"
          :style="searchCssProps"
        />
        <button class="btn my-2 my-sm-0" id="btn" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MyHeader",
  data: () => {
    return {
      baseUrl: location.origin
    };
  },
  computed: {
    searchCssProps: function() {
      return {
        "--header-search-icon": `url("${this.baseUrl}/icons/search.png")`
      };
    },
    isBcc: function() {
      return true;
      //  $isBCC = (Request::segment(1) === 'bcc');
      // console.log(this.$router);
    },
    ...mapGetters("auth", {
      isLoggedIn: "isLoggedIn",
      profileName: "profileName"
    })
  },
  mounted() {
    $(window).scroll(function() {
      if ($(document).scrollTop() === 0) {
        $("#bars").hide();
      } else {
        $("#bars").show();
      }
    });
  },
  methods: {}
};
</script>

<style lang="css" scoped>
.nav {
  width: 100%;
  border-bottom-color: #ffd700;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  box-shadow: 0px 0px 15px grey;
  -webkit-box-shadow: 0px 0px 15px grey;
  -moz-box-shadow: 0px 0px 15px grey;
}

.container {
  /* border-bottom-width: 1px;
  border-bottom-style: solid; */
  background-color: rgb(255, 255, 255);
  width: 92%;
}

.badge {
  background-color: #ffd700;
}

li {
  padding-left: 30px;
}

form {
  width: 50%;
}

.search {
  /* margin-right: auto; */
  margin-left: 3%;
}

.nav-item {
  padding: 0px 5px;
  font-weight: bolder;
}

.nav-link {
  padding: 0.5rem;
}

#hidden-menu {
  display: none;
}

i:hover,
a:hover {
  color: #ffd700 !important;
  transition: 0.5s ease-in;
  /* box-shadow: 0px 5px 3px grey; */
}

#SearchInput1,
#SearchInput2 {
  border-width: 1px;
  border-color: #ffd700;
  outline: none;
  border-radius: 30px;
}

input:focus {
  outline: none;
}

input[type="search"] {
  background-image: var(--header-search-icon);
  /*background-image: url("./icons/search.png");*/
  background-size: 20px 20px;
  background-position: 95% 10px;
  background-repeat: no-repeat;
  padding-right: 0px;
}

#btn {
  border: 1px solid !important;
  background-color: #ffd700;
  outline: none !important;
  color: gray;
  font-weight: bolder;
  /* margin-left: -0; */
}

btn:focus {
  outline: none;
  border-style: solid !important;
  border-width: 1px !important;
}

#hidden-search {
  display: none;
}

.hidden-header-content {
  display: none;
}

#with-border {
  border-style: solid;
  border-width: 0px;
  background-color: #ffd700;
  margin-left: 25px;
  padding: 8px 20px;
  transition: 0.5s;
  color: rgb(109, 106, 106);
}

#with-border:hover {
  box-shadow: 0px 4px 9px grey;
  color: rgb(56, 55, 55) !important;
  opacity: 1;
  /* transition: 0.3s; */
}

#hidden-menu2 {
  margin-top: -8px;
  margin-left: -20px;
  position: absolute;
  font-size: 20px;
}

.drop_down {
  margin-left: 20%;
  position: absolute;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  /* min-width: auto; */
  /* min-height: auto; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  /* color: black; */
  padding: 4px 16px;
  /* text-decoration: none; */
  /* display: block; */
  text-align: left;
}

.drop_down:hover .dropdown-content {
  display: block;
}

.dropbtn {
  margin-left: -30px;
}

/* Responsive */
/* Laptops and destops */
@media (min-width: 1025px) {
  .nav {
    width: 100%;
    border-bottom-color: #ffd700;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    box-shadow: 0px 0px 15px grey;
    -webkit-box-shadow: 0px 0px 15px grey;
    -moz-box-shadow: 0px 0px 15px grey;
  }

  .container {
    /* border-bottom-width: 1px;
  border-bottom-style: solid; */
    background-color: rgb(255, 255, 255);
    width: 92%;
  }

  .badge {
    background-color: #ffd700;
  }

  li {
    padding-left: 30px;
  }

  form {
    width: 50%;
  }

  .search {
    /* margin-right: auto; */
    margin-left: 3%;
  }

  .nav-item {
    padding: 0px 5px;
    font-weight: bolder;
  }

  .nav-link {
    padding: 0.5rem;
  }

  #hidden-menu {
    display: none;
  }

  i:hover,
  a:hover {
    color: #ffd700 !important;
    transition: 0.5s ease-in;
    /* box-shadow: 0px 5px 3px grey; */
  }

  #SearchInput1,
  #SearchInput2 {
    border-width: 1px;
    border-color: #ffd700;
    outline: none;
    border-radius: 30px;
  }

  input:focus {
    outline: none;
  }

  input[type="search"] {
    background-image: var(--header-search-icon);
    /*background-image: url("./icons/search.png");*/
    background-size: 20px 20px;
    background-position: 95% 10px;
    background-repeat: no-repeat;
    padding-right: 0px;
  }

  #btn {
    border: 1px solid !important;
    background-color: #ffd700;
    outline: none !important;
    color: gray;
    font-weight: bolder;
    /* margin-left: -0; */
  }

  btn:focus {
    outline: none;
    border-style: solid !important;
    border-width: 1px !important;
  }

  #hidden-search {
    display: none;
  }

  .hidden-header-content {
    display: none;
  }

  #with-border {
    border-style: solid;
    border-width: 0px;
    background-color: #ffd700;
    margin-left: 25px;
    padding: 8px 20px;
    transition: 0.5s;
    color: rgb(109, 106, 106);
  }

  #with-border:hover {
    box-shadow: 0px 4px 9px grey;
    color: rgb(56, 55, 55) !important;
    opacity: 1;
    /* transition: 0.3s; */
  }

  #hidden-menu2 {
    margin-top: -8px;
    margin-left: -20px;
    position: absolute;
    font-size: 20px;
  }

  .drop_down {
    margin-left: 20%;
    position: absolute;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    /* min-width: auto; */
    /* min-height: auto; */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    /* color: black; */
    padding: 4px 16px;
    /* text-decoration: none; */
    /* display: block; */
    text-align: left;
  }

  .drop_down:hover .dropdown-content {
    display: block;
  }

  .dropbtn {
    margin-left: -30px;
  }
}
/* for most mobile (potrait) */
@media (min-device-width: 320px) and (max-device-width: 480px) {
  .nav {
    width: 100%;
  }

  .container {
    width: 100%;
    background-color: transparent;
  }

  .search {
    margin: 0;
    width: 100%;
    position: relative;
    margin-bottom: 0px;
  }

  i:hover,
  a:hover {
    color: #ffd700 !important;
    transition: ease-in 2s;
  }

  .icon {
    display: inline-block;
  }

  .nav-item {
    list-style: none;
  }

  .hidden-header-content {
    display: block !important;
  }

  #hidden-search {
    display: block;
  }

  .header-nav-icon-links {
    color: grey;
    font-size: 18px;
  }

  .header-nav-icon-links:hover {
    color: #ffd700;
  }

  #btn {
    display: none;
  }

  .carousel-inner {
    margin-top: 180px;
  }

  input[type="text"] {
    background-image: var(--header-search-icon);
    background-size: 20px 20px;
    background-position: 95% 10px;
    background-repeat: no-repeat;
    padding-right: 0px;
  }

  #hidden-menu2 {
    display: none;
  }

  .dropdown-content-mobile {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    /* min-width: auto; */
    /* min-height: auto; */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: 0.5s ease-in-out;
  }

  .drop_down_mobile:hover .dropdown-content-mobile {
    display: block;
  }

  .dropdown-content-mobile a {
    float: none;
    /* color: black; */
    padding: 4px 16px;
    /* text-decoration: none; */
    /* display: block; */
    text-align: left;
  }

  #hidden-menu {
    display: block;
    font-size: 20px;
    font-weight: normal;
  }

  #logo {
    width: 150px;
  }

  .drop_down {
    margin: 0px;
  }

  i {
    font-size: 20px;
    color: grey;
    margin-top: 10px;
    font-weight: normal;
  }

  @media (height: 800px) {
    .nav-item .nav-link {
      padding-left: 30px;
    }
  }
}

/* Loe resolution tablets, mobiles (landscape)*/
@media (min-width: 481px) and (max-width: 767px) {
}

/* Tablets and Ipads (landscape) */
@media (min-width: 768px) and (max-width: 1024px) {
}

/* laptops and desktops */
@media (min-width: 1025px) and (max-width: 1280px) {
  .nav {
    width: 100%;
    border-bottom-color: #ffd700;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    box-shadow: 0px 0px 15px grey;
    -webkit-box-shadow: 0px 0px 15px grey;
    -moz-box-shadow: 0px 0px 15px grey;
  }

  .container {
    /* border-bottom-width: 1px;
  border-bottom-style: solid; */
    background-color: rgb(255, 255, 255);
    width: 92%;
  }

  .badge {
    background-color: #ffd700;
  }

  li {
    padding-left: 30px;
  }

  form {
    width: 50%;
  }

  .search {
    /* margin-right: auto; */
    margin-left: 3%;
  }

  .nav-item {
    padding: 0px 5px;
    font-weight: bolder;
  }

  .nav-link {
    padding: 0.5rem;
  }

  #hidden-menu {
    display: none;
  }

  i:hover,
  a:hover {
    color: #ffd700 !important;
    transition: 0.5s ease-in;
    /* box-shadow: 0px 5px 3px grey; */
  }

  #SearchInput1,
  #SearchInput2 {
    border-width: 1px;
    border-color: #ffd700;
    outline: none;
    border-radius: 30px;
  }

  input:focus {
    outline: none;
  }

  input[type="search"] {
    background-image: var(--header-search-icon);
    /*background-image: url("./icons/search.png");*/
    background-size: 20px 20px;
    background-position: 95% 10px;
    background-repeat: no-repeat;
    padding-right: 0px;
  }

  #btn {
    border: 1px solid !important;
    background-color: #ffd700;
    outline: none !important;
    color: gray;
    font-weight: bolder;
    /* margin-left: -0; */
  }

  btn:focus {
    outline: none;
    border-style: solid !important;
    border-width: 1px !important;
  }

  #hidden-search {
    display: none;
  }

  .hidden-header-content {
    display: none;
  }

  #with-border {
    border-style: solid;
    border-width: 0px;
    background-color: #ffd700;
    margin-left: 25px;
    padding: 8px 20px;
    transition: 0.5s;
    color: rgb(109, 106, 106);
  }

  #with-border:hover {
    box-shadow: 0px 4px 9px grey;
    color: rgb(56, 55, 55) !important;
    opacity: 1;
    /* transition: 0.3s; */
  }

  #hidden-menu2 {
    margin-top: -8px;
    margin-left: -20px;
    position: absolute;
    font-size: 20px;
  }

  .drop_down {
    margin-left: 20%;
    position: absolute;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    /* min-width: auto; */
    /* min-height: auto; */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    /* color: black; */
    padding: 4px 16px;
    /* text-decoration: none; */
    /* display: block; */
    text-align: left;
  }

  .drop_down:hover .dropdown-content {
    display: block;
  }

  .dropbtn {
    margin-left: -30px;
  }
}

/* Destops to higher resolution desktops */
@media (min-width: 1281px) {
}
</style>
