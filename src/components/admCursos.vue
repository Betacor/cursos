<template>
  <NavBar/>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Duracion</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Cupos</th>
      <th scope="col">Inscritos</th>
      <th scope="col">Estado</th>
      <th scope="col">Imagen</th>
      <th scope="col">Edición</th>
      <th><addModal></addModal></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="data in cursos" :key="data.id">
      <th scope="row">{{ data.id }}</th>
      <td>{{ data.nombre}}</td>
      <td>{{ data.precio }}</td>
      <td>{{ data.duracion }}</td>
      <td>{{ data.descripcion }}</td>
      <td>{{ data.cupos}}</td>
      <td>{{ data.inscritos }}</td>
      <td>{{ data.estado }}</td>
      <td>{{ data.img }}</td>
      <td><editModal @pruebaCursos="setNewCurso(data)"></editModal><delModal @deleteCurso="setDelCurso(data)">Eliminar</delModal></td>
    </tr>
  </tbody>
</table>

<!-- Modales Inicio -->


<Footer/>
</template>

<script>

import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "@/services/auth.service";
import { mapState, mapMutations } from "vuex";
import NavBar from './NavBar.vue';
import addModal from './addModal.vue'
import editModal from './editModal.vue'

export default {
  data(){
      return{
         
      }
  },
  components:{
    NavBar,
    addModal,
    editModal
  },
  computed:{
    ...mapState(['cursos'])
  },
  methods: {
    ...mapMutations(['extraer']),
    ...mapMutations(['setNewCurso']),
    ...mapMutations(['setDelCurso'])
  },
  created(){

      if(!this.loaded){
          this.extraer();
      }
  }
}



/*

import { mapState, mapMutations } from "vuex";
import NavBar from './NavBar.vue';
import addModal from './addModal.vue'
import editModal from './editModal.vue'
import delModal from './delModal.vue'

export default {
  data(){
      return{
         
      }
  },
  components:{
    NavBar,
    addModal,
    editModal,
    delModal
  },
  computed:{
    ...mapState(['cursos'])
  },
  methods: {
    ...mapMutations(['extraer']),
    ...mapMutations(['setNewCurso']),
    ...mapMutations(['setDelCurso'])

    
  },
  created(){

      if(!this.loaded){
          this.extraer();
      }
  }
}



/*
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/auth.service";
import NavBar from './NavBar.vue';
import addModal from './addModal.vue';

export default {
  data() {
    return {
        nombre:'',
        cursos: []
    };
  },
  components:{
    NavBar,
    addModal
  },
  mounted(){
    this.extraer();
  },
  methods: {
        async extraer() {
        const querySnapshot = await getDocs(collection(db, "cursos"));
        querySnapshot.forEach((doc) => {
            this.cursos.push(doc.data());
        });
        },
        mostrarCurso(){
            this.cursos.forEach((element)=>{
            })
        }
  }
}*/
</script>

<style>

</style>