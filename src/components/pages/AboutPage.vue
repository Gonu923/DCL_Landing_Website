<template>
  <AboutSlider></AboutSlider>
  <AboutHero></AboutHero>
  <AboutMission></AboutMission>
  <AboutVission></AboutVission>
  <AboutValue></AboutValue>
  <OurHistory></OurHistory>
</template>
<script>
import AboutSlider from '../includes/about/AboutSlider.vue';
import AboutHero from '../includes/about/AboutHero.vue';
import AboutMission from '../includes/about/AboutMission.vue';
import AboutVission from '../includes/about/AboutVission.vue';
import AboutValue from '../includes/about/AboutValue.vue';
import OurHistory from '../includes/about/OurHistory.vue';
export default {
  name:"AboutPage",
  components:{
    AboutSlider,
    AboutHero,
    AboutMission,
    AboutVission,
    AboutValue,
    OurHistory
}
  
}
</script>
<style>
  
</style>