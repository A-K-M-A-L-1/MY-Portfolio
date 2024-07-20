// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from './../components/pages/portfolio.vue'
import Resume from './../components/pages/resume.vue'
import mySkills from './../components/pages/myskills.vue'
// Define routes before creating the router
const routes = [
  { path: '/', redirect: '/portfolio' },
  { path: '/portfolio', component: Portfolio },
  { path: '/resume', component: Resume },
  { path: '/myskills', component: mySkills}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

