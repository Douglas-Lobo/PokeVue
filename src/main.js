import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bulma/css/bulma-rtl.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
