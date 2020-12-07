import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ButtonIcon from '@/components/layout/ButtonIcon.vue'
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
Vue.component('ButtonIcon', ButtonIcon)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
