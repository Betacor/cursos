<template>
  <!-- Button trigger modal -->
<!-- <i><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete" @click="emitClick">
  Eliminar</button></i> -->

  <!-- <button @click="emitClick" type="button" class="btn btn-danger btn-icon" data-bs-toggle="modal" data-bs-target="#delete">
  <i class="fa fa-trash"></i>
	</button> -->

    <button @click="emitClick" type="button" class="btn btn-icon" data-bs-toggle="modal" data-bs-target="#delete">
  <i class="fa fa-trash"></i>
	</button>

<!-- Modal -->
<div class="modal fade" id="delete" tabindex="-1" aria-labelledby="delete" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar curso</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <h2>Esta seguro/a de eliminar este curso?</h2>
        <h4>Curso: {{ delCurso.nombre }}</h4>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteCourse">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { db } from '@/services/auth.service';
import {doc, deleteDoc} from "firebase/firestore"

export default {
  computed:{
    ...mapState(['delCurso'])
  },
  methods:{
    emitClick(){
      this.$emit('deleteCurso')
    },
    async deleteCourse(){
    await deleteDoc(doc(db, "cursos", this.delCurso.id))
    .then(() => {
      //promesa ejecutada correctamente
      //mensaje de exito del registro
        Swal.fire({
        title: 'Curso eliminado!',
        text: 'Exitoso!',
        icon: 'success',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: true,
        allowEnterKey: true,
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
      console.error("Error al insertar el documento:", error);
      });
    }
  }
}
</script>

<style>

.btn {
    padding: 0.3em;
}

/* .fa{
    font-weight: normal;
} */

/* .icon-trash {
  font-size: 14px;
  font-weight: normal;
} */

</style>