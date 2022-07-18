<template>
  <div v-if="country" class="detail">
    <button @click="goToHome" class="detail__btn">
      <font-icon class="detail__btn-icon" icon="arrow-left-long" />back
    </button>
    <div class="detail__country">
      <div class="detail__country-img">
        <img class="country-list__item-img" :src="country?.flags?.png" :alt="`${country?.name?.common} flag`" />
      </div>
      <div class="detail__country-info">
        <h1 class="info-title">Ukraine</h1>
        <div class="info-list">
          <ul class="info-list__main">
            <li class="info-list__main-item"><span class="bold">Native Name:</span>Ukraine</li>
            <li class="info-list__main-item"><span class="bold">Population:</span>40 000 000</li>
            <li class="info-list__main-item"><span class="bold">Region: Europe:</span>Ukraine</li>
            <li class="info-list__main-item"><span class="bold">Sub Region:</span>Ukraine</li>
            <li class="info-list__main-item"><span class="bold">Capital:</span>Kiev</li>
          </ul>
          <ul class="info-list__other">
            <li class="info-list__other-item"><span class="bold">Top Level Domain:</span>.ua</li>
            <li class="info-list__other-item"><span class="bold">Currencies:</span>Ukraine</li>
            <li class="info-list__other-item"><span class="bold">Languages:</span>Ukraine</li>
          </ul>
        </div>
        <div class="info-links">
          <span class="bold">Border Countries:</span>
          <button class="info-links__btn">Poland</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { inject, onBeforeMount } from 'vue'

const router = useRouter()
const route = useRoute()

const handleGetCountry = inject('handleGetCountry')
const country = inject('country')

onBeforeMount(() => {
  console.log(country)
  handleGetCountry(route.params.countryname)
})

const goToHome = () => router.push('/home')
</script>

<style lang="scss">
.detail {
  @include container;
  margin: 3rem 0;

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    padding: 0 2rem;
    color: var(--font-color);
    background-color: var(--nav-bar-color);
    border-radius: $border-radius;
    cursor: pointer;
    transition: ease-out 0.25s;

    &-icon {
      margin-right: 0.625rem;
    }

    &:hover {
      color: var(--nav-bar-color);
      background-color: var(--font-color);
    }
  }

  &__country {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    gap: 9rem;

    @include media(md, mx) {
      gap: 1rem;
    }

    &-img {
      flex-grow: 1;
      height: 25rem;
      overflow: hidden;
      background-color: var(--font-color); // delete
      border-radius: $border-radius;
      @include item-width(2, 9rem);

      @include media(md, mx) {
        @include item-width(1, 1rem);
      }

      @include media(sm, mx) {
        height: 14rem;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-info {
      flex-grow: 1;
      margin-top: 2.5rem;
      @include item-width(2, 9rem);

      @include media(md, mx) {
        margin-top: 2.75rem;
        @include item-width(1, 1rem);
      }

      .info-title {
        margin-bottom: 1.5rem;
        font-weight: 800;
        font-size: 2rem;
        color: var(--font-color);
      }

      .info-list {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        width: 100%;

        &__main {
          @include item-width(2, 2rem);

          @include media(lg, mx) {
            @include item-width(1, 1rem);
          }

          &-item {
            margin-bottom: 1rem;
            font-weight: 300;
            font-size: 1rem;
            color: var(--font-color);
          }
        }

        &__other {
          @include item-width(2, 2rem);

          @include media(lg, mx) {
            @include item-width(1, 1rem);
          }

          &-item {
            margin-bottom: 1rem;
            font-weight: 300;
            font-size: 1rem;
            color: var(--font-color);
          }
        }
      }

      .info-links {
        display: flex;
        align-items: center;
        margin-top: 4.25rem;

        @include media(lg, mx) {
          margin-top: 2.125rem;
        }

        &__btn {
          height: 1.75rem;
          padding: 0 1.25rem;
          font-weight: 300;
          font-size: 0.875rem;
          color: var(--font-color);
          background-color: var(--nav-bar-color);
          border-radius: $border-radius;
          box-shadow: var(--box-shadow-color);
          cursor: pointer;
          transition: ease-out 0.5;

          &:hover {
            color: var(--nav-bar-color);
            background-color: var(--font-color);
          }
        }
      }
    }
  }
}
</style>
