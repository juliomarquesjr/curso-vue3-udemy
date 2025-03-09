<template>
    <div>
        <h1>Header Aqui</h1>
        <!-- <img :src="image" alt="Imagem" /> -->
        <img v-bind:src="image" alt="Imagem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: "https://picsum.photos/300/300",
        };
    },

    mounted() {
        console.log("Header montado...");
    },

    unmounted() {
        console.log("Header desmontado...");
    }
}
</script>
