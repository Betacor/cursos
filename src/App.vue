<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/loginPage">Login</router-link> |
    <router-link to="/admin">Administrar</router-link>|
    <router-link to="/registerView">Registrar</router-link>
    <router-link to="/cursosPage">mostrarCursos</router-link>
    <logout></logout>
  </nav>
  <router-view/>
</template>

<script>
import logout from '@/components/LogoutPage.vue';

  export default {

    components:{
      logout
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
