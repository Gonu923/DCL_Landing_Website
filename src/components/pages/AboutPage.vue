<template>
  <AboutSlider></AboutSlider>
  <AboutHero></AboutHero>
  <WhatweAre></WhatweAre>
  <WhatweDo></WhatweDo>
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
import WhatweAre from '../includes/about/WhatweAre.vue';
import WhatweDo from '../includes/about/WhatweDo.vue';
export default {
  name:"AboutPage",
  components:{
    AboutSlider,
    AboutHero,
    AboutMission,
    AboutVission,
    AboutValue,
    OurHistory,
    WhatweAre,
    WhatweDo
}
  
}
</script>
<style>
  
</style>