<template>
Este es el home
</template>
  
  
  <script>
  // @ is an alias to /src
  import NavBar from '../components/NavBar.vue'
  import Footer from '../components/Footer.vue'
  
  export default {
  name: "Home-Root",
  components:{
    NavBar,
    Footer
  }
  }
  </script>
  
  <style>
  .btn--ver{
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: orange;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  margin-top: auto;
  text-align: center;
  transition: color 100ms;
  touch-action: manipulation;
  font-family: 'Montserrat', sans-serif;
  }
  </style>