import { defineStore } from 'pinia'

export const useStore = defineStore('countries', {
  state: () => ({
    countries: [],
    country: null,
    isLoading: false,
  }),

  getters: {
    COUNTRIES(state) {
      return state.countries
    },
  },

  actions: {
    getCountriesFromApi() {
      this.isLoading = true
      return fetch('https://restcountries.com/v3.1/all')
        .then((res) => {
          console.log(this.isLoading)
          return res.json()
        })
        .then((data) => {
          this.countries = data
          this.isLoading = false
          console.log(this.isLoading)
        })
        .catch((err) => {
          console.log(err.message)
        })
    },

    getCountryFromApi(name) {
      fetch(`https://restcountries.com/v3.1/alpha/${name}`)
        .then((res) => res.json())
        .then((data) => (this.country = data[0]))
        .catch((err) => console.log(err.message))
    },
  },
})
