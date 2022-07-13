<template>
  <div v-for="item in 8" :key="item" class="country-list__item">
    <img class="country-list__item-img" src="" alt="" />

    <div class="country-list__item-field">
      <div class="field-title">title</div>
      <div class="field-subtitle"><span class="bold">Population</span>subtitle</div>
      <div class="field-subtitle"><span class="bold">Region:</span>subtitle</div>
      <div class="field-subtitle"><span class="bold">Capital:</span>subtitle</div>
    </div>
  </div>
</template>

<style lang="scss">
.country-list__item {
  flex-grow: 1;
  max-width: 16.5rem;
  height: 21rem;
  background-color: var(--nav-bar-color);
  border-radius: $border-radius;
  box-shadow: var(--box-shadow-color);
  @include item-width(4, 4.7rem);

  @include media(xl, mx) {
    @include item-width(3, 4.7rem);
  }

  @include media(lg, mx) {
    @include item-width(2, 4.7rem);
  }

  @include media(sm, mx) {
    @include item-width(1, 4.7rem);
  }

  &-img {
    width: 100%;
    height: 10rem;
  }

  &-field {
    padding: 1.5rem 1.5rem;
    color: var(--font-color);

    .field-title {
      margin-bottom: 1rem;
      font-weight: 800;
      font-size: 1.125rem;
      line-height: 1.625rem;
    }

    .field-subtitle {
      margin-bottom: 0.5rem;
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1rem;

      .bold {
        margin-right: 0.5rem;
        font-weight: 600;
      }
    }
  }
}
</style>
