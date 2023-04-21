<template>
    <div>
        <button @click="extraer">extract</button>
        <button @click="mostrarCurso">extract</button>
        <ul>
            <li v-for="item in cursos" :key="item">{{ item.nombre }}</li>
        </ul>
    </div>
</template>

<script>

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/auth.service";

export default {
  data() {
    return {
        nombre:'',
        cursos: []
    };
  },
  mounted(){
    this.extraer();
  },
  methods: {
        async extraer() {
       
        const querySnapshot = await getDocs(collection(db, "cursos"));
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data().nombre);
            this.cursos.push(doc.data());

        });

        console.log(this.cursos);
        },
        mostrarCurso(){
            this.cursos.forEach((element)=>{

                console.log(element)
            })
        }
  }
}

</script>