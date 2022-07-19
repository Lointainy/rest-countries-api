<template>
  <header-bar />
  <router-view />
  <!-- <main-page /> -->
</template>

<script setup>
import HeaderBar from './components/HeaderBar.vue'

// import { ref, provide } from 'vue'

// const countries = ref([])
// const country = ref(null)

// const getCountries = () => {
//   fetch('https://restcountries.com/v3.1/all')
//     .then((res) => res.json())
//     .then((data) => (countries.value = data))
//     .catch((err) => console.log(err.message))
// }

// const getCountry = async (cca3) => {
//   await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
//     .then((res) => res.json())
//     .then((data) => (country.value = data[0]))
//     .catch((err) => console.log(err.message))
// }

// const handleGetCountry = async (cca3) => {
//   await getCountry(cca3)
// }

// const handleGetCountries = () => {
//   getCountries()
// }

// provide('countries', countries)
// provide('handleGetCountries', handleGetCountries)

// provide('country', country)
// provide('handleGetCountry', handleGetCountry)
</script>
