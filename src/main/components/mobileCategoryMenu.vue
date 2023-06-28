<template>
  <div>
    <div class="overlay" id="myNav">
      <!-- Button to close the overlay navigation -->
      <a class="closebtn" href="javascript:void(0)" id="closebtn">&times;</a>

      <!-- Overlay content -->
      <div class="overlay-content">
        <div class="row">
          <a
            v-if="isLoggedIn"
            :href="`${baseUrl}/member/dashboard`"
            class="with-border btn col-xs-6 col-sm-6"
            >My Community</a
          >
          <button
            v-else
            class="with-border btn col-xs-6 col-sm-6"
            data-target="#modalLoginForm"
            data-toggle="modal"
          >
            My Community
          </button>

          <button
            class="with-border btn col-xs-6 col-sm-6 mt-2"
            data-target="#modalRegisterForm"
            data-toggle="modal"
            type="button"
          >
            SignUp & Earn
          </button>
        </div>
        <div class="row-c">
          <div class="column">
            <header>Categories</header>
            <div class="list-group">
              <a
                :href="item.url"
                :key="item.slug"
                class="list-group-item list-group-item-action"
                v-for="item in categories"
                >{{ item.title }}
              </a>
            </div>
          </div>
        </div>
        <div class="foter">
          <div class="logo">
            <a href="#">
              <img :src="logoUrl" alt="Ovaboss Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <span class="d-block d-sm-none" id="bar" style="font-size: 30px; cursor: pointer"
      >&#9776;
    </span>
  </div>
</template>

<script>
// import HomeUrlMixin from '../inc/navCommonMixin'

export default {
  // mixins: [HomeUrlMixin],
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    $('#bar').click(function () {
      $('#myNav').css('width', '100%')
    })

    $('#closebtn').click(function () {
      $('#myNav').css('width', '0%')
    })
  }
}
</script>

<style lang="css" scoped>
a {
  font-size: 15px !important;
  color: black !important;
}

#bar {
  margin-left: 130px;
}

.foter {
  background-color: #000;
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

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(255, 255, 255); /* Black fallback color */
  background-color: rgba(255, 255, 255); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

.btn.with-border {
  background-color: gold;
  color: black;
  font-weight: bold;
}

.overlay-content {
  position: relative;
  top: 5%; /* 25% from the top */
  width: 100%; /* 100% width */
  /* text-align: center; Centered text/links */
  margin-top: 30px; /* 30ploginx top margin to avoid conflict with the close button on smaller screens */
  /* border: 1px solid; */
}

.row {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid; */
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

hr {
  margin-bottom: 5px;
  margin-top: 5px;
}

i {
  margin-right: 3px;
}

header {
  font-size: 20px;
  margin: 10px 0px;
  text-align: center;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 0px;
  right: 20px;
  font-size: 30px;
}

/* media Queries */
/* NOrmal phones like pixel2 and nexus5x */
@media (max-width: 768px) {
  /* The Overlay (background) */
  .overlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */
    height: 100%;
    width: 0;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgb(255, 255, 255); /* Black fallback color */
    background-color: rgba(255, 255, 255); /* Black w/opacity */
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  }

  .overlay-content {
    position: relative;
    top: 5%; /* 25% from the top */
    width: 100%; /* 100% width */
    /* text-align: center; Centered text/links */
    margin-top: 30px; /* 30ploginx top margin to avoid conflict with the close button on smaller screens */
    /* border: 1px solid; */
  }

  .row {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    /* border: 1px solid; */
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block; /* Display block instead of inline */
    transition: 0.3s; /* Transition effects on hover (color) */
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }

  hr {
    margin-bottom: 5px;
    margin-top: 5px;
  }

  i {
    margin-right: 3px;
  }

  header {
    font-size: 20px;
    margin: 10px 0px;
    text-align: center;
  }

  /* Position the close button (top right corner) */
  .overlay .closebtn {
    position: absolute;
    top: 0px;
    right: 20px;
    font-size: 30px;
  }
}

/* smaller phones like iphone x and nexus4*/
@media (min-width: 360px) and (max-width: 412px) {
  .overlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */
    height: 100%;
    width: 0;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgb(255, 255, 255); /* Black fallback color */
    background-color: rgba(255, 255, 255); /* Black w/opacity */
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  }

  .overlay-content {
    position: relative;
    top: 5%; /* 25% from the top */
    width: 100%; /* 100% width */
    /* text-align: center; Centered text/links */
    margin-top: 30px; /* 30ploginx top margin to avoid conflict with the close button on smaller screens */
    /* border: 1px solid; */
  }

  .row {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    /* border: 1px solid; */
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block; /* Display block instead of inline */
    transition: 0.3s; /* Transition effects on hover (color) */
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }

  hr {
    margin-bottom: 5px;
    margin-top: 5px;
  }

  i {
    margin-right: 3px;
  }

  header {
    font-size: 20px;
    margin: 10px 0px;
    text-align: center;
  }

  /* Position the close button (top right corner) */
  .overlay .closebtn {
    position: absolute;
    top: 0px;
    right: 20px;
    font-size: 50px;
  }
}

@media (min-width: 320px) {
  .overlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */
    height: 100%;
    width: 0;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgb(255, 255, 255); /* Black fallback color */
    background-color: rgba(255, 255, 255); /* Black w/opacity */
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  }

  .overlay-content {
    position: relative;
    top: 5%; /* 25% from the top */
    width: 100%; /* 100% width */
    /* text-align: center; Centered text/links */
    margin-top: 30px; /* 30ploginx top margin to avoid conflict with the close button on smaller screens */
    /* border: 1px solid; */
  }

  .row {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    /* border: 1px solid; */
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block; /* Display block instead of inline */
    transition: 0.3s; /* Transition effects on hover (color) */
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }

  button {
    font-size: 12px !important;
  }

  hr {
    margin-bottom: 5px;
    margin-top: 5px;
  }

  i {
    margin-right: 3px;
  }

  header {
    font-size: 20px;
    margin: 10px 0px;
    text-align: center;
  }

  /* Position the close button (top right corner) */
  .overlay .closebtn {
    position: absolute;
    top: 0px;
    right: 20px;
    font-size: 30px;
  }

  #bar {
    margin-left: 20px;
  }
}

@media (max-width: 240px) {
  #bar {
    margin-left: 10px;
  }
}
</style>
