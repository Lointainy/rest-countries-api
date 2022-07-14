<template>
  <header-bar />

  <nav-bar :search="search" :filter="filter" @update:search="(v) => (search = v)" @update:filter="(v) => (filter = v)">
    <template #page-pagination>
      <page-pagination />
    </template>
  </nav-bar>

  <country-list />
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'

import HeaderBar from '../components/HeaderBar.vue'
import NavBar from '../components/NavBar.vue'
import CountryList from '../components/CountryList.vue'
import PagePagination from '../components/PagePagination.vue'

const search = ref('')
const filter = ref('')

//GET api data

const countries = ref([])

onMounted(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => (countries.value = data))
    .catch((err) => console.log(err.message))
})

provide('countryList', countries)
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
