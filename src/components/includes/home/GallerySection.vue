<template >
  <!-- ======= Gallery Section ======= -->
  <section id="gallery" class="gallery">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Gallery</h2>
        <p>All the benefits that you will get with the help of Dhaka Choice Ltd app. Some of its features and samples of
          our services.</p>
      </div>

    </div>

    <div class="container-fluid" data-aos="fade-up">
      <!-- <div class="gallery-slider swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../assets/images/gallery/1.png" class="img-fluid" alt=""></div>
          <div class="swiper-slide"><img src="../../../assets/images/gallery/2.png"
              class="img-fluid" alt=""></div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/3.png"><img
                src="../../../assets/images/gallery/3.png" class="img-fluid" alt=""></a></div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/4.png"
              class="gallery-lightbox" data-gall="gallery-carousel"><img
                src="../../../assets/images/gallery/4.png" class="img-fluid" alt=""></a></div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/5.png"
              class="gallery-lightbox" data-gall="gallery-carousel"><img
                src="../../../assets/images/gallery/5.png" class="img-fluid" alt=""></a></div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/6.png"
              class="gallery-lightbox" data-gall="gallery-carousel"><img
                src="../../../assets/images/gallery/6.png" class="img-fluid" alt=""></a></div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/7.png" class="gallery-lightbox"
              data-gall="gallery-carousel"><img src="../../../assets/images/gallery/7.png" class="img-fluid"
                alt=""></a></div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/8.png"
              class="gallery-lightbox" data-gall="gallery-carousel"><img
                src="../../../assets/images/gallery/8.png" class="img-fluid" alt=""></a></div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/9.png"
              class="gallery-lightbox" data-gall="gallery-carousel"><img
                src="../../../assets/images/gallery/9.png" class="img-fluid" alt=""></a></div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/10.png"
              class="gallery-lightbox" data-gall="gallery-carousel"><img
                src="../../../assets/images/gallery/10.png" class="img-fluid" alt=""></a>
          </div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/11.png"
              class="gallery-lightbox" data-gall="gallery-carousel"><img
                src="../../../assets/images/gallery/11.png" class="img-fluid" alt=""></a></div>
          <div class="swiper-slide"><a href="../../../assets/images/gallery/12.png"
              class="gallery-lightbox" data-gall="gallery-carousel"><img
                src="../../../assets/images/gallery/12.png" class="img-fluid" alt=""></a></div>
        </div>
        <div class="swiper-pagination"></div>
      </div> -->

      <div class="swiper-wrapper">
        <swiper :slides-per-view="7" :space-between="50"  :autoplay=' {
        "delay": 2500,
        "disableOnInteraction": false
    }' 
     :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide>
            <div class="swiper-slide"><a href="../../../assets/images/gallery/3.png"><img
                  src="../../../assets/images/gallery/3.png" class="img-fluid" alt=""></a></div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide"><a href="../../../assets/images/gallery/3.png"><img
                  src="../../../assets/images/gallery/3.png" class="img-fluid" alt=""></a></div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide"><a href="../../../assets/images/gallery/3.png"><img
                  src="../../../assets/images/gallery/3.png" class="img-fluid" alt=""></a></div>

          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide"><a href="../../../assets/images/gallery/3.png"><img
                  src="../../../assets/images/gallery/3.png" class="img-fluid" alt=""></a></div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide"><a href="../../../assets/images/gallery/3.png"><img
                  src="../../../assets/images/gallery/3.png" class="img-fluid" alt=""></a></div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide"><a href="../../../assets/images/gallery/3.png"><img
                  src="../../../assets/images/gallery/3.png" class="img-fluid" alt=""></a></div>

          </swiper-slide>
          <swiper-slide>
            <div class="swiper-slide"><a href="../../../assets/images/gallery/3.png"><img
                  src="../../../assets/images/gallery/3.png" class="img-fluid" alt=""></a></div>

          </swiper-slide>

        </swiper>
      </div>

    </div>
  </section><!-- End Gallery Section -->
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

export default {

  name: "gallerySection",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
       swiperOptions: {
          breakpoints: {       
      320: {       
         slidesPerView: 1,
         spaceBetween: 10     
      },          
      770: {       
         slidesPerView: 3,       
         spaceBetween: 50     
      },   
  
      920: {       
         slidesPerView: 5,       
         spaceBetween: 30     
      } 
   }   
    },
    autoplay:{
        delay:1000,

    }





    };
  },

}
</script>
<style>
.gallery {
  overflow: hidden;
}


.gallery .swiper-slide {
  transition: 0.3s;
}

.gallery .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.gallery .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid orange;
}

.gallery .swiper-pagination .swiper-pagination-bullet-active {
  background-color: orange;
}

.gallery .swiper-slide-active {
  text-align: center;
}

.section-title p {

  font-size: 24px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: #27282c;
}

@media (min-width: 992px) {
  .gallery .swiper-wrapper {
    padding: 40px 0;
  }

  .gallery .swiper-slide-active {
    border: 5px solid orange;
    padding: 4px;
    background: #fff;
    z-index: 1;
    transform: scale(1.2);
    margin-top: 10px;
    border-radius: 5px;
  }
}
</style>