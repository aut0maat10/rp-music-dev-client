import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import ('../views/PostsView.vue')
    },
    {
      path: '/posts/:id',
      name: 'posts/:id',
      meta: { layout: 'BlogLayout' },
      component: () => import ('../views/PostDetail.vue')
    }
      
  ]
})

export default router
