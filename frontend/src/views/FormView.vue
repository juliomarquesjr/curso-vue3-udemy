<template>
  <div>
    <h2>Formularios</h2>

    <p>
      <input type="text" id="input1" v-model="userName" />
    </p>

    <p>
      <template v-for="user in users" :key="user.id">
        <input
          type="checkbox"
          name=""
          @click="userName = user.firstName"
          :checked="userName === user.firstName"
        />{{ user.firstName }}
      </template>
    </p>

    <p>
      <select name="" v-model="userName">
        <option v-for="user in users" :value="user.firstName" :key="user.id">
          {{ user.firstName }}
        </option>
      </select>
    </p>
  </div>
</template>

<script>
export default {
  name: "FormView",

  data() {
    return {
      userName: "Julio Marques",

      users: [
        { id: 1, firstName: "Julio Cesar Marques" },
        { id: 2, firstName: "Ingrid Albuquerque" },
        { id: 3, firstName: "Otavio Marques" },
      ],
    };
  },
};
</script>