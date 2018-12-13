import Vue from 'vue'
import App from './App'
import './assets/css/iconfont.css'
import './assets/css/common.css'
import 'corlib/lib/flex.css'
import { Dialog } from 'vant'
Vue.use(Dialog)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
