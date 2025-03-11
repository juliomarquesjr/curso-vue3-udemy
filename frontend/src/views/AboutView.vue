<template>
    <div>
        <h1>About Page</h1>
        <ProductsInfo :likes="info.likes" v-bind:comments="info.comments" />
    </div>
</template>

<script setup>
import ProductsInfo from '@/components/ProductsInfo.vue';
import { reactive } from 'vue';

const info = reactive({
    likes: 34,
    comments: 38
})

</script>
