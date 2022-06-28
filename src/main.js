import Vue from 'vue'
import HomeAskon from '@/views/HomeAskon'

Vue.config.productionTip = false

new Vue({
  render: h => h(HomeAskon),
}).$mount('#app')
