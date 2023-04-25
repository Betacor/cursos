import { createStore } from 'vuex'
import { Courses } from '@/services/cursos'


export default createStore({
  state: {
    cursos: Courses.getAllCourses(),
    usuarioConectado: '',
    estado: false
  },
  getters: {
  },
  mutations: {
    cargarUsuario(state, email){
      state.usuarioConectado = email;
      console.log(state.usuarioConectado);
    },
    limpiarUsuario(state){
      state.usuarioConectado = '';
      //limpia el usuario conectado
    }
  },
  actions: {
  },
  modules: {
  }
})
