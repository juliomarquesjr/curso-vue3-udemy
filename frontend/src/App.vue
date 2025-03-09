<template>

    <header>
      <h2 id="my-app">APP</h2>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <router-link to="/about">About</router-link>
          <RouterLink to="/products">Produtos</RouterLink>
          <RouterLink to="/form">Formulario</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #f1f1f1;
  padding: 10px;
}
</style>
