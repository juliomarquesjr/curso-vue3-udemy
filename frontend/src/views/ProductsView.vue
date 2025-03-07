<template>
    <div>
        <h1>Produtos Page</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.first_name }} {{ user.last_name }} - Email: {{ user.email }}
            </li>
        </ul>
    </div>
</template>

<script>
import http from "@/services/http.js";

export default {
    name: "ProductsView",

    data() {
        return {
            users: [],
        };
    },

    async mounted() {
        try {
            this.users = await this.getUsers();
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        async getUsers() {
            const { data } = await http.get("/api/users");
            return data;
        }
    },

};
</script>
