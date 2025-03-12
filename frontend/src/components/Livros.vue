<template>
    <div>
        <ul>
            <slot v-for="(livrolinha, index) in livrosFilho" :key="index" v-bind:livroFilho="livrolinha"></slot>
        </ul>
    </div>

</template>
<script>
export default {
    props: ['livrosFilho']
}
</script>