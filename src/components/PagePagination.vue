<template>
  <div class="pagination">
    <button disabled class="pagination__btn"><font-icon icon="chevron-left"></font-icon></button>
    <button class="pagination__btn">1</button>
    <button class="pagination__btn">5</button>
    <button class="pagination__btn">30</button>
    <button class="pagination__btn"><font-icon icon="chevron-right"></font-icon></button>
  </div>
</template>

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
