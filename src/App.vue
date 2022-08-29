<template>
  <NavBar></NavBar>
  <router-view />
  <FooterBar></FooterBar>
</template>

<script>
import NavBar from './components/includes/NavBar.vue';
import FooterBar from './components/includes/FooterBar.vue'


export default {
    name: "App",
    components: { NavBar,FooterBar }
};
</script>

<style>
  /* @import './assets/css/style.css'; */
  
  @import'~bootstrap/dist/css/bootstrap.css'
</style>


