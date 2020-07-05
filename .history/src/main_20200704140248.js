import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
import { Toast } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';
import { Rate } from 'vant';
import { ImagePreview } from 'vant';
import { Tab, Tabs } from 'vant';
import { Card } from 'vant';
import { Field } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { DatetimePicker } from 'vant';
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);

Vue.use(DatetimePicker);

Vue.use(Radio);
Vue.use(RadioGroup);

Vue.use(Field);

Vue.use(Card);

Vue.use(Tab);
Vue.use(Tabs);

// 全局注册
Vue.use(ImagePreview);

Vue.use(Rate);

Vue.use(AddressEdit);

Vue.use(AddressList);

Vue.use(Checkbox);
Vue.use(CheckboxGroup)

Vue.use(Toast);

// 全局注册
Vue.use(Dialog);

Vue.use(Vant);





Vue.prototype.$api = api

Vue.prototype.$checkLogin = () => {


  Dialog.confirm({
    title: '登录后才可启用此功能',
    message: '是否跳转登录/注册页面',
  })
    .then(() => {
      router.push({ name: 'login' })
    })
    .catch(() => {
      // on cancel
    });


}
Vue.prototype.$recentGoThrough = (id) => {
  if (!localStorage.views) {
    let arr = []
    arr.push(id)
    localStorage.setItem('views', JSON.stringify(arr))
  } else {
    let arr = JSON.parse(localStorage.views)
    arr.push(id)
    localStorage.setItem('views', JSON.stringify(arr))
  }

}





Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')