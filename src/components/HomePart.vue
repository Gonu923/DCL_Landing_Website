<template>
  <div>
    <HeroSection></HeroSection>
    <AppFeature></AppFeature>
    <GallerySection></GallerySection>
    <ContactSection></ContactSection>
  </div>
</template>
<script>
import HeroSection from './includes/home/HeroSection.vue';
import GallerySection from './includes/home/GallerySection.vue';
import AppFeature from './includes/home/AppFeature.vue';
import ContactSection from './includes/home/ContactSection.vue';
export default {
    components: { HeroSection, GallerySection, AppFeature, ContactSection }
}
</script>
<style>
  @import '../assets/css/style.css';
</style>