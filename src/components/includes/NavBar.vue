<script>
import OwlCarusel from "./OwlCarusel.vue";

export default {
  name: "NavBar",
  components: { OwlCarusel },
};
</script>
    <template>
  <div>
    <!-- Status Bar Section Start -->
    <div class="container-fluid">
      <div class="row bg-danger py-2">
        <div
          class="col-md-6 col-12 d-flex justify-content-start status-bar-left"
        >
          <li>Contact</li>
          <li><i class="fas fa-envelope"></i></li>
          <li>dhaka.choice@gmail.com</li>
        </div>
        <div
          class="col-md-6 col-12 d-flex justify-content-end status-bar-right"
        >
          <p class="follow_us">Follow Us</p>
          <a class="link" to=""><i class="fab fa-facebook"></i></a>
          <a class="link" to=""><i class="fab fa-twitter"></i></a>
          <a class="link" to=""><i class="fab fa-instagram"></i></a>
          <a class="link" to=""><i class="fab fa-youtube"></i></a>
          <a class="link" to=""><i class="fab fa-skype"></i></a>
          <a class="link" to=""><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    <!-- Status Bar Section End -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <img
            width="160"
            height="120"
            src="../../assets/images/logo.png"
            alt=""
          />
        </div>
        <div class="col-md-10 py-2">
          <OwlCarusel />
        </div>
      </div>
    </div>

    <!-- Navbar Section Start  -->
    <nav class="navbar navbar-expand-lg nav-bg-color">
      <div class="container-fluid">
        <button
          class="navbar-toggler ml-auto custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-start"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mx-4 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link txt_color" aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link txt_color " aria-current="page" to="/about-us">About Us</a> -->
              <router-link
                to="/about-us"
                class="nav-link txt_color"
                aria-current="page"
                >About Us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/our-services"
                class="nav-link txt_color"
                aria-current="page"
                >Services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/message"
                class="nav-link txt_color"
                aria-current="page"
                >Message</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/Partner"
                class="nav-link txt_color"
                aria-current="page"
                >Partner</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link txt_color dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Join Us
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link
                    to="/vendor-registration"
                    class="nav-link txt_color"
                    aria-current="page"
                    >Retailer & Wholesaler Registration</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/#"
                    class="nav-link txt_color"
                    aria-current="page"
                    >Direct Retailer Service Form</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link
                to="/EnterPrise"
                class="nav-link txt_color"
                aria-current="page"
                >Enterprises</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/media"
                class="nav-link txt_color"
                aria-current="page"
                >Media</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link txt_color btn-contact"
                to="/contact-us"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <router-link
                class="nav-link txt_color dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select service
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item" to="#">Action</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="#"
                    >Another action</router-link
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <router-link class="dropdown-item" to="#"
                    >Something else here</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex src_bar">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search Service"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!-- Navbar Section End -->
  </div>
</template>
    <style>
div.fixed {
  width: 10%;
  height: 100px;
  background-color: red;
  border: 3px solid #73ad21;
}

.a {
  padding-left: 10px;
  float: right;
  width: 90%;
  height: auto;
  border: 3px solid black;
}

.src_bar {
  width: 18%;
}
</style>