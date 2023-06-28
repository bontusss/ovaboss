<template>
  <div class="page_menu">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="page_menu_content">
            <div class="page_menu_search">
              <form action="#">
                <input
                  type="search"
                  required="required"
                  class="page_menu_search_input"
                  placeholder="Search for products..."
                />
              </form>
            </div>
            <ul class="page_menu_nav">
              <li class="page_menu_item">
                <a href="#">Home</a>
              </li>
              <li class="page_menu_item">
                <a href="#">Super Deals</a>
              </li>
              <li class="page_menu_item has-children">
                <a href="#">
                  Featured Brands
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="page_menu_selection">
                  <li>
                    <a href="#">
                      Featured Brands
                      <i class="fa fa-angle-down"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Menu Item
                      <i class="fa fa-angle-down"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Menu Item
                      <i class="fa fa-angle-down"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Menu Item
                      <i class="fa fa-angle-down"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="page_menu_item">
                <a href="#">About Us</a>
              </li>
              <li class="page_menu_item">
                <a href="blog.html">Blog</a>
              </li>
              <li class="page_menu_item">
                <a href="contact.html">Contact</a>
              </li>
            </ul>

            <div class="menu_contact">
              <div class="menu_contact_item">
                <div class="menu_contact_icon">
                  <img src="images/phone_white.png" alt />
                </div>
                +234 803 005 3570
              </div>
              <div class="menu_contact_item">
                <div class="menu_contact_icon">
                  <img src="images/mail_white.png" alt />
                </div>
                <a href="mailto:sales@ovaboss.com">sales@ovaboss.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang=""></style>
