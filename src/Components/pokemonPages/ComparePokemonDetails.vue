<template>
    <div v-if="Object.keys(pokemonDetails).length !== 0">
        <div class="box">
            <p>Deafult</p>
            <img class="deafult" :src="pokemonDetails.sprites.front_default" />
        </div>
        <div class="box">
            <p>Shiny</p>
            <img class="shiny" :src="pokemonDetails.sprites.front_shiny" />
        </div>
        <div class="details">
            <div class="title">
                No.{{ pokemonDetails.id }} {{ pokemonDetails.name }}
            </div>
            <p>
                Type :
                <span v-for="(type, index) in types" :key="index">
                    <span v-if="index == types.length - 1">{{ type }}</span>
                    <span v-else> {{ type }}, </span>
                </span>
                <br />
                Height : {{ pokemonDetails.height }}
                <br />
                Weight : {{ pokemonDetails.weight }}
                <br />
                Base Experience : {{ pokemonDetails.base_experience }}
                <br />
                HP : {{ pokemonDetails.stats[0].base_stat }}
                <br />
                ATTACK : {{ pokemonDetails.stats[1].base_stat }}
                <br />
                DEFENSE : {{ pokemonDetails.stats[2].base_stat }}
                <br />
                SPECIAL ATTACK : {{ pokemonDetails.stats[3].base_stat }}
                <br />
                SPECIAL DEFENSE : {{ pokemonDetails.stats[4].base_stat }}
                <br />
                SPEED : {{ pokemonDetails.stats[5].base_stat }} <br />
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['pokemon'],
    data() {
        return {
            pokemonDetails: {},
            types: []
        }
    },
    watch: {
        pokemon: function () {
            this.fetchPokemon(this.pokemon);
        }
    },
    methods: {
        fetchPokemon(pokemon) {
            axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon).then((res) => {
                this.pokemonDetails = res.data
                this.types = []
                for (let i = 0; i < res.data.types.length; i++) {
                    this.types.push(res.data.types[i].type.name);
                }
            })
        }
    }

}
</script>
<style lang="">
    
</style>