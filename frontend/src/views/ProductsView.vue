<template>
    <div>
        <h1>Produtos Page</h1>
        <ul>
            <li v-for="user in users.data" :key="user.id">
                {{ user.first_name }} {{ user.last_name }} - Email: {{ user.email }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import http from "@/services/http.js";
import { onMounted, reactive } from "vue";

let users = reactive({data: []});

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
