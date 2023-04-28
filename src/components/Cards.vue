<template>
  <h1 class="title">Cursos E-Learning</h1>

	<div v-if="cargando" id="carga">
		<pulse-loader :loading="cargando" :color="color" :size="size"></pulse-loader>
	</div>

  <div class="container">
    <div class="row g-3 justify-content-center">
      <div v-for="item in cursos" :key="item" class="card col-md-3" style="width: 18rem;">
        <img class="card-img-top" :src="item.img" alt="Card image cap">
        <div class="card-body">
          <h2 class="card-title">Curso {{ item.nombre }}</h2>
          <div class="info-curso">
            <p class="card-text">Precio: ${{ parseInt(item.precio).toLocaleString('es') }}</p>
            <p class="card-text">Duracion:{{ item.duracion }}</p>
            <p class="card-text">Cupos:{{ item.cupos }}</p>
            <p class="card-text">Inscritos:{{ item.inscritos }}</p>
          </div>

          <a href="#" class="btn btn-primary">Inscribir Curso</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {

	data() {
		return {
			cargando: false,
		}
	},
components: {
	PulseLoader,
},
computed: {
    ...mapState(['cursos']),
    ...mapState(['nombre']),
		loaded() {
      return this.cursos.length > 0;
    },
},
watch: {
    loaded(value) {
      this.cargando = !value;
    },
  },
	methods: {
			...mapMutations(['extraer']),
			async extraerCursos() {
			try {
				this.cargando = true;
				await setTimeout(() => {
					let response = this.cursos;
					this.cursos = response;
					this.cargando = false;
				}, 1000);

			} catch (error) {
				this.errorMessage = error;
			}
		},
	},
	created() {
		this.extraerCursos();
	},
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
	/* border: 1px solid rgba(226, 223, 223, 0.488); */

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
	background-color: #ffffff !important;
	border: solid 1px #ed8e1e !important ;
    color: #ed8e1e;
}

.btn:hover {
	cursor: pointer;
	color: #ffffff;
	background-color: #ed8e1e !important;
}

.title {
    font-size: 1.5em;
    margin: 1em;
    /* text-align: left; */
    font-weight: bold;
    color: rgb(114, 114, 114);

}

.card-text{
    margin: 0;
    text-align: left;
}

.info-curso{
    padding-bottom: 1em;
}

.card-title{
    font-size: 20px;
}
</style>