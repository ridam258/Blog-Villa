<template>
<div style="height:18vh;" class="upper"></div>
    <div class="main">
      <the-nav></the-nav>
    <router-view></router-view>
    </div>
  
</template>

<script>
import TheNav from './components/TheNav.vue';
export default {
    components:{
        TheNav
    }
}
</script>

<style scoped>
.upper{
    background-color: #FEEEDC;  
    border-bottom-left-radius: 60%;
    border-bottom-right-radius: 60%;
    transform:scale(3);
    position: fixed;
    width: 100%;
}
.main{
  position: relative;
  z-index: 1;
}
</style>
