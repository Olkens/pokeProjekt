<template>
  <div>
    <div v-for="pokemon in poksyDetails" :key="pokemon.id">
      <div>{{ pokemon.id }} {{ pokemon.name }}, wysokość: {{ pokemon.height }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'App',
  components: {},
  data() {
    return {
      url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151',
      poksy: [],
      poksyDetails: [],
    }
  },
  mounted() {
    axios.get(this.url).then((response) => {
      const dataArr = response.data.results;
      for (let i = 0; i < dataArr.length; i++) {
        console.log(dataArr[i].url);
        this.poksy.push(dataArr[i])
        axios.get(dataArr[i].url).then((res) => {
          this.poksyDetails.push(res.data)
        })
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {

    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
