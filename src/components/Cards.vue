<template>

		<h1>Cursos</h1>
    <div class="container">
			<div class="row g-3">
        <div v-for="fila in cursos" :key="fila.codigo" class="card col-md-3" style="width: 18rem;">
          <img class="card-img-top" :src="fila.img" alt="Card image cap">
          <div class="card-body">
						<h2 class="card-title">Curso {{ fila.nombre }}</h2>
						<p class="card-text">Precio: ${{ parseInt(fila.precio).toLocaleString('es') }}</p>
						<p class="card-text">Duracion:{{ fila.duracion }}</p>
						<p class="card-text">Cupos:{{ fila.cupos }}</p>
						<a href="#" class="btn btn-primary">Inscribir Curso</a>
          </div>
				</div>
			</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
computed: {
		...mapState(['cursos']),
	}
}

</script>

<style scoped>

.card {
	/* border: 0; */
	margin-right: 1em;
}

.card-body {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid rgba(226, 223, 223, 0.488);

}

.card img {
	max-height: 100px;
	width: auto;
	overflow: hidden;
	object-fit: scale-down;
	margin: 1em;
}

h2 {
	font-size: 1rem;
	font-weight: 700;
}

.btn {
	background-color: rgb(39, 39, 39) !important;
	border: 0 !important;
}

.btn:hover {
	cursor: pointer;
	color: #00f3ae;
	background-color: rgb(48, 48, 48) !important;
}
</style>