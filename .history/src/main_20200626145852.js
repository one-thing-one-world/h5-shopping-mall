import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import VDistpicker from 'v-distpicker'

Vue.component('v-distpicker', VDistpicker)

Vue.use(Vant);
Vue.use(Dialog);



Vue.prototype.$api = api
vue.prototype.$alert =  




Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')