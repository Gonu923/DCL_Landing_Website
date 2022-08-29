<template>
    <swiper :options="this.swiperOption"
     :slides-per-view="7" 
     :space-between="50"
     :autoplay=' {
        "delay": 2500,
        "disableOnInteraction": false
    }' 
     :loop="true"
     :breakpoints="swiperOptions.breakpoints"
     @swiper="onSwiper" 
     @slideChange="onSlideChange"
        >
        <swiper-slide>
            <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
             <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
             <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
             <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
             <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
             <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
             <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
             <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
             <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
             <div class="item ">
                <div class="card border-0 " style="width: 70%; margin: auto;">
                    <img style="border-radius: 50%; width: 100px; height:100px"
                        src="../../assets/images/cloth_store.png" alt="" class="card-img-top mx-auto">
                    <div class="card-body p-0">
                        <div class="card-title text-center">
                            <p class="text-dark mb-0">Cloth Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
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
         slidesPerView: 3,
         spaceBetween: 10     
      },          
      770: {       
         slidesPerView: 5,       
         spaceBetween: 50     
      },   
  
      920: {       
         slidesPerView: 7,       
         spaceBetween: 30     
      } 
   }   
    },
    autoplay:{
        delay:1000,

    }






        };
    },
    
};
</script>


    