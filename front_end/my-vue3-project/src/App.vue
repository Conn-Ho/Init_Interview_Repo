<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Home from '@/view/home.vue'
import Login from "@/view/login.vue";
</script>

<template>
  <div id="app">
    <Login></Login>
<!--    <router-view></router-view>-->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
