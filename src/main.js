import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* font awesome */

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

/* default style file */
import './assets/scss/main.scss'

const app = createApp(App)

app.use(router)
app.component('font-icon', FontAwesomeIcon).mount('#app')
