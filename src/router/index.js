import Vue from 'vue'
import Router from 'vue-router'
import FreedomRecovery from '@/components/FreedomRecovery.vue'
import AboutPage from '@/components/AboutPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: FreedomRecovery
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    }
  ]
})
