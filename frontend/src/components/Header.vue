<template>
    <main>
      <h1>Home Page</h1>
              <!-- <img :src="image" alt="Imagem" /> -->
              <img v-bind:src="image" alt="Imagem" />
    </main>
  </template>

<script setup>
import { ref } from 'vue';

const image = ref("https://picsum.photos/300/300");
</script>