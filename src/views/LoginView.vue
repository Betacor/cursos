<template>
  <NavBar/>
    <div id="app">
    <input name="username" type="text" v-model.trim="loginForm.email" />
    <br />
    <input name="password" type="password" v-model.trim="loginForm.password" />
    <br />
    <button @click="login()">Iniciar Sesión</button>
    <br /><br />
    <button @click="accessToken()">Acceder Token</button>
  </div>
  <Footer/>
</template>

<script>
import { auth } from "@/auth/authLogin";
// import NavBar from "@/components/NavBar.vue"
// import Footer from "@/components/Footer.vue"
// import { router } from "./router/router.service";

export default {
  data() {
  return {
    loginForm: {
      email: "",
      password: ""
    }
  };
},
methods: {
  login() {
    auth
      .signInWithEmailAndPassword(
        this.loginForm.email,
        this.loginForm.password
      )
      .then(function (fbUser) {
        console.log('Respuesta ',fbUser);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async accessToken() {
    const token = await auth.currentUser?.getIdToken();
    console.log(token);
  }
}
};

</script>

<style>

#app{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
}
input {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Montserrat', sans-serif;
text-align: center;
color: #2c3e50;
margin-top: 50px;
margin-top: -20px;
}

button{
margin-top: 1rem;
padding: 10px 20px;
background-color: #e9a331;
border: none;
color: #fff;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
}

</style>