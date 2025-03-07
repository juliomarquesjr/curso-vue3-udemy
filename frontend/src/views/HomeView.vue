<template>
  <main>
    <Header />
    <h1>Home Page</h1>
    <h3>Contador: {{ count }}</h3>
    <button v-on:click="count++">Adicionar</button>
  </main>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue';

const count = ref(7)

onMounted(() => {
  console.log('Home page montada');
}),

onUpdated(() => {
  console.log('Atualizando renderização');
})

</script>