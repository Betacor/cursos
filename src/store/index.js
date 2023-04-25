import { createStore } from 'vuex'
import { Courses } from '@/services/cursos'
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/auth.service";


export default createStore({
  state: {
    cursos:Courses.getAllCourses(),
    nombre:'',
    usuarioConectado: '',
    courses: [],
    loaded: false
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
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data().nombre);
            state.cursos.push(doc.data());
        });
        console.log(state.cursos);
        },
        mostrarCurso(){
            state.cursos.forEach((element)=>{
                console.log(element)
            })
        },
        addCourse(state, { id, data }) {
          //insercion de los cursos en el arreglo
          state.courses.push({
            id,
            nombre: data.nombre,
            precio: data.precio,
            duracion: data.duracion,
            cupos: data.cupos,
            img: data.img
          });
          console.log(state.courses)
        },
  // actions: {
  // },
  // modules: {
  // }
}
})