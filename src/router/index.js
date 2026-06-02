import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GoodPregnancyPlan from '../views/GoodPregnancyPlan.vue'
import GoodPregnancyDaily from '../views/GoodPregnancyDaily.vue'
import Checkup from '../views/Checkup.vue'
import Weight from '../views/Weight.vue'
import Music from '../views/Music.vue'
import AI from '../views/AI.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/good-pregnancy-plan', name: 'GoodPregnancyPlan', component: GoodPregnancyPlan },
  { path: '/good-pregnancy-daily', name: 'GoodPregnancyDaily', component: GoodPregnancyDaily },
  { path: '/checkup', name: 'Checkup', component: Checkup },
  { path: '/weight', name: 'Weight', component: Weight },
  { path: '/music', name: 'Music', component: Music },
  { path: '/ai', name: 'AI', component: AI }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
