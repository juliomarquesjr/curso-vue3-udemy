<template>
    <div>
        <!-- <slot v-for="livro in livrosFilho" :key="livro.id" v-bind:idade="30"></slot> -->
        <slot v-for="livro in livrosFilho" :key="livro.id" v-bind:livroFilho="livro"></slot>
    </div>
</template>

<script setup>
defineProps(['livrosFilho']);
</script>