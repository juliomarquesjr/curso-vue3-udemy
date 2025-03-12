<template>
    <div>
        <h1>Slotes</h1>
        <button v-on:click="() => openModal = !openModal">Abrir Modal</button>
        <button @click="() => openModal = !openModal">Abrir Modal</button>

        <Modal v-if="openModal">
            <template v-slot:header>
                <h2>Header do Modal</h2>
            </template>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis itaque cum magnam
                necessitatibus quae corporis, expedita molestiae placeat natus totam? Tempora soluta neque dolorem
                quibusdam odit voluptatibus nulla reprehenderit?</p>
            <template v-slot:footer>
                <h3>Footer do modal</h3>
            </template>
        </Modal>

    </div>
</template>

<script setup>
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

const openModal = ref(false)
</script>