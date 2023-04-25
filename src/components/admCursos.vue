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
      <th>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Agregar</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="data in courses" :key="data.codigo">
      <th scope="row">{{ data.id }}</th>
      <td>{{data.nombre}}</td>
      <td>{{ data.precio }}</td>
      <td>{{ data.duracion }}</td>
      <td>{{ data.descripcion }}</td>
      <td>{{data.cupos}}</td>
      <td>{{ data.inscritos }}</td>
      <td>{{ data.estado }}</td>
      <td>{{ data.img }}</td>
      <!-- @click="editarCurso()" @click="dekCurso()"-->
      <td><i><button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="setEdit(data)" data-bs-target="#editar">editar</button></i><button  class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">Eliminar</button></td>
    </tr>
  </tbody>
</table>
<!--Modales-->
  <!-- MODAL AGREGAR REGISTRO NUEVO-->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Curso</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- INICIO FORMULARIO AGREGAR -->
          <form @submit.prevent="insertar">
            <div class="mb-3">
              <label for="id" class="form-label">Codigo</label>
              <input type="text" v-model="setnewId" class="form-control" id="id" aria-describedby="idRegistro" disabled>
            </div>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" v-model="nombre" class="form-control" id="nombre" aria-describedby="idRegistro">
            </div>
            <div class="mb-3">
              <label for="estado" class="form-label">Estado</label>
              <select class="form-select" aria-label="Default select example" v-model="estado" id="estado">
                <option selected>selecciona una opción</option>
                <option value="1">True</option>
                <option value="2">False</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="precio" class="form-label">Precio</label>
              <input type="text" v-model="precio" class="form-control" id="precio" aria-describedby="precio">
            </div>
            <div class="mb-3">
              <label for="duracion" class="form-label">Duración</label>
              <input type="text" v-model="duracion" class="form-control" id="duracion" aria-describedby="duracion">
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">descripcion</label>
              <input type="text" v-model="descripcion" class="form-control" id="descripcion" aria-describedby="descripcion">
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">cupos</label>
              <input type="number" v-model="cupos" class="form-control" id="cupos" aria-describedby="cupos">
            </div>
            <div class="mb-3">
              <label for="inscritos" class="form-label">inscritos</label>
              <input type="number" v-model="inscritos" class="form-control" id="inscritos" aria-describedby="inscritos">
            </div>
            <div class="mb-3">
              <label for="imagen" class="form-label">imagen</label>
              <input type="text" v-model="imagen" class="form-control" id="imagen" aria-describedby="imagen">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Agregar</button>
        </div>
      </div>
    </div>
  </div>

  
   <!-- MODAL Modificar REGISTRO-->
   <div class="modal fade" id="editar" tabindex="-1" aria-labelledby="editar" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Editar curso</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- INICIO FORMULARIO AGREGAR -->
          <form @submit.prevent="editar">
            <div class="mb-3">
              <label for="id" class="form-label">Codigo</label>
              <input type="text" v-model="id" class="form-control" id="id" aria-describedby="idRegistro" disabled>
            </div>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" v-model="nombre" class="form-control" id="nombre" aria-describedby="idRegistro">
            </div>
            <div class="mb-3">
              <label for="estado" class="form-label">Estado</label>
              <select class="form-select" aria-label="Default select example" v-model="estado" id="estado">
                <option selected>selecciona una opción</option>
                <option value="1">True</option>
                <option value="2">False</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="precio" class="form-label">Precio</label>
              <input type="text" v-model="precio" class="form-control" id="precio" aria-describedby="precio">
            </div>
            <div class="mb-3">
              <label for="duracion" class="form-label">Duración</label>
              <input type="text" v-model="duracion" class="form-control" id="duracion" aria-describedby="duracion">
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">descripcion</label>
              <input type="text" v-model="descripcion" class="form-control" id="descripcion" aria-describedby="descripcion">
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">cupos</label>
              <input type="number" v-model="cupos" class="form-control" id="cupos" aria-describedby="cupos">
            </div>
            <div class="mb-3">
              <label for="inscritos" class="form-label">inscritos</label>
              <input type="number" v-model="inscritos" class="form-control" id="inscritos" aria-describedby="inscritos">
            </div>
            <div class="mb-3">
              <label for="imagen" class="form-label">imagen</label>
              <input type="text" v-model="imagen" class="form-control" id="imagen" aria-describedby="imagen">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Agregar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="delete" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar curso</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <h2>Esta seguro/a de eliminar este curso?</h2>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteCourse()">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, doc, setDoc,deleteDoc } from "firebase/firestore";
import { db } from "@/services/auth.service";
import { mapState } from "vuex";

export default {
  data(){
      return{
          items: [],
          newId: '0000',
          editId: '0000',
          nombre:'',
          estado: false,
          precio:'',
          duracion:'',
          descripcion: '',
          cupos: 0,
          inscritos: 0,
          imagen:'',
          editdata: [],
          delId:'',
          documents:[]
      }
  },
  computed: {
    ...mapState(['courses', 'loaded']),
      setnewId(){
        let newNumber = 0;
        newNumber = this.$store.state.courses.length + 1
        this.newId = this.newId.slice(0, -1) + newNumber;
        return this.newId;
      },
      getId(){
        let newNumber = 0;
        newNumber = this.$store.state.courses.length + 1
        this.editId= newNumber
        return this.editId;
      }
  },
  methods: {
    async extraer() {
    const querySnapshot = await getDocs(collection(db, "cursos"));
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      const existe = this.courses.find(c=>c.id === doc.id)
      if(!existe){
          this.$store.commit('addCourse', {id:doc.id, data: doc.data()})
      }
    });
    this.$store.state.loaded = true;
    },
    async deleteCourse() {
          const querySnapshot = await getDocs(collection(db, "cursos"));
          const cursos = querySnapshot.filter((doc) => doc.id === id);
          const index = cursos.indexOf(cursos[0]);
          state.cursos.splice(index, 1);},

    setEdit(data){
     
        console.log(data.nombre + data.descripcion);
      
    },
    async insertar(){
      //metodo de insersion 
      await setDoc(doc(db, "cursos", this.newId), {
        nombre: this.nombre,
        precio: this.precio,
        duracion: this.duracion,
        estado:this.estado,
        inscritos:this.inscritos,
        img:this.imagen,
        cupos:this.cupos,
        descripcion:this.descripcion
      })
      .then(() => {
      //promesa ejecutada correctamente
      //mensaje de exito del registro
        Swal.fire({
        title: 'Curso registrado',
        text: 'exitoso!',
        icon: 'success',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showCancelButton: false
      }).then((result) => {
        if (result.isConfirmed) {
          //volvemos a cargar los cursos de la bd
          this.extraer();
        }
      });
      })
      .catch((error) => {
      // Ha ocurrido un error al insertar el documento
      console.error("Error al insertar el documento:", error);
      });
    }
  },
  mounted(){
    console.log(this.loaded)
    if(!this.loaded){
        this.extraer();
    }
    console.log(this.loaded)
  }
}

</script>

<style>

</style>