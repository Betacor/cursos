<template>

  <div class="contenedor_formLogin">
          <form class="w-50" @submit.prevent="login">
              <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Ingrese Email</label>
                  <input  v-model.trim="loginForm.email" type="email" :class="[stylingMail, 'form-control']" @blur="cambiaEstilo('mail')" id="exampleInputEmail1" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text">Nunca compartas tu correo electronico con otra persona.</div>
              </div>
              <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                  <input v-model.trim="loginForm.password" type="password" :class="[stylingPass, 'form-control']"  @blur="cambiaEstilo('pass')" id="exampleInputPassword1">
              </div>
                <button type="submit" class="btn-login w-50">Login</button>
                <div class="d-flex flex-column align-items-center text-center mt-3">
                 <button type="button" @click="goToRegister" class="btn-registrar w-50">Registrar Usuario</button>
                 <div id="registrarNuevo" class="form-text w-50">Si no tienes cuenta, registra tu cuenta.</div>
                </div>
                <div v-if="manage">
                 <p class="text-danger">{{ error }}</p>
                </div>
          </form>
        
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
     if(this.$store.state.usuarioConectado === 'administrador@a.com'){
        this.$router.push('/admin');
      }else{
        this.$router.push('/homeView');
      }
    },
    redirectToLogin() {
        this.$router.push('/');
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
    },
    created(){

    auth.onAuthStateChanged((user) => {
      if (user) {
        // Usuario ha iniciado sesión
        console.log("El usuario ha iniciado sesión:", user.email);
        // Cargar información del usuario en tu store o en tus datos locales
        this.$store.commit('cargarUsuario', user.email);
        this.$store.state.estado = false;
        this.showAlert('login');
      }else {
        console.log(this.$store.state.estado);
        //verifica que efectivamente sea un logout 
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
    .contenedor_formLogin{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background: rgb(240,163,63);
      background: linear-gradient(90deg, rgba(240,163,63,1) 0%, rgba(251,255,155,1) 62%, rgba(247,238,180,1) 100%);
    } 
    .btn-login {
    background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
    border: 0;
    border-radius: 12px;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
}

  .btn-registrar{
    background: linear-gradient(to bottom right, #4b8d4f, #157f1e);
    border: 0;
    border-radius: 12px;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
}

.btn-login:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.btn-login:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.btn-registrar:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.btn-registrar:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}
    
    .error {
      
    box-shadow: inset 0 0 10px rgba(224, 39, 39, 0.5);
      }
    .success{
        box-shadow: inset 0 0 5px rgba(105, 247, 105, 0.5);
      }
  </style>