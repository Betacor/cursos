<template> 
    <div class="navbar">
        <div class="container-fluid d-flex align-items-center">
            <div>
                <img src="../assets/logoo.png" alt="" width="160">
            </div>
            <!-- <div id="logo">
                <a v-on:click="HomePage"><img src="../assets/logo.png" alt="" width="250"></a>
            </div> -->
            <div class="d-flex ms-auto me-3">
                <nav>
                    <ul id="list-contenedor" class="d-flex justify-content-around align-items-center">
                        <router-link class="nav-link px-3" to="/">Inicio</router-link>
                        <router-link class="nav-link px-3" to="">Cursos</router-link>
                        <ShowCards></ShowCards>
                        <!-- <router-link class="nav-link px-3" to="">Login</router-link>
                        <FormLogin></FormLogin> -->
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Logout
                        </button>
                        <!-- <p class="mb-0">{{usuarioConectado}}</p> -->
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Logout</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ¿Esta seguro que desea salir?
          <p>{{usuarioConectado}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-no" data-bs-dismiss="modal">No</button>
          <button type="button" v-on:click="logout" class="btn btn-si" data-bs-dismiss="modal">Si</button>
        </div>
      </div>
    </div>
    </div>
        </template>
        
        <script>
    // import FormLogin from './FormLogin.vue';
    // import ShowCards from './ShowCards.vue';
    export default {
        name: 'NavBar'
        }
    
    </script>
    <style>
    
    #login{
        cursor: pointer;
    }
    
    .navbar{
        list-style-type: none;
        background-color: #ed8e1e;
        color: azure;
        padding: 2rem 2rem 2rem 2rem;
        font-size: 16px;
        margin: 0%;
        font-family: 'Montserrat', sans-serif;
    }
    
    .list-item{
        cursor: pointer;
    }
    
    .btn.btn-no{
        background-color: orange;
        color: azure;
    }
    
    .btn.btn-si{
        background-color: orange;
        color: azure;
    }
    
    .btn{
        color: azure;
    }
    </style>