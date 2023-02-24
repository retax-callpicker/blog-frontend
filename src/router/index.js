import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'posts',
    component: () => import(/* webpackChunkName: "about" */ '../views/posts/Index.vue')
  },
  {
    path: '/create',
    name: 'create',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/posts/PostCreate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
