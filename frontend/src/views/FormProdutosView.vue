<template>
    <div>
        <NavForm />  
        <h2>Lista de Produtos</h2>
    </div>
</template>

<script>
import NavForm from "@/components/NavForm.vue";
export default {
  name: "FormProdutosView",

  components: {
    NavForm,
  },

  data() {
    return {};
  },
};
</script>