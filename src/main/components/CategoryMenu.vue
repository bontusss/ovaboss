<template>
  <ul class="cat_menu">
    <li>
      <a href="fashion.html">
        <i class="fas fa-tshirt"></i> Fashion & Accessories
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-home"></i> Home & Office
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li class="hassubs">
      <a href="#">
        <i class="fas fa-laptop-code"></i> Computers & Gadgets
        <i class="fas fa-chevron-right ml-auto"></i>
      </a>
      <ul>
        <li class="hassubs">
          <a href="#">
            Menu Item
            <i class="fas fa-chevron-right"></i>
          </a>
          <ul>
            <li>
              <a href="#">
                Menu Item
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Menu Item
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Menu Item
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Menu Item
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            Menu Item
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Menu Item
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Menu Item
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-seedling"></i> Agriculture & Food
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-headphones"></i> Automobile & Machinery
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="far fa-smile-beam"></i> Gifts & Toys
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-gifts"></i> Electrical & Electronics
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-futbol"></i> Beauty Products
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-user-tie"></i> Other Products
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-users"></i> Business Services
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CategoryMenu"
};
</script>

<style lang="css" scoped>
i {
  font-weight: bold;
  color: #000000;
  -webkit-font-smoothing: antialiased;
  -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
}
</style>
