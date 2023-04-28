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
      <td>{{ data.nombre}}</td>null
index.js:41 null
      <td>{{ data.estado }}</td>
      <td class="data-img">{{ data.img }}</td>
      <td><editModal @pruebaCursos="setNewCurso(data)"></editModal><delModal @deleteCurso="setDelCurso(data)">Eliminar</delModal></td>
    </tr>
  </tbody>
</table>

<!-- Modales Inicio -->


<piePagina></piePagina>
</template>

<script>

import { mapState, mapMutations } from "vuex";
import piePagina from './Footer.vue'
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
    delModal,
    piePagina
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

</script>

<style>
.data-img{
  width: 10rem;
}
</style>