<template>
  <div class="country-list">
    <country-card />
  </div>
</template>
<script setup>
import CountryCard from './CountryCard.vue'
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
