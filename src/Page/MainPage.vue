<template>
  <header-bar />
  <nav-bar />
  <country-list />
</template>

<script setup>
import HeaderBar from '../components/HeaderBar.vue'
import NavBar from '../components/NavBar.vue'
import countryList from '../components/countryList.vue'
</script>

<style lang="scss">
.main {
  height: 100vh;
}

.main.ligth-theme {
  background-color: $color-lotion;
}

.main.dark-theme {
  background-color: $color-charleston-green;
}
</style>
