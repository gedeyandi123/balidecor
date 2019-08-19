import Vue from 'vue'
import App from './App.vue'

/** plugins */
import router from '@/plugins/router'
import i18n from '@/plugins/i18n'
import vuex from '@/plugins/vuex'

Vue.config.productionTip = false

new Vue({
  router,
  vuex,
  i18n,
  render: h => h(App),
}).$mount('#app')
