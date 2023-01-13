<template>
    <div class="main-container">
        <div class="select-box">
            <v-select :options=pokemons v-model="firstPokemon" class="select"></v-select>
            <v-select :options=pokemons v-model="secondPokemon" class="select"></v-select>
        </div>
        <div class="pokemon-box">
            <ComparePokemonDetails :pokemon="firstPokemon"></ComparePokemonDetails>
            <ComparePokemonDetails :pokemon="secondPokemon"></ComparePokemonDetails>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import ComparePokemonDetails from './ComparePokemonDetails.vue';
export default {

    components: {
        ComparePokemonDetails
    },
    data() {
        return {
            url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
            pokemons: [],
            firstPokemon: 'Wybierz pierwszego pokemona',
            secondPokemon: 'Wybierz drugiego pokemona',

        }
    },
    created() {
        axios
            .get(this.url)
            .then((res) => {
                let data = res.data.results;
                this.pokemons = data.map((p) => {
                    return p.name
                });
            })
    },

}
</script>
<style lang="scss" scoped>
@import "vue-select/dist/vue-select.css";

.main-container {
    max-width: 1290px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .select-box{
        display: flex;
        justify-content: center;
        gap: 45px;
        .select{
            max-width: 400px;
        }
    }
    .pokemon-box {
        display: flex;
        justify-content: center;
        gap: 45px;
    }
}
</style>