<template>
    <div>

        <Header v-if="showHeader" />

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
import { onMounted, reactive } from "vue";

let users = reactive({data: []});
const showHeader = true;

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
