import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerView from '../views/registerView.vue'
import cursosPage from '../views/cursosPage.vue'
import loginPage from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registerView',
    name: 'registerView',
    component: registerView
  },
  {
    path: '/cursosPage',
    name: 'cursosPage',
    component: cursosPage
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
