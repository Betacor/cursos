<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 Logout
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Logout</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Estas seguro(a) que deseas salir de la sesión?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button" @click="logout" class="btn btn-primary" data-bs-dismiss="modal">Logout</button>
      </div>
    </div>
  </div>
</div>

    </div>
</template>

<script>
import { auth } from "@/services/auth.service";

export default {
  methods: {
    async logout() {
      try {
        await auth.signOut();
        this.$store.state.estado = true;
        this.$router.push('/loginPage'); // redirigir al usuario al login después del cierre de sesión
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>