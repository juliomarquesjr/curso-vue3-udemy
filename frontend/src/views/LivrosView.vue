<template>
    <div>
        <h1>Livros</h1>
        <Livros v-bind:livros-filho="livrosPai" v-slot="props">
            <!-- <Livros v-bind:livros-filho="livrosPai" v-slot="props"> -->
            <!-- <li>{{ props.idade }}</li> -->
            <li>{{ props.livroFilho.titulo }}</li>
        </Livros>
    </div>
</template>

<script setup>
import Livros from '@/components/Livros.vue';
import { reactive } from 'vue';

const livrosPai = reactive([
    {
        id: 1,
        titulo: "A arte da guerra",
        paginas: 189
    },
    {
        id: 2,
        titulo: "A biblioteca da meia noite",
        paginas: 360
    }
])

</script>