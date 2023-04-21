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
      <th><button>Agregar</button></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="data in items" :key="data.codigo">
      <th scope="row">{{ data.codigo }}</th>
      <td>{{data.nombre}}</td>
      <td>{{ data.precio }}</td>
      <td>{{ data.duracion }}</td>
      <td>{{ data.descripcion }}</td>
      <td>{{data.cupos}}</td>
      <td>{{ data.inscritos }}</td>
      <td>{{ data.estado }}</td>
      <td>{{ data.img }}</td>
      <!-- @click="editarCurso()" @click="dekCurso()"-->
      <td><i><button>Editar</button></i><button>Eliminar</button></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return{
            items: []
        }
    },
    computed: {
		...mapState(['cursos']),
	},
    created: async function () {
		try {
				let response = this.cursos;
				this.items = response;

		} catch (error) {
			this.errorMessage = error;
		}
	}
}
</script>

<style>

</style>