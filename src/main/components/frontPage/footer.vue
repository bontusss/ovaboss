<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 footer_col">
          <div class="footer_column footer_contact">
            <div class="logo_container">
              <div class="logo">
                <a href="#">
                  <img
                    :src="`${baseUrl}/images/Ovaboss_white_logo.png`"
                    alt="Ovaboss Logo"
                  />
                </a>
              </div>
            </div>
            <div class="footer_title">Got Question? Call Us 24/7</div>
            <div class="footer_phone">+38 068 005 3570</div>
            <div class="footer_contact_text">
              <p>17 Princess Road, London</p>
              <p>Grester London NW18JR, UK</p>
            </div>
            <div class="footer_social">
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-2 offset-lg-2">
          <div class="footer_column">
            <div class="footer_title">Customer Care</div>
            <ul class="footer_list">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">How To Use The Platfom</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Latest News And Updates</a>
              </li>
              <li>
                <a href="#">Learning Center</a>
              </li>
              <li>
                <a href="#">Submit Query</a>
              </li>
              <li>
                <a href="#">Report Abuse</a>
              </li>
            </ul>
            <!-- <div class="footer_subtitle">Gadgets</div>
                        <ul class="footer_list">
                          <li>
                            <a href="#">Car Electronics</a>
                          </li>
                        </ul> -->
          </div>
        </div>

        <div class="col-lg-2">
          <div class="footer_column">
            <div class="footer_title">Our Company</div>
            <ul class="footer_list  ">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Become a FAcilitator</a>
              </li>
              <li>
                <a href="#">Become a Center Representative</a>
              </li>
              <li>
                <a href="#">Partner With Us</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- <div class="col-lg-2">
          <div class="footer_column">
            <div class="footer_title">EARN ON OVABOSS</div>
            <ul class="footer_list">
              <li>
                <a href="#">SignUp and Earn</a>
              </li>
              <li>
                <a href="#">Setup your Personal Center</a>
              </li>
              <li>
                <a href="#">Setup your Business Center</a>
              </li>
              <li>
                <a href="#">Buy and Earn</a>
              </li>
              <li>
                <a href="#">Sell and Earn</a>
              </li>
              <li>
                <a href="#">Become a Center Representative</a>
              </li>
              <li>
                <a href="#">Partner with Us</a>
              </li>
              <li>
                <a href="#">Invite A Friend</a>
              </li>
            </ul>
          </div>
        </div> -->
        <!--  -->
        <div class="col-lg-2">
          <div class="footer_column">
            <div class="footer_title">OVABOSS COUNTRY LOCATOR</div>
            <ul class="footer_list">
              <li>
                <a href="#">Africa</a>
              </li>
              <li>
                <a href="#">Asia</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
              <li>
                <a href="#">Europe</a>
              </li>
              <li>
                <a href="#">North America</a>
              </li>
              <li>
                <a href="#">South America</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => {
    return {
      baseUrl: location.origin
    };
  }
};
</script>

<style lang="css">
a {
  color: #828282 !important;
}
</style>
