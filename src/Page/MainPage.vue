<template>
  <nav-bar :search="search" :filter="filter" @update:search="(v) => (search = v)" @update:filter="(v) => (filter = v)">
    <template #page-pagination>
      <page-pagination :current="currentPage" :total="lastPage()" @on-page-change="(v) => (currentPage = v)" />
    </template>
  </nav-bar>

  <country-list>
    <template #card="{ country }">
      <country-card
        :name="country.name.common"
        :flagImg="country.flags.png"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
        :code="country.cca3"
      />
    </template>
  </country-list>
</template>

<script setup>
import { ref, onBeforeMount, provide, computed, watch } from 'vue'

import NavBar from '../components/NavBar.vue'
import CountryList from '../components/CountryList.vue'
import PagePagination from '../components/PagePagination.vue'
import CountryCard from '../components/CountryCard.vue'

import { useStore } from '@/store/countries.js'

const store = useStore()

const countries = computed(() => store.countries)

onBeforeMount(() => {
  store.getCountriesFromApi()
})

/* Pagination */

const currentPage = ref(1)
const itemsPerPage = ref(8)

const lastPage = () => Math.ceil(filteredCounties().value.length / itemsPerPage.value)
const end = computed(() => currentPage.value * itemsPerPage.value)
const start = computed(() => end.value - itemsPerPage.value)

/* search, filter */

const search = ref('')
const filter = ref('')

const filteredCounties = () =>
  computed(() =>
    countries.value.filter(
      (country) =>
        country.name.common.toLowerCase().includes(search.value.toLowerCase()) &&
        country.region.toLowerCase().includes(filter.value.toLowerCase())
    )
  )

watch(search, () => (currentPage.value = 1))
watch(filter, () => (currentPage.value = 1))

const filteredList = () => computed(() => filteredCounties().value.slice(start.value, end.value))

provide('countryList', filteredList())
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
