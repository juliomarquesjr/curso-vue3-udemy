<template>
    <div>

        <Header v-if="showHeader" />

        <button v-on:click="count++">Botao 1 {{ count }}</button>
        <button @click="addmais2">Botao 2 {{ count }}</button>
        <h1>Produtos Page</h1>
        <ul>
            <li v-for="user in users.data" :key="user.id">
                {{ user.first_name }} {{ user.last_name }} - Email: {{ user.email }} 
                <span v-if="user.is_admin === 1">Administrador</span>
                <span v-else>Usuario Comum</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import http from "@/services/http.js";
import Header from "@/components/Header.vue";
import { onMounted, reactive, ref } from "vue";

let users = reactive({data: []});
const showHeader = false;
const count = ref(0);

function addmais2(){
    count.value+=2;
}

onMounted(async () => {
    try{
        const {data} = await http.get("api/users");
        users.data = data;
    }
    catch(error){
        console.error(error);
    }
});


</script>
