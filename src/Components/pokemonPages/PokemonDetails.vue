<template>
  <div>
    <PageHeader></PageHeader>

    {{ pokemonDetails.name }}
  </div>
</template>

<script>
import axios from "axios";
import PageHeader from "../PageHeader.vue";
export default {
  components: {PageHeader},
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