<template>
  <div class="display-pokemons">
    <div class="card">
      <img :src="pokemon.sprites.front_default" alt="" />
      <p>{{ pokemon.name }} {{pokemon.id}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonCard",
  props: ["pokemon"],
  data() {
    return {
    };
  },
};
</script>

<style>
.card {
  display: flex;
}
.display-pokemons {
  display: flex;
  flex-direction: row;
}
</style>