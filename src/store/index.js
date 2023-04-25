import { createStore } from 'vuex'
import { Courses } from '@/services/cursos'


export default createStore({
  state: {
    cursos: Courses.getAllCourses()
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
