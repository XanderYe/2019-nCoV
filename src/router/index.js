import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '新型冠状病毒肺炎确诊患者分布',
      component: Main
    }
  ]
})
