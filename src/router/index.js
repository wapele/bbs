import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexMan',
      component: Index
    }
  ]
})
