<template>
  <div>
    <NavForm />
    <h1>Cadastrar Item</h1>
    <form action="">
      <label>First Name:</label>
      <input type="text" v-model="user.first_name" />
      <span v-if="errors.first_name">{{ errors.first_name[0] }}</span>

      <label>Last Name:</label>
      <input type="text" v-model="user.last_name" />
      <span v-if="errors.last_name">{{ errors.last_name[0] }}</span>

      <label>Email:</label>
      <input type="email" v-model="user.email" />
      <span v-if="errors.email">{{ errors.email[0] }}</span>

      <label>Password:</label>
      <input type="password" v-model="user.password" />
      <span v-if="errors.password">{{ errors.password[0] }}</span>

      <button type="submit" @click.prevent="create">Criar Produto</button>
    </form>
  </div>
</template>

<script>
import NavForm from "@/components/NavForm.vue";
import http from "@/services/http.js";

export default {
  name: "CreateProdutosView",
  components: {
    NavForm,
  },

  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
      errors: [],
    };
  },

  methods: {
    async create() {
      try {
        const { data } = await http.post("/api/user", this.user);
        console.log(data);
      } catch (errors) {
        this.errors = errors.response.data.errors;
        console.log(errors.response.data);
      }
    },
  },
};
</script>

<style scoped>
form span {
  color: red;
  font-size: 12px;
}
form {
  display: flex;
  flex-direction: column;
  width: 50%;
  /* margin: 0 auto; */
}

form label:nth-child(n + 2) {
  margin-top: 10px;
}

form button {
  margin-top: 30px;
}
</style>