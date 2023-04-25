import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/HomeView.vue'
import registerView from '../views/registerView.vue'
import loginPage from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/registerView',
    name: 'registerView',
    component: registerView
  },
  {
    path: '/homeView',
    name: 'homeView',
    component: homeView
  },
  {
    path:'/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../components/admCursos.vue')
  },
  {
    path:'/addCourse',
    name: 'addCourse',
    component: () => import(/* webpackChunkName: "addCourse" */ '../components/addModal.vue')
  },
  {
    path:'/editCourse',
    name: 'editCourse',
    component: () => import(/* webpackChunkName: "editCourse" */ '../components/editModal.vue')
  },
  {
    path:'/delCourse',
    name: 'delCourse',
    component: () => import(/* webpackChunkName: "delCourse" */ '../components/delModal.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
