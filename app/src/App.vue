<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <div>
    <Nav />
    <Menu />
  </div>
</template>
<script setup>
import Menu from '@/components/Menu.vue'
import Nav from '@/components/Nav.vue'
</script>
<style>
@import './assets/style/app.css';
</style>
