<template>
  <div>
    <h1>About Page</h1>
    <ProductsInfo :likes="products.likes" v-bind:comments="products.comments" />

    <h2>Imagem</h2>
    <img
      src="https://picsum.photos/200"
      id="img"
      ref="imgref"
      alt="Imagem randomica"
    />

    <ul>
      <li v-for="(item, index) in itens" :key="index" id="item" ref="itemref">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style>
</style>

<script>
import ProductsInfo from "@/components/ProductsInfo.vue";

export default {
  name: "AboutView.vue",
  components: {
    ProductsInfo,
  },

  data() {
    return {
      products: {
        likes: 10,
        comments: 40,
      },
      itens: [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }],
    };
  },

  mounted() {
    // console.log(document.querySelector("#img"));
    // console.log(document.querySelectorAll("#item"));
    console.log(this.$refs.imgref["alt"]);
    console.log(this.$refs.imgref["src"]);
    // console.log(this.$refs.itemref);
    // console.log(this.$refs.itemref);
  },
};
</script>