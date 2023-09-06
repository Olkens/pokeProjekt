<template>
    <div class="main-container">
        <v-select :options=pokemons v-model="firstPokemon"></v-select>
        <ComparePokemonDetails :pokemon="firstPokemon"></ComparePokemonDetails>
        <ComparePokemonDetails :pokemon="secondPokemon"></ComparePokemonDetails>
        <v-select :options=pokemons v-model="secondPokemon"></v-select>
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
    methods: {
        async getFirstPokemon() {
            await axios.get("https://pokeapi.co/api/v2/pokemon/" + this.firstPokemon).then((res) => {
                this.firstPokemonData = res.data
                for (let i = 0; i < res.data.types.length; i++) {
                    this.firstPokemonTypes.push(res.data.types[i].type.name);
                }
            })
        },
        async getSecondPokemon() {
            await axios.get("https://pokeapi.co/api/v2/pokemon/" + this.secondPokemon).then((res) => {
                this.secondPokemonData = res.data
                for (let i = 0; i < res.data.types.length; i++) {
                    this.secondPokemonTypes.push(res.data.types[i].type.name);
                }
            })
        },
        async comparePokemons() {
            console.log(this.pokemons)
            if (this.pokemons.includes(this.firstPokemon) && this.pokemons.includes(this.secondPokemon)) {
                await this.getFirstPokemon()
                await this.getSecondPokemon()
                console.log(this.firstPokemonData.name + " " + this.secondPokemonData.name)
            }
        }
    }


}
</script>
<style lang="scss" scoped>
@import "vue-select/dist/vue-select.css";

.main-container {
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .select-box{
        display: flex;
        justify-content: center;
        gap: 45px;
        border-radius: 10px;
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