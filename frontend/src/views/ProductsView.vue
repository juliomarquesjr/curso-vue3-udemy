<template>
    <div>
        <template v-if="showHeader">
            <Header />
        </template>
        <template v-else>Sem Header</template>
        
        <button v-on:click="count++">Botao 1 {{ count }}</button>
        <button @click="count++">Botao 2 {{ count }}</button>
        <input type="text" v-on:keyup="add" />
        <input type="text" @keyup="add" />
        
        <p>
            <span>Meu Nome: {{ myName }}</span><br />
            <input type="text" v-model="myName" />
        </p>

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
            showHeader: true,
            count: 0,
            myName: "Julio",
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
        },

        add(event) {
            this.count+=Number(event.target.value);
            console.log(event.target.value);
        }
    },

};
</script>
