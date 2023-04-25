import { createStore } from 'vuex'
import { Courses } from '@/services/cursos'
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/auth.service";


export default createStore({
  state: {
    cursos:Courses.getAllCourses(),
    nombre:'',
    usuarioConectado: ''
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
    },
    async extraer(state) {
			const querySnapshot = await getDocs(collection(db, "cursos"));
			console.log(querySnapshot);
			state.cursos = querySnapshot.docs.map(doc => doc.data());
			console.log(state.cursos);
		},
		mostrarCurso(){
			state.cursos.forEach((element)=>{
			console.log(element)
			})
		}
  },
  actions: {
  },
  modules: {
  }
})