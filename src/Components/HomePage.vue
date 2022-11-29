<template>
  <div>
    <router-link to="/pokemonPages/PokemonSearch">Wyszukiwarka</router-link>
    <ComponentOne/>
  </div>
</template>

<script>
import ComponentOne from './ComponentOne.vue';
export default {
    name: "HomePage",
    components: { ComponentOne }
}
</script>

<style scoped>
</style>