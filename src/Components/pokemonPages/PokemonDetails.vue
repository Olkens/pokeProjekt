<template>
  <div>
    {{ pokemonDetails.name }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  name: "PokemonDetails",
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/" + this.$route.params.id,
      pokemonDetails: [],
    };
  },
  beforeMount() {
    axios.get(this.url).then((res) => {
      this.pokemonDetails = res.data;
      console.log(res.data);
    });
  },
};
</script>

<style>
</style>