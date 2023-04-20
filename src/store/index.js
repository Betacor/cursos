import { createStore } from 'vuex'
import { cursosService } from '@/services/temp'


export default createStore({
  state: {
    cursos: cursosService.getAllCourses()
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
