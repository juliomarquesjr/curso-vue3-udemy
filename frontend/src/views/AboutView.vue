<template>
  <div>
    <h1>About Page</h1>
    <ProductsInfo :likes="info.likes" v-bind:comments="info.comments" />

    <img
      src="https://picsum.photos/200"
      id="img"
      ref="imgRef"
      alt="Imagem randomica"
    />

    <ul>
      <li
        v-for="(item, index) in itens"
        v-bind:key="index"
        id="item"
        ref="itemRef"
      >
        Image
      </li>
    </ul>
  </div>
</template>

<script setup>
import ProductsInfo from "@/components/ProductsInfo.vue";
import { reactive, onMounted, ref } from "vue";

// Crie uma referência para o elemento da imagem
const imgRef = ref(null);
const itemRef = ref([]);

const info = reactive({
  likes: 34,
  comments: 38,
});

const itens = reactive([
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
]);

onMounted(() => {
  // console.log(document.querySelector("#img"));
  // console.log(document.querySelector("#img")["src"]);

  // console.log(imgRef.value); // Acesse a referência diretamente
  // console.log(imgRef.value.src); // Acesse a propriedade src da imagem
  // console.log(imgRef.value.alt); // Acesse a propriedade alt da imagem

  console.log(itemRef.value);
});
</script>
