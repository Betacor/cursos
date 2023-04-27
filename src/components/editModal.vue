<template>
  <i><button  @click="emitClickEvent" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar">editar</button></i>
   <!-- MODAL Modificar REGISTRO NUEVO-->
   <div class="modal fade" id="editar" tabindex="-1" aria-labelledby="editar" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Editar curso</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- INICIO FORMULARIO MODIFICAR -->
          <form>
            <div class="mb-3">
              <label for="id" class="form-label">Codigo</label>
              <input type="text" v-model="newCurso.id" class="form-control" id="id" aria-describedby="idRegistro" disabled>
            </div>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" v-model="newCurso.nombre" class="form-control" id="nombre" aria-describedby="idRegistro">
            </div>
            <div class="mb-3">
              <label for="estado" class="form-label">Estado</label>
              <select class="form-select" v-model="newCurso.estado" aria-label="Default select example" id="estado">
                <option selected>selecciona una opción</option>
                <option value="1">True</option>
                <option value="2">False</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="precio" class="form-label">Precio</label>
              <input type="text" v-model="newCurso.precio" class="form-control" id="precio" aria-describedby="precio">
            </div>
            <div class="mb-3">
              <label for="duracion" class="form-label">Duración</label>
              <input type="text" v-model="newCurso.duracion" class="form-control" id="duracion" aria-describedby="duracion">
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">descripcion</label>
              <input type="text" v-model="newCurso.descripcion" class="form-control" id="descripcion" aria-describedby="descripcion">
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">cupos</label>
              <input type="number" v-model="newCurso.cupos" class="form-control" id="cupos" aria-describedby="cupos">
            </div>
            <div class="mb-3">
              <label for="inscritos" class="form-label">inscritos</label>
              <input type="number" v-model="newCurso.inscritos" class="form-control" id="inscritos" aria-describedby="inscritos">
            </div>
            <div class="mb-3">
              <label for="imagen" class="form-label">imagen</label>
              <input type="text" v-model="newCurso.img" class="form-control" id="imagen" aria-describedby="imagen">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="submit" class="btn btn-primary" @click="modificar" data-bs-dismiss="modal">Modificar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { db } from '@/services/auth.service'
import { doc, setDoc } from "firebase/firestore";

export default {
  computed:{
    ...mapState(['newCurso'])
  },
  methods:{
    emitClickEvent() {
      this.$emit('pruebaCursos');
    },
    async modificar(){
      //metodo de insersion para modificar
      await setDoc(doc(db, "cursos", this.newCurso.id), {
        nombre: this.newCurso.nombre,
        precio: this.newCurso.precio,
        duracion: this.newCurso.duracion,
        estado:this.newCurso.estado,
        inscritos:this.newCurso.inscritos,
        img:this.newCurso.img,
        cupos:this.newCurso.cupos,
        descripcion:this.newCurso.descripcion
      })
      .then(() => {
      //promesa ejecutada correctamente
      //mensaje de exito del registro
        Swal.fire({
        title: 'Curso modificado',
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
          this.$store.commit('extraer');
        }
      });
      })
      .catch((error) => {
      // Ha ocurrido un error al insertar el documento
      console.error("Error al modificar el documento:", error);
      });
    }
  }
}
</script>

<style>

</style>