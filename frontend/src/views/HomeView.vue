<template>
  <main>
    <Header />
    <h1>Home Page</h1>
    <button v-on:click="count++">Count: {{ count }}</button>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: {
    Header
  },

  data() {
    return {
      count: 1
    }
  },

  methods: {
    increment() {
      console.log("Incrementando...");
      this.count++
    }
  },
  
  mounted() {
    console.log("Montado...");
  },

  updated() {
    console.log("Atualizando...")
  }
}
</script>
