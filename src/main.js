import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

// Global Components
import './global-components'

// Store
//import store from './store'

import store from './store'

// 3rd party plugins
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

// Axios Mock Adapter
//import '@/@fake-db/db'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

// Axios
Vue.use(axios)

require('@core/assets/fonts/feather/iconfont.css')


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
