<template>
  <div class="display-pokemons">
    <div class="card">
      <img :src="pokemon.sprites.front_default" alt="" />
      <p class="pokemon-name">{{ pokemon.name }}</p>
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
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: center;
  gap: 10px;
}
.pokemon-name{
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0;
}
</style>