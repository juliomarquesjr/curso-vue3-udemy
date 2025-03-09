<template>
    <div>
        <h1>Header Aqui</h1>
        <h2>Componente usado para testes</h2>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Header montado...");
    },

    unmounted() {
        console.log("Header desmontado...");
    }
}
</script>
