<template>
  <div>
    <h1>Slotes Option API</h1>
    <button @click="toggleModal">Abrir / Fechar</button>
    <Modal v-if="openModal">
      <template v-slot:header>
        <h2>Titulo do modal</h2>
      </template>

      <template v-slot:default>
        <h3>Conteudo do Slote sendo enviado!!</h3>
      </template>

      <template #footer>
        <p>Texto do modal aqui para o rodape</p>
      </template>
    </Modal>

    <h2>Lodash</h2>
    <input @keyup="search" placeholder="Pesquisar" />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import _ from "lodash"; //Importando a lib lodash

export default {
  data() {
    return {
      openModal: false,
    };
  },
  components: {
    Modal,
  },

  methods: {
    toggleModal() {
      this.openModal = !this.openModal;
    },

    //O debounce foi usado para somente executar a função apos alguns segundos, no caso 1 segundo
    search: _.debounce(() => {
      console.log("Aguardei e apertei");
    }, 1000),
  },
};
</script>
