<template>
  <div>
    <NavForm />
    <h2>Listar Usuarios</h2>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import NavForm from "@/components/NavForm.vue";

onMounted(() => {
  console.log("FormBackView");
});
</script>