<template>
 <NavBar />
 <HeroSection></HeroSection>
 <AppFeature></AppFeature>
 <GallerySection></GallerySection>
 <FooterBar></FooterBar>
</template>

<script>
import NavBar from './includes/NavBar.vue';
import FooterBar from './includes/FooterBar.vue';
import HeroSection from './includes/home/HeroSection.vue';
import AppFeature from './includes/home/AppFeature.vue';
import GallerySection from './includes/home/GallerySection.vue';
export default{
  name: "HomePart",
  
  components:{
    NavBar,
    FooterBar,
    HeroSection,
    AppFeature,
    GallerySection
},
}
</script>

<style>

  @import '../assets/css/style.css';
</style>


