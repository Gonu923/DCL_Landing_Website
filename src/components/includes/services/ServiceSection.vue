<template>
     <section id="features" class="features">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
          <p>অ্যাপটি ইনস্টল করুন এবং সর্বোচ্চ ছাড়ে আপনার প্রয়োজনীয় পণ্যটি কিনুন। এছাড়াও, আপনি আমাদের অ্যাপের মাধ্যমে সব ধরনের হোম পরিষেবা পাবেন।</p>
          
        </div>

        <div class="row no-gutters">
          <div class="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
            <div class="content d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-md-5 f-box icon-box" data-aos="fade-up">
                  <i class="bx bxl-shopify"></i>
                  <h4>E-commerce</h4>
                  <p>You can get attractive discounts by ordering any product</p>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-5 f-box icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i class="bx bxs-shopping-bags"></i>
                  <h4>Buy and Selling</h4>
                  <p>You can sell or buy your products at home with just one app</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5 f-box icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i class="bx bxs-home-circle"></i>
                  <h4>Home Service</h4>
                  <p>You can get any of your home services with the lowest fee through our app</p>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-5 f-box icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i class="bx bx-cycling"></i>
                  <h4>Ride Share</h4>
                  <p>Save time and reach your destination on time at an affordable price</p>
                </div>
                
              </div>
              <div class="row">
                <div class="col-md-5 f-box icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i class="bx bx-plus-medical"></i>
                  <h4>Doctor Services</h4>
                  <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                </div>
                 <div class="col-md-1"></div>
                <div class="col-md-5 f-box icon-box" data-aos="fade-up" data-aos-delay="500">
                  <i class="bx bx-food-menu"></i>
                  <h4>Food</h4>
                  <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                </div>
              </div>
            </div>
          </div>
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="../../../assets/images/mobile_font.png" class="img-fluid" alt="">
          </div>
        </div>

      </div>
    </section>
</template>
<script>
export default {
    name: "ServiceSection",
    components: {
        
    }
}
</script>
<style>
    /*--------------------------------------------------------------
    # Sections General
    --------------------------------------------------------------*/
    section {
      padding: 60px 0;
      overflow: hidden;
    }
    
    .section-bg {
      background-color: #f2f5fa;
    }
    
    .section-title {
      text-align: center;
      padding-bottom: 30px;
    }
    
    .section-title h2 {
      font-size: 38px;
      font-weight: 600;
      margin-bottom: 20px;
      padding-bottom: 0;
      color: rgb(255, 132, 0);
      font-family: "Poppins", sans-serif;
    }
    
    .section-title p {
      margin-bottom: 0;
      font-family: "Raleway", sans-serif;
    }
    
        .features{
      background-color:#9879db54 ;
    }
    .features .content {
      padding: 30px 0;
      margin-right: 3px;
      
    }
    .icon-box{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      padding-top: 10px;
    }
    .icon-box:hover{
      box-shadow: 0 8px 26px 0 rgba(0,0,0,0.5);
    }
    
    .features .content .icon-box {
      margin-top: 25px;
    }
    
    .features .content .icon-box h4 {
      font-size: 20px;
      font-weight: 700;
      margin: 5px 0 10px 60px;
    }
    
    .features .content .icon-box i {
      font-size: 48px;
      float: left;
      color: rgb(255, 132, 0);
    }
    
    .features .content .icon-box p {
      font-size: 15px;
      color: #0f1115;
      margin-left: 60px;
      text-align: justify;
    }
    
    @media (max-width: 991px) {
      .features .image {
        text-align: center;
      }
    
      .features .image img {
        max-width: 80%;
      }
    }
    
    @media (max-width: 667px) {
      .features .image img {
        max-width: 100%;
      }
      .icon-box{
        width:auto ;
      }
    }
    
    </style>