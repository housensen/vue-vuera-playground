import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VuePlugin as VueraPlugin } from 'vuera'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


Vue.use(VueraPlugin)
Vue.use(iView)