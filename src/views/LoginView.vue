<template>
      <div id="app">
      <input name="username" type="text" v-model.trim="loginForm.email" />
      <br />
      <input name="password" type="password" v-model.trim="loginForm.password" />
      <br />
      <button @click="login()">Login</button>
      <br /><br />
      <button @click="accessToken()">Access Token</button>
    </div>
</template>

<script>
import { auth } from "@/services/auth.service";
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
          console.log('usuario logeado exitosamente')
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

</style>