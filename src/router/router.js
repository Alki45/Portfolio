import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import About from '../components/AboutPage.vue'
import Experience from '../components/ExperiencePage.vue'
import Projects from '../components/ProjectsPage.vue'
import EventPage from '../components/EventPage.vue'
import ContactPage from '@/components/ContactPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: About },
  { path: '/experience', component: Experience },
  { path: '/projects', component: Projects },
  { path: '/events', component: EventPage },
  {path: '/contact', component : ContactPage},
]

const router = createRouter({
  history: createWebHistory('/Portfolio/'),
  routes
})

export default router
