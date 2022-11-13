import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: '',
    path: '/',
    redirect: 'list'
  },
  {
    name: 'list',
    path: '/list',
    component: () => import('../views/List/List.vue'),
  },
  {
    name: 'card',
    path: '/card/:id',
    component: () => import('../views/Card/Card.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/About/About.vue')
  }
]

export default routes