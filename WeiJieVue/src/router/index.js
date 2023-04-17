import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Serve from '../views/Serve.vue'
import DesignCase from '../views/DesignCase.vue'
import ProjectCase from '../views/ProjectCase".vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/serve',
      name: 'Serve',
      component: Serve
    },
    {
      path: '/designCase',
      name: 'DesignCase',
      component: DesignCase
    },
    {
      path: '/projectCase',
      name: 'ProjectCase',
      component: ProjectCase
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router
