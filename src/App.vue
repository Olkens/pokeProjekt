<template>
  <div>
    <router-link to="/pokemonPages/pokemonSearch"/>
    <router-view></router-view>
<!--    <div v-for="pokemon in poksyDetails" :key="pokemon.id">-->
<!--      <div>{{ pokemon.id }} {{ pokemon.name }}, wysokość: {{ pokemon.height }}</div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
    }
  },
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
