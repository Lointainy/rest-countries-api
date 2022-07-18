<template>
  <ul class="country-list">
    <template v-if="countryList.length">
      <slot v-for="country in countryList" :key="country.name.common" name="card" :country="country" />
    </template>
  </ul>
</template>

<script setup>
import { inject } from 'vue'

const countryList = inject('countryList')
</script>

<style lang="scss">
.country-list {
  @include container;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4rem 0;
  gap: 4.7rem;
}
</style>
