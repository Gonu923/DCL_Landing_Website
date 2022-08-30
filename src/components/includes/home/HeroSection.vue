<template>
    <!-- ======= Hero Section ======= -->
  <section class="d-flex align-items-center hero">
    <div class="container my-5">
      <div class="row hero_container"  >
        <div class="col-lg-4 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
          <div>
            <h1>Install App & Enjoy the Big Discount</h1>
            <p>
              B2C is a kind of product purchasing apps; Customers will be able to purchase products using their apps by connecting directly to the shopper's apps. A customer can avail discounts by purchasing products from any retail or wholesale store using this app. A shopkeeper can purchase products from any retail store and get discounts and reward points, Such as: grocery store, drug store, clothing store, cosmetic store, food store, restaurant, etc.
            </p>
            <a href="#" class="download-btn"><i class="fab fa-google-play"></i> Google Play</a>
            <a href="#" class="download-btn"><i class="fab fa-app-store"></i> App Store</a>
          </div>
        </div>
        <div class="col-lg-8 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
          <img src="../../../assets/images/Hero_Final.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>

  </section>
</template>
<script>
export default {
    name:"HeroSection",
    components: {

    }
    
    
}
</script>
<style>

.hero {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.hero_container{
  margin-right: -147px;
      margin-left: -78px;
}

.hero::before {
  content: "";
  position: absolute;
  right: -100%;
  top: 20%;
  width: 250%;
  height: 200%;
  z-index: -1;
  background-color: #e8ecf5;
  transform: skewY(135deg);
}

.hero h1 {
  margin: 0 0 10px 0;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  text-align: left;
  color: #FD6501;
  font-family: "Poppins", sans-serif;
}

.hero p {
  font-family: 'Poppins', sans-serif;
  color: #302d2d;
  margin-bottom: 50px;
  font-size: 20px;
  text-align: left;
}

.hero .download-btn {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 15px;
  display: inline-block;
  padding: 8px 24px 10px 46px;
  border-radius: 3px;
  transition: 0.5s;
  color: #fff;
  background: #FD6501;
  position: relative;
}

.hero .download-btn:hover {
  background: orangered;
}

.hero .download-btn i {
  font-size: 20px;
  position: absolute;
  left: 18px;
  top: 8.5px;
}

.hero .download-btn+.download-btn {
  margin-left: 20px;
}

@media (max-width: 991px) {
  .hero_container{
    margin-right: 0;
        margin-left: 0;
  }
  .hero {
    text-align: center;
  }

  .hero .download-btn+.download-btn {
    margin: 0 10px;
  }

  .hero .hero-img {
    text-align: center;
  }

  .hero .hero-img img {
    width: 60%;
  }
}

@media (max-width: 768px) {
  .hero_container{
    margin-right: 0;
        margin-left: 0;
  }
  .hero h1 {
    font-size: 28px;
    line-height: 36px;
  }

  .hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }

  .hero .hero-img img {
    width: 70%;
  }
}

@media (max-width: 575px) {
  .hero .hero-img img {
    width: 80%;
  }
}

    
</style>