import { defineStore } from 'pinia'

export const useStore = defineStore('countries', {
  state: () => ({
    countries: [],
    country: null,
  }),

  getters: {
    COUNTRIES(state) {
      return state.countries
    },
  },

  actions: {
    getCountriesFromApi() {
      return fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => (this.countries = data))
        .catch((err) => console.log(err.message))
    },

    getCountryFromApi(name) {
      fetch(`https://restcountries.com/v3.1/alpha/${name}`)
        .then((res) => res.json())
        .then((data) => (this.country = data[0]))
        .catch((err) => console.log(err.message))
    },
  },
})
