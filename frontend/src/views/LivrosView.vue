<template>
    <div>
        <h2>Livros</h2>
        <Livros v-bind:livrosFilho="livrosPAI" v-slot="propriedadesRecebidas">
            <li @click="getPaginas(propriedadesRecebidas.livroFilho.paginas)">{{ propriedadesRecebidas.livroFilho.titulo }}</li>
        </Livros>
    </div>

</template>

<script>
import Livros from '@/components/Livros.vue';
export default {

    components: {
        Livros
    },

    data() {
        return {
            livrosPAI: [
                {
                    titulo: "A arte da guerra",
                    paginas: 160,
                    autor: "Sun Stzu"
                },
                {
                    titulo: "A Biblioteca da Meia Noite",
                    paginas: 300,
                    autor: "Autora 1"
                },
                {
                    titulo: "Pai Rico e Pai Pobre",
                    paginas: 200,
                    autor: "Um japones"
                }
            ]
        }
    },

    methods: {
        getPaginas(paginas){
            console.log(paginas , "paginas do livro")
        }
    }
}
</script>