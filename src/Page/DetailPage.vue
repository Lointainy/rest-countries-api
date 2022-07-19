<template>
  <div v-if="country" class="detail">
    <button @click="goToHome" class="detail__btn">
      <font-icon class="detail__btn-icon" icon="arrow-left-long" />back
    </button>
    <div class="detail__country">
      <div class="detail__country-img">
        <img class="country-list__item-img" :src="country.flags.svg" :alt="`${country.name.common} flag`" />
      </div>
      <div class="detail__country-info">
        <h1 class="info-title">{{ country.name.common }}</h1>
        <div class="info-list">
          <ul class="info-list__main">
            <li class="info-list__main-item"><span class="bold">Native Name:</span>{{ country.name.official }}</li>
            <li class="info-list__main-item">
              <span class="bold">Population:</span>{{ country.population.toLocaleString() }}
            </li>
            <li class="info-list__main-item"><span class="bold">Region: </span>{{ country.region }}</li>
            <li class="info-list__main-item"><span class="bold">Sub Region:</span>{{ country.subregion }}</li>
            <li v-if="country.capital.length" class="info-list__main-item">
              <span class="bold">Capital:</span>{{ country.capital.join(', ') }}
            </li>
          </ul>
          <ul class="info-list__other">
            <li class="info-list__other-item">
              <span class="bold">Top Level Domain:</span>{{ country.tld.join(', ') }}
            </li>
            <li class="info-list__other-item">
              <span class="bold">Currencies:</span>
              <span v-for="curr in country.currencies" :key="curr">{{ curr.symbol }} {{ curr.name }}</span>
            </li>
            <li class="info-list__other-item">
              <span class="bold">Languages:</span>
              <ul class="other-list">
                <li class="other-list__item" v-for="lang in country.languages" :key="lang">{{ lang }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="info-links">
          <span class="bold">Border Countries:</span>
          <ul class="info-links__list">
            <li
              @click="goToCountry(borderCountry)"
              v-for="borderCountry in country.borders"
              :key="borderCountry"
              class="info-links__list-item"
            >
              {{ borderCountry }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { inject, onBeforeMount, onBeforeUpdate } from 'vue'

const router = useRouter()
const route = useRoute()

const handleGetCountry = inject('handleGetCountry')
const country = inject('country')

onBeforeMount(() => {
  handleGetCountry(route.params.countryname)
})

onBeforeUpdate(() => {
  handleGetCountry(route.params.countryname)
})

const goToHome = () => router.push('/home')
const goToCountry = (value) => router.push(`/details/${value.toLowerCase()}`)
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
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
      height: 25rem;
      overflow: hidden;
      background-color: var(--nav-bar-color); // delete
      border-radius: $border-radius;
      @include item-width(2, 9rem);

      @include media(md, mx) {
        @include item-width(1, 1rem);
      }

      @include media(sm, mx) {
        height: 14rem;
      }

      img {
        display: block;
        max-width: 85%;
        height: auto;
        margin-right: auto;
        margin-left: auto;
        border-radius: $border-radius;
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

            .other-list {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
            }
          }
        }
      }

      .info-links {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 4.25rem;

        @include media(lg, mx) {
          margin-top: 2.125rem;
        }

        &__list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem;

          &-item {
            display: flex;
            justify-content: center;
            align-items: center;
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
}
</style>
