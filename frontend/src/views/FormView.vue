<template>
  <div>
    <h2>Formularios</h2>

    <p><input type="text" v-model="userName" /></p>

    <p>
      <template v-for="user in users" :key="user.id">
        <input
          type="checkbox"
          :value="user.firstName"
          @change="userName = user.firstName"
          v-bind:checked="userName === user.firstName"
        />
        {{ user.firstName }}
      </template>
    </p>

    <p>
      <select v-model="userName">
        <option v-for="user in users" :key="user.id" :value="user.firstName">
          {{ user.firstName }}
        </option>
      </select>
    </p>
    
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const userName = ref("Julio Marques");
const users = reactive([
  {
    id: 1,
    firstName: "Julio Marques",
  },
  {
    id: 2,
    firstName: "Ingrid Marques",
  },
  {
    id: 3,
    firstName: "Otavio Marques",
  },
]);
</script>