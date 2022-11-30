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
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 background: #FFF9EF;
 margin: 0;
 padding: 0;
 display:flex;
 justify-content: center;
}
</style>
