<template>
  <div>
    <router-link to="/pokemonPages/PokemonSearch">Wyszukiwarka</router-link>
    <h1>Welcome home</h1>
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