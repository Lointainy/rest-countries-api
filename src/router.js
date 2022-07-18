import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './Page/MainPage.vue'
import DetailPage from './Page/DetailPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: MainPage, alias: '/' },
    { path: '/details/:countryname?', component: DetailPage },
  ],
})
