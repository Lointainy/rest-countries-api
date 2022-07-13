<template>
  <header-bar />
  <nav-bar />
  <country-list />
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'

import HeaderBar from '../components/HeaderBar.vue'
import NavBar from '../components/NavBar.vue'
import CountryList from '../components/CountryList.vue'

const countries = ref([])

//GET api data
onMounted(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => (countries.value = data))
    .catch((err) => console.log(err.message))
})

provide(/* key */ 'countryList', /* value */ countries)
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
