<template>
  <div>
    <p>Likes Recebido: {{ likes }}</p>
    <p>Comentarios: {{ comments }}</p>
  </div>
</template>

<script>
export default {
  props: {
    likes: Number,
    comments: Number
  },
  name: "ProductsInfo"
};
</script>
