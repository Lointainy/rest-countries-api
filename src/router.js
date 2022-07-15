import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './Page/MainPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: '/home/:countryname?', component: MainPage, alias: '/' }],
})
