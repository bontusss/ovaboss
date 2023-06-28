// This will go under the Search label in App.
<template>
  <div class="col-lg-5 col-12 order-lg-2 order-3 text-lg-left text-right">
    <div class="">
      <div class="">
        <div style="" class="header_search_form_container">
          <form action="#" class="header_search_form clearfix">
            <input
              style="width:100%"
              type="search"
              required
              class="header_search_input"
              placeholder="Search for Products, Services and Businesses"
            />
            <button
              type="submit"
              class="header_search_button trans_300"
              value="Submit"
            >
              <img src="images/search.png" alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topSearchAndButtonComponent"
};
</script>

<style>
.header_search_form_container {
  width: 100%;
  /* position: absolute; */
  margin: 23px auto;
}
</style>
