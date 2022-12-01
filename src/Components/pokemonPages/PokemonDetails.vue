<template>
      <router-link to="/"> Home </router-link>
      <div class="container">
  <div class="Default"><img src="https://fakeimg.pl/300/"></div>
  <div class="Shiny"><img src="https://fakeimg.pl/300/"></div>
  <div class="description">
    <div class="name">{{pokemonDetails.name}}</div>
  </div>
  <div class="compare">Porównaj</div>
  <div class="button-left"><div class="arr left"><div></div></div></div>
  <div class="button-right"><div class="arr right"><div></div></div></div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "PokemonDetails",
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/" + this.$route.params.id,
      pokemonDetails: []
    };
  },
  beforeMount() {
    axios.get(this.url).then((res) => {
        this.pokemonDetails = res.data;
        console.log(res.data)
    });
  },
};
</script>

<style scoped>
.container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "Default description description"
    "Shiny description description"
    "button-left compare button-right";
}

.Default {
  grid-area: Default;
  width: 70%;
  height: 70%;
}

.Shiny {
  grid-area: Shiny;
  width: 60%;
  height: 60%;
}

.description {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "name name name"
    ". . ."
    ". . .";
  grid-area: description;
  width: 90%;
  height: 90%;
  background-color: #f1f1f1;
}

.name {
  justify-self: center;
  align-self: start;
  grid-area: name;
  width: 100%;
  background-color: yellow;
}

.compare {
  grid-area: compare;
  width: 100%;
}

.button-left { 
  grid-area: button-left;
}

.button-right { 
  grid-area: button-right;
  height: 100vh;
  display: flex;
  
}
body{
  margin: 0;
  padding: 0;
}
.arr{
  position: relative;
  background-color: black;
}
</style>