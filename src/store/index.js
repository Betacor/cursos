import { createStore } from 'vuex'
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/auth.service";


export default createStore({
  state: {
    cursos:[],
    newCurso:[],
    nombre:'',
    usuarioConectado: '',
    usuarioEstado:'',
    delCurso:[]
  },
  getters: {
    
  },
  mutations: {
    cargarUsuario(state, email){
      state.usuarioConectado = email;
      localStorage.setItem('usuario', JSON.stringify(state.usuarioConectado));
    },
    limpiarUsuario(state){
      state.usuarioConectado = '';
      localStorage.setItem('usuario', JSON.stringify(state.usuarioConectado));
      //limpia el usuario conectado
    },
    getUsuario(state){
      state.usuarioEstado = JSON.parse(localStorage.getItem('usuario'));
    },
    async extraer(state) {
      state.cursos = [];
      const querySnapshot = await getDocs(collection(db, "cursos"));
      querySnapshot.forEach((doc) => {
        state.cursos.push(Object.assign({}, doc.data(), { id: doc.id }));
      });
    },
		mostrarCurso(){
			state.cursos.forEach((element)=>{
			console.log(element)
			})
		},
    setNewCurso(state, data){
      console.log(data.id)
      state.newCurso = data;
    },
    setDelCurso(state,data){
      state.delCurso = data;
    }
  },
  actions: {
  },
  modules: {
  }
})