<template>
    <div>
        <NavBar></NavBar>
      <VendorReg></VendorReg>
      <FooterBar></FooterBar>
    </div>
</template>
<script>
import VendorReg from '../includes/registrations/VendorReg.vue';
import NavBar from '../includes/NavBar.vue';
import FooterBar from '../includes/FooterBar.vue';
export default {
    components: { VendorReg, NavBar, FooterBar }
}
</script>
<style>
    
</style>