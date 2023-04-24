<template>
    <div class="d-flex justify-content-center">
        <form class="w-50" @submit.prevent="registerUser">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ingrese Email</label>
                <input  v-model="registerForm.email" type="email" :class="[stylingMail, 'form-control']" @blur="cambiaEstilo('mail')" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">nunca compartas tu correo electronico con otra persona.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input v-model="registerForm.password" type="password" :class="[stylingPass, 'form-control']" @blur="cambiaEstilo('pass')" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary me-3">Registrar</button>
            <button type="button" @click="goBack" class="btn btn-danger ms-3">Volver</button>
        </form>
    </div>
    <div v-if="manage">
        <p :class="stylingMsg">{{ msg }}</p>
      </div>
</template>

<script>
/*import { auth } from "@/services/auth.service";*/
//import { app } from '@/services/auth.service.js';
import {auth} from '@/services/auth.service.js';
import router from '@/router';

export default {
  data() {
    return {
      registerForm: {
        email: "",
        password: ""
      },
      msg: '',
      error: false,
      manage: false,
      //inicializa como un string vacio luego en la funcion lo paso a boolean
      cambiaShadowMail: '',
      cambiaShadowPass: '' 
    };
  },
  computed:{
    stylingMail(){
      return{
        //clase error del css
        error: this.cambiaShadowMail === true  ,
        success: this.cambiaShadowMail === false
      }
    },
    stylingPass(){
      return{
        error: this.cambiaShadowPass === true  ,
        success: this.cambiaShadowPass === false
      }
    },
    stylingMsg(){
      return{
        msgDanger: this.error === true,
        msgSuccess: this.error === false
      }
    }
  },
  methods: {
    registerUser() {
      if(this.registerForm.email ==='' || this.registerForm.password === ''){
        this.manage = true;
        this.error = true;
        this.msg = 'todos los campos son necesarios'
        console.log(this.error)
      }else{
        auth
        .createUserWithEmailAndPassword(
          this.registerForm.email,
          this.registerForm.password
        )
        .then(() => {
          console.log("Usuario registrado correctamente");
          this.error = false;
          this.msg = 'Usuario registrado correctamente';
          router.push('/loginPage')
          // Aquí puedes redirigir al usuario a la página de inicio de sesión o hacer algo más
        })
        .catch((error) => {
          //seteamos estilos y mensajes con error
          this.manage = true;
          this.cambiaShadowMail = true;
          this.cambiaShadowPass = true;
          this.error = 'ha ocurrido un problema'
          console.log("Error al registrar usuario", error);
          // Aquí puedes mostrar un mensaje de error al usuario
        });
      }
    },
    cambiaEstilo(input){

      if(input==='mail'){

        if(this.registerForm.email === ''){
        this.cambiaShadowMail = true;
        }else{
        this.cambiaShadowMail = false
        }

      }else if(input==='pass'){

        if(this.registerForm.password === ''){
        this.cambiaShadowPass = true;
        }else{
        this.cambiaShadowPass = false
        }

      }
    },
    goBack(){
      router.push('/loginPage');
    }
  }
};
</script>

<style>
  .error {
      box-shadow: inset 0 0 5px rgba(255, 0, 0, 0.5);
    }
  .success{
      box-shadow: inset 0 0 5px rgba(105, 247, 105, 0.5);
    }
  .msgDanger{
    color: rgba(255, 0, 0, 0.5);
  }
  .msgSuccess{
    color: rgba(11, 102, 11, 0.5);
  }
</style>
