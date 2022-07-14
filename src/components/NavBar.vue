<template>
  <nav class="navbar">
    <label for="" class="search">
      <input v-model="searchValue" type="search" name="" id="" class="search__input" placeholder="search coutry" />
      <span class="search__icon"><font-icon icon="search"></font-icon></span>
      <button v-if="searchValue != 0" @click="searchValue = ''" class="search__btn">
        <font-icon icon="plus"></font-icon>
      </button>
    </label>
    <slot name="page-pagination"></slot>
    <div class="filter">
      <div :class="[showFilters ? 'active' : '']" class="filter__icon">
        <font-icon icon="chevron-down"></font-icon>
      </div>
      <select @click="toggleShow" v-model="filterValue" name="" id="" class="filter__select">
        <option class="none" value="" disabled selected>Filter by Region</option>
        <option v-if="filterValue !== ''" @click="filterValue = ''" value="" class="filter__option">none</option>
        <option v-for="filter in filters" :key="filter.name" :value="filter.name" class="filter__option">
          {{ filter.name }}
        </option>
      </select>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue'

const props = defineProps({
  search: {
    type: String,
    default: '',
  },
  filter: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:search', 'update:filter'])

const filters = ref([
  { name: 'Africa', status: 'false' },
  { name: 'Americas', status: 'false' },
  { name: 'Asia', status: 'false' },
  { name: 'Europe', status: 'false' },
  { name: 'Oceania', status: 'false' },
])

const searchValue = computed({
  get: () => props.search,
  set: (value) => emit('update:search', value),
})

const filterValue = computed({
  get: () => props.filter,
  set: (value) => emit('update:filter', value),
})

const showFilters = ref(false)
const toggleShow = () => {
  showFilters.value = !showFilters.value
}
</script>

<style lang="scss">
.navbar {
  @include container;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
}

.search {
  position: relative;
  width: 30rem;
  height: 3.5rem;

  @include media(md, mx) {
    width: 100%;
  }

  &__input,
  &__icon {
    position: absolute;
  }

  &__input {
    width: 100%;
    height: 100%;
    padding: 0 4.7rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--font-color);
    background: var(--nav-bar-color);
    border-radius: $border-radius;
    box-shadow: 0 2px 9px var(--box-shadow-color);
    transition: 0.1s;

    &:focus {
      outline: 0.125rem solid var(--font-color);
    }
  }

  &__icon {
    position: absolute;
    top: 1.2rem;
    left: 2rem;
    font-size: 0.875rem;
    color: var(--font-color);
  }

  &__btn {
    position: absolute;
    top: 1rem;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    color: var(--font-color);
    background-color: var(--background-color);
    border-radius: 50%;
    transform: rotate(45deg);
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: var(--background-color);
      background-color: var(--font-color);
    }
  }
}

.filter {
  position: relative;
  width: 12.5rem;

  @include media(md, mx) {
    width: 100%;
    margin-top: 2.5rem;
  }

  &__icon {
    content: '';
    position: absolute;
    top: 1.1rem;
    right: 1.5rem;
    color: var(--font-color);
    transition: all 0.5s;
  }

  &__icon.active {
    transform: rotate(180deg);
  }

  &__select {
    width: 100%;
    height: 3.5rem;
    padding: 1.125rem 1.5rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--font-color);
    background: var(--nav-bar-color);
    border-radius: $border-radius;
    box-shadow: 0 2px 9px var(--box-shadow-color);
    cursor: pointer;
  }
}
</style>
