import { createRouter, createWebHistory } from 'vue-router'
import FreedomRecovery from '@/components/FreedomRecovery.vue'
import AboutPage from '@/components/AboutPage.vue'
// import MembershipPage from '@/components/Membership.vue'
// import ContactPage from '@/components/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: FreedomRecovery },
  { path: '/about', name: 'About', component: AboutPage }
  // { path: '/membership', name: 'Membership', component: MembershipPage },
  // { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
