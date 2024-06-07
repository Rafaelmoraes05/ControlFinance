<script>
import { /*RouterLink*/ RouterView } from 'vue-router'
//import BaseSpinner from './components/BaseSpinner.vue'
//import HomeLogin from './components/HomeLogin.vue'

export default{
  components:{
    //HomeLogin
    RouterView
  },
  mounted() {
    console.log(this.$firebase)
  },
}
</script>

<template>
  <v-app class="base-app">
    <RouterView/>
  </v-app>
</template>

<style scoped lang="scss">
.base-app{
  background-color: var(--darker);
}
</style>
