<template>
  <div class="pagination">
    <button @click="handlePrevClick" :disabled="current <= 1" class="pagination__btn">
      <font-icon icon="chevron-left"></font-icon>
    </button>

    <button @click="handlePageChange(1)" class="pagination__btn">1</button>

    <button class="pagination__btn">{{ current }}</button>

    <button @click="handlePageChange(total)" class="pagination__btn">{{ total }}</button>

    <button :disabled="current >= total" @click="handleNextClick" class="pagination__btn">
      <font-icon icon="chevron-right"></font-icon>
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'

const props = defineProps({
  current: {
    type: Number,
  },
  total: {
    type: Number,
  },
})

const emit = defineEmits(['onPageChange'])
const pageChange = (value) => emit('onPageChange', value)
const handlePrevClick = () => pageChange(props.current - 1)
const handleNextClick = () => pageChange(props.current + 1)
const handlePageChange = (value) => pageChange(value)
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  @include media(md, mx) {
    justify-content: space-between;
    width: 100%;
    margin-top: 2.5rem;
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 0.125rem;
    color: var(--font-color);
    background-color: var(--nav-bar-color);
    border-radius: $border-radius;
    cursor: pointer;

    &:hover:not([disabled]) {
      color: var(--nav-bar-color);
      background-color: var(--font-color);
    }

    &[disabled] {
      opacity: 35%;
    }
  }
}
</style>
