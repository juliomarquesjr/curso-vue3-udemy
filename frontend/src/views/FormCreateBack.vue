<template>
  <div>
    <NavForm />
    <h2>Criar Usuarios</h2>

    <form action="">
      <label>Primeiro nome</label>
      <input
        type="text"
        placeholder="Primeiro nome"
        v-model="user.first_name"
      />
      <span v-if="errorsForm['errors'].first_name">{{
        errorsForm.errors.first_name[0]
      }}</span>

      <label>Segundo Nome</label>
      <input type="text" placeholder="Segundo Nome" v-model="user.last_name" />
      <span v-if="errorsForm.errors.last_name">{{
        errorsForm.errors.last_name[0]
      }}</span>

      <label>Email</label>
      <input type="email" placeholder="E-mail" v-model="user.email" />
      <span v-if="errorsForm.errors.email" >{{ errorsForm.errors.email[0]}}</span>

      <label>Senha</label>
      <input type="password" placeholder="Senha" v-model="user.password" />
      <span v-if="errorsForm.errors.password" >{{ errorsForm.errors.password[0] }}</span>

      <button type="submit" @click.prevent="create">Cadastrar Usuario</button>
    </form>
  </div>
</template>

<script setup>
import NavForm from "@/components/NavForm.vue";
import http from "@/services/http.js";
import { reactive } from "vue";

const user = reactive({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
});

const errorsForm = reactive({ errors: {} });

async function create() {
  try {
    const { data } = await http.post("/api/user", user);
    console.log("Recebido: ", data);
  } catch (error) {
    errorsForm.errors = error.response.data.errors;
    console.log("Erro recebido: ", error.response.data);
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
}

form label:nth-child(n + 2) {
  margin-top: 10px;
}

form button {
  margin-top: 20px;
}

form span {
  color: red;
  font-size: 12px;
}
</style>