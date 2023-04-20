<template>
<div class="d-flex ms-auto me-3">
    <nav>
        <ul id="list-contenedor" class="d-flex justify-content-around align-items-center">
            <router-link class="nav-link px-3" to="/HomeRoot">Inicio</router-link>
            <router-link class="nav-link px-3" to="/Cursos">Cursos</router-link>


  <!-- <router-link class="nav-link px-3" to="/HomeRoot">Hola usuario1</router-link> -->

            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Logout
            </button>
            <!-- <p class="mb-0">{{usuarioConectado}}</p> -->
        </ul>
    </nav>
</div>
</template>

