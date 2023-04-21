<template>
    <div class="d-flex justify-content-center">
        <form class="w-50" @submit.prevent="registerUser">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ingrese Email</label>
                <input  v-model="registerForm.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">nunca compartas tu correo electronico con otra persona.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input v-model="registerForm.password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary me-3">Registrar</button>
            <button type="button" class="btn btn-danger ms-3">Cancelar</button>
        </form>
    </div>
</template>

<script>
/*import { auth } from "@/services/auth.service";*/
//import { app } from '@/services/auth.service.js';
import {auth} from '@/services/auth.service.js';


export default {
  data() {
    return {
      registerForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    registerUser() {
        auth
        .createUserWithEmailAndPassword(
          this.registerForm.email,
          this.registerForm.password
        )
        .then(() => {
          console.log("Usuario registrado correctamente");
          // Aquí puedes redirigir al usuario a la página de inicio de sesión o hacer algo más
        })
        .catch((error) => {
          console.log("Error al registrar usuario", error);
          // Aquí puedes mostrar un mensaje de error al usuario
        });
    }
  }
};
</script>
