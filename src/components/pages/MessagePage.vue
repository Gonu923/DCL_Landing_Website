<template>
    <div>
       <ManagingDirector></ManagingDirector>
       <div class="line"></div>
       <DirectorOne></DirectorOne>
       <div class="line"></div>
       <DirectorTow></DirectorTow>
       <div class="line"></div>
       <ProjectManager></ProjectManager>
    </div>
</template>
<script>
import ManagingDirector from '../includes/massages/ManagingDirector.vue';
import DirectorOne from '../includes/massages/DirectorOne.vue';
import DirectorTow from '../includes/massages/DirectorTow.vue';
import ProjectManager from '../includes/massages/ProjectManager.vue';
export default {
    name:"MessagePage",
    components:{ ManagingDirector, DirectorOne, DirectorTow, ProjectManager },
    
}
</script>
<style>
   .line{
    border: 1px solid #101010;
    width: 80%;
    margin: auto;
   } 
   .line:hover{
    color: coral;
   }
</style>