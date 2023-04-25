<template>
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
      <th><button class="btn btn-success" @click="this.$router.push('/addCourse')">Agregar</button></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="data in cursos" :key="data.codigo">
      <th scope="row">{{ data.id }}</th>
      <td>{{ data.nombre}}</td>
      <td>{{ data.precio }}</td>
      <td>{{ data.duracion }}</td>
      <td>{{ data.descripcion }}</td>
      <td>{{ data.cupos}}</td>
      <td>{{ data.inscritos }}</td>
      <td>{{ data.estado }}</td>
      <td>{{ data.img }}</td>
      <td><i><button class="btn btn-warning">Editar</button></i><button class="btn btn-danger">Eliminar</button></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/auth.service";

export default {
  data() {
    return {
        nombre:'',
        cursos: []
    };
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
}
</script>

<style>

</style>