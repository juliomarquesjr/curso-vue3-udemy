<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <h2 id="my-app">APP</h2>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <router-link to="/about">About</router-link>
        <RouterLink to="/products">Produtos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/app.css";
</style>
