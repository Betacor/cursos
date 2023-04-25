<template>

<div class="d-flex justify-content-center">
        <form class="w-50" @submit.prevent="login">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ingrese Email</label>
                <input  v-model.trim="loginForm.email" type="email" :class="[stylingMail, 'form-control']" @blur="cambiaEstilo('mail')" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">nunca compartas tu correo electronico con otra persona.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input v-model.trim="loginForm.password" type="password" :class="[stylingPass, 'form-control']"  @blur="cambiaEstilo('pass')" id="exampleInputPassword1">
            </div>
              <button type="submit" class="btn btn-primary  w-50">Login</button>
              <div class="d-flex flex-column align-items-center text-center mt-3">
                <div id="registrarNuevo" class="form-text w-50">si no tienes cuenta, registra tu cuenta.</div>
                <button type="button" @click="goToRegister" class="btn btn-success w-50">Registrar Usuario</button>
              </div>
        </form>
      </div>
      <div v-if="manage">
        <p class="text-danger">{{ error }}</p>
      </div>
</template>

<script>
import { auth } from "@/services/auth.service";
import router from '@/router/index.js';

export default {
    data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      error: '',
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
    }
  },
  methods: {
    login() {
      if(this.loginForm.email === '' || this.loginForm.password === ''){
        this.manage = true;
        this.error = 'todos los campos son necesarios'
        console.log(this.error)
      }else{
        this.manage = false;
        auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then((fbUser)=> {
          console.log('usuario logeado exitosamente')
          console.log('Respuesta ',fbUser);
          //this.$store.state.usuarioConectado = this.loginForm.email; tambien funciona esta cosa
          //enviamos el correo del usuario al store
          //this.$store.commit('cargarUsuario', this.loginForm.email)
          //router.push('/');
        })
        .catch((err) => {
          //seteamos estilos y mensajes con error
          this.manage = true;
          this.cambiaShadowMail = true;
          this.cambiaShadowPass = true;
          this.error = 'Usuario o contraseña invalidos'
          console.log(err);
        });
      }
    },
    showAlert(action) {
      if(action==='login'){
        Swal.fire({
          title: 'Iniciado sesión',
          text: 'You clicked the button!',
          icon: 'success',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showCancelButton: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.redirectToHomePage();
          }
        });
      }else if(action==='logout'){
      Swal.fire({
        title: 'sesion cerrada',
        text: 'You clicked the button!',
        icon: 'success',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showCancelButton: false
      }).then((result) => {
        if (result.isConfirmed) {
          this.redirectToLogin();
        }
      });
    } 
  },
  //reenvio hacia el home
  redirectToHomePage() {
      this.$router.push('/');
  },
  redirectToLogin() {
      this.$router.push('/loginPage');
  },
    //reenvio hacia registrar
    goToRegister(){
      router.push('/registerView');
    },  
    //cambiar estilos de los inputs (validacion por campo)
    cambiaEstilo(input){

      if(input==='mail'){

        if(this.loginForm.email === ''){
        this.cambiaShadowMail = true;
        }else{
        this.cambiaShadowMail = false
        }

      }else if(input==='pass'){

        if(this.loginForm.password === ''){
        this.cambiaShadowPass = true;
        }else{
        this.cambiaShadowPass = false
        }

      }
      
    },
    async accessToken() {
      const token = await auth.currentUser?.getIdToken();
      console.log(token);
    }
  },
  mounted() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // Usuario ha iniciado sesión
      console.log("El usuario ha iniciado sesión:", user);
      // Cargar información del usuario en tu store o en tus datos locales
      this.$store.commit('cargarUsuario', user.email);
      this.$store.state.estado = false;
      this.showAlert('login');
     
    }else {
      if(this.$store.state.estado === true){
        // Usuario ha cerrado sesión
        console.log("El usuario ha cerrado sesión");
        // Limpiar información del usuario en tu store o en tus datos locales
        this.$store.commit('limpiarUsuario')
        // Redirigir a la página de inicio de sesión
        this.showAlert('logout');
      }
    }
  });
},
  
};

</script>

<style>
  .error {
      box-shadow: inset 0 0 5px rgba(255, 0, 0, 0.5);
    }
  .success{
      box-shadow: inset 0 0 5px rgba(105, 247, 105, 0.5);
    }
</style>