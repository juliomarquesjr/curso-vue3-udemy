<template>
    <div>
        <template v-if="showHeader">
            <Header />
        </template>
        <template v-else>Sem Header</template>

        <h1>Produtos Page</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.first_name }} {{ user.last_name }} - Email: {{ user.email }} 
                <span v-if="user.is_admin === 1" style="">Admin</span>
                <span v-else>Usuário</span>
            </li>
        </ul>
    </div>
</template>

<script>
import http from "@/services/http.js";
import Header from "@/components/Header.vue";

export default {
    name: "ProductsView",

    components: {
        Header,
    },

    data() {
        return {
            users: [],
            showHeader: false,
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
