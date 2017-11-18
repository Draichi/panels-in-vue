import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddNew from '@/components/AddNew'
import Single from '@/components/Single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/new',
      name: 'New',
      component: AddNew
    },
    {
      path: '/new/:id',
      name: 'edit',
      component: AddNew
    },
    {
      path: '/job/:id',
      name: 'single',
      component: Single
    },
    {
      path: '*',
      component: HelloWorld
    }
  ]
})
