<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  name: 'app',
  components: {HeaderBar} 
}  
</script>

<style src="./assets/style.css"></style>

