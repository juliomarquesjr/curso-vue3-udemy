<template>
  <div>
    <h1>About Page</h1>
    <ProductsInfo :likes="products.likes" v-bind:comments="products.comments" />
  </div>
</template>

<style>
</style>

<script>
import ProductsInfo from "@/components/ProductsInfo.vue";

export default {
  components: {
    ProductsInfo,
  },

  data() {
    return {
      products: {
        likes: 10,
        comments: 40,
      },
    };
  },
  name: "AboutView.vue",
};
</script>