<template>
  <footer id="footer">
    <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h4>Subscribe Our News Letter</h4>
            <form action="" method="post">
              <input type="email" name="email" /><input
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Dhaka Choice Ltd</h3>
            <p>
              House#254, Road#03, <br />
              Ground Floor, Baridhara<br />
              DOHS, Dhaka-1212 <br /><br />
              <strong>Phone:</strong>
              +8801404411444<br />
              <strong>Email:</strong> info.dhakachoice@gmail.com
              <br />
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Navigation</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="about-us">About us</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="our-services">Services</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="#">Terms of service</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="#">Privacy policy</router-link>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="partner">Partner</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="message">Message</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="enterprise">Enterprise</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="media">Media</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="vendor-registration">Join Us</router-link>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div class="social-links mt-3">
              <router-link to="#" class="twitter"
                ><i class="fab fa-twitter"></i
              ></router-link>
              <router-link to="#" class="facebook"
                ><i class="fab fa-facebook"></i
              ></router-link>
              <router-link to="#" class="instagram"
                ><i class="fab fa-instagram"></i
              ></router-link>
              <router-link to="#" class="google-plus"
                ><i class="fab fa-skype"></i
              ></router-link>
              <router-link to="#" class="linkedin"
                ><i class="fab fa-linkedin"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="copyright">
        &copy; Copyright <strong><span>Dhaka Choice Ltd</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        Designed by
        <router-link to="https://flytesolutions.com/" target="_blank"
          >Flyte Solutions Ltd</router-link
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterBar",
  components: {},
};
</script>
<style >
#footer {
  background: #fff;
  padding: 0 0 30px 0;
  color: #47536e;
  font-size: 14px;
  background: #eff2f8;
}

#footer .footer-newsletter {
  padding: 50px 0;
  background: #eff2f8;
  text-align: center;
  font-size: 15px;
}

#footer .footer-newsletter h4 {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  color: #47536e;
}

#footer .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
}

#footer .footer-newsletter form input[type="email"] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}

#footer .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  background: rgb(255, 166, 0);
  color: #fff;
  transition: 0.3s;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#footer .footer-newsletter form input[type="submit"]:hover {
  background: rgb(255, 111, 0);
}

#footer .footer-top {
  padding: 60px 0 30px 0;
  background: #fff;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact h3 {
  font-size: 22px;
  margin: 0 0 30px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
  color: #413f3d;
}

#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  color: #212229;
}

#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  color: black;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #9fb2d8;
  font-size: 18px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #8a8c95;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

#footer .footer-top .footer-links ul a:hover {
  text-decoration: none;
  color: #5777ba;
}

#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  background: orange;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
  background: #27282c;
  color: #fff;
  text-decoration: none;
}

#footer .copyright {
  text-align: center;
  float: left;
  color: #47536e;
}

#footer .credits {
  float: right;
  text-align: center;
  font-size: 13px;
  color: #47536e;
}

@media (max-width: 768px) {
  #footer .copyright,
  #footer .credits {
    float: none;
    text-align: center;
    padding: 5px 0;
  }
}
</style>