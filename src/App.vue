<script>
import { RouterLink, RouterView } from 'vue-router'
import BaseSpinner from './components/BaseSpinner.vue'
import HomeLogin from './components/HomeLogin.vue'

export default{
  components:{
    HomeLogin
  },
  mounted() {
    console.log(this.$firebase)
  },
}
</script>

<template>
  <v-app class="base-app">
    <HomeLogin />
    <!-- <div class="flexbox"> -->
      <!-- <BaseSpinner/> -->
    <!-- </div> -->
  </v-app>
</template>

<style scoped lang="scss">
@import '../src/assets/scss/variables';

.base-app{
  background-color: $darker;
}
.flexbox{
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  z-index: 100;
}
</style>
