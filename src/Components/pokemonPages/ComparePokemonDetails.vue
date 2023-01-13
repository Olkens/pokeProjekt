<template>
    <div>
        <div class="details" v-if="Object.keys(pokemonDetails).length !== 0"> 
            <p>
                {{ pokemonDetails.name }}
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
            pokemonDetails: {}
        }
    },
    watch: {
        pokemon: function () {
            console.log(this.pokemon)
            this.fetchPokemon(this.pokemon);
        }
    },
    methods: {
        fetchPokemon(pokemon) {
            axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon).then((res) => {
                this.pokemonDetails = res.data
                console.log("done")
            })
        }
    }

}
</script>
<style lang="">
    
</style>