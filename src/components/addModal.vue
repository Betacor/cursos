<template>
  <form @submit.prevent="createCourse(newCourse)">
    <input type="text" v-model="newCourse.nombre" />
    <input type="text" v-model="newCourse.precio" />
    <input type="text" v-model="newCourse.duracion" />
    <input type="text" v-model="newCourse.descripcion" />
    <input type="number" v-model="newCourse.cupos" />
    <input type="number" v-model="newCourse.inscritos" />
    <input type="text" v-model="newCourse.img" />
    <button type="submit" class="btn btn-success">Crear Curso</button>
  </form>
  <form>
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example1" class="form-control" />
        <label class="form-label" for="form6Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Last name</label>
      </div>
    </div>
  </div>

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text" id="form6Example3" class="form-control" />
    <label class="form-label" for="form6Example3">Company name</label>
  </div>

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text" id="form6Example4" class="form-control" />
    <label class="form-label" for="form6Example4">Address</label>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form6Example5" class="form-control" />
    <label class="form-label" for="form6Example5">Email</label>
  </div>

  <!-- Number input -->
  <div class="form-outline mb-4">
    <input type="number" id="form6Example6" class="form-control" />
    <label class="form-label" for="form6Example6">Phone</label>
  </div>

  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
    <label class="form-label" for="form6Example7">Additional information</label>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
</form>
</template>

<script>
import { db } from '@/services/auth.service'
import { collection, addDoc } from "firebase/firestore"

export default {
  data () {
    return {
      newCourse: {
        nombre:'',
        estado:true,
        precio:'',
        duracion:'',
        descripcion:'',
        cupos:0,
        inscritos:0,
        img:''
      }
    }
  },
  methods: {
    async createCourse (course) {
      await addDoc(collection(db, "cursos"),{course})
    }
  }
}
</script>

<style>

</style>