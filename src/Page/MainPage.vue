<template>
  <nav-bar />
  <search-bar />
  <country-list />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'
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
