import { createRouter, createWebHistory } from 'vue-router'
import { auth } from "@/services/auth.service";
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
    component: homeView,
    meta: {
      requiresAuth: true
    },
  },
  {
    path:'/admin',
    name: 'admin',
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;// obtener el usuario actual de firebase
      console.log(user?.email);
      if (!user) {
        // si no hay un usuario actual, redirigir a la página de inicio de sesión
        console.log('no hay usuario');
        next({ name: "loginPage" });
      } else if (user.email === "administrador@a.com") {
        console.log('usuario administrador');
        // si el correo electrónico del usuario actual coincide con el correo del administrador permitir el acceso
        next();
      } else {
        // si el correo electrónico no coincide, redirigir a una página de acceso denegado
        console.log('correo no coincide')
        next({ name: "homeView" });
      }
    },
    component: () => import(/* webpackChunkName: "admin" */ '../components/admCursos.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});



export default router
