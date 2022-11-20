<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HeaderTitle name="Michał"/>
  <SectionsFirst text="u lala"></SectionsFirst>
</template>

<script>
import axios from 'axios';

import HeaderTitle from './components/Header/HeaderTitle'
import SectionsFirst from "./components/Sections/SectionsFirst";


export default {
  name: 'App',
  components: {
    HeaderTitle,
    SectionsFirst,
  },
  data() {
    return {
      url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
    }
  },
  mounted() {
    axios.get(this.url).then((response) => {
      const dataArr = response.data.results;
      for(let i = 1; i < dataArr.length; i++) {
        console.log(dataArr[i].name);
      }

    }).catch(() => {

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
