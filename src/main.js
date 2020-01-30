// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router/index.js'
import VueWechatTitle from 'vue-wechat-title'
import echarts from './lib/echarts'

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

Vue.use(VueRouter)
Vue.use(VueWechatTitle)


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
