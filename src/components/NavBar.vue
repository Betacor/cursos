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
                        <router-link class="nav-link px-3" to="/homeView">Cursos</router-link>

                         <div v-if="$store.state.usuarioEstado === 'administrador@a.com'">

                            <router-link class="nav-link px-3" to="/admin">Administrar</router-link>
                         </div>
                        <logout></logout>
                        <p class="mb-0">{{$store.state.usuarioEstado}}</p>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
        
        <script>
    // import FormLogin from './FormLogin.vue';
    // import ShowCards from './ShowCards.vue';
    import logout from '@/components/LogoutPage.vue'
    import { mapState, mapMutations } from "vuex";

    export default {
            name: 'NavBar',
            components:{
                logout
            },
            methods:{
                ...mapMutations(['getUsuario'])
            },

            created(){

                this.getUsuario();
            }
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