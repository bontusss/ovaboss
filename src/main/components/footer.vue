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
            </ul>-->
          </div>
        </div>

        <div class="col-lg-2">
          <div class="footer_column">
            <div class="footer_title">Our Company</div>
            <ul class="footer_list">
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
        </div>-->
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

.footer {
  padding-top: 52px;
  padding-bottom: 40px;
  background: #16161a;
}

.footer .logo_container {
  height: auto;
  margin-bottom: 18px;
  margin-top: -10px;
}

.footer .logo {
  top: auto;
  -webkit-transform: none;
  transform: none;
}

.footer .logo a {
  color: #ffd700;
}

.footer_title {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}

.footer_phone {
  font-size: 18px;
  font-weight: 500;
  color: #ffd700;
  margin-top: 13px;
}

.footer_contact_text {
  margin-top: 10px;
}

.footer_contact_text p {
  margin-bottom: 0px;
}

.footer_social {
  margin-top: 27px;
}

.footer_social ul li {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #16161a;
  border-radius: 50%;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  margin-right: 16px;
  text-align: center;
}

.footer_social ul li i {
  color: #eee;
  line-height: 30px;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
}

.footer_social ul li:hover i {
  color: #ffd700;
}

.footer_subtitle {
  font-size: 12px;
  color: #ededed;
}

.footer_column ul:first-of-type {
  margin-top: 21px;
}

.footer_column ul {
  margin-top: 7px;
}

.footer_list li {
  margin-bottom: 6px;
}

.footer_list li a {
  font-size: 12px;
  font-weight: 500;
  color: #eee;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
}

.footer_list li a:hover {
  color: #ffd700;
}

.footer_list_2 {
  margin-top: 42px !important;
}

.copyright {
  width: 100%;
  background: #fafafa;
}

.copyright_container {
  width: 100%;
  height: 56px;
}

.copyright_content {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}

.copyright_content span {
  font-weight: 500;
}

.logos {
}

.logos_list li {
  display: inline-block;
  margin-right: 16px;
}

.logos_list li:last-child {
  margin-right: 0px;
}
</style>
