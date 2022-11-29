<template>
  <div class="pokemonSearch">
    <div>
      <router-link to="/">Start</router-link>
    </div>
    <input
      type="text"
      v-model="pokemonSearchInput"
      class="search-bar"
      placeholder="Wyszukaj pokemona"
    />
    {{ pokemonSearchInput }}
    <div v-if="pokemonsDetails.length < pokemons.length" class="flex-center">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div v-else>
      <div class="display-pokemons">
        <div v-for="pokemon in filertPokemons" :key="pokemon.id">
          <router-link
            class="router-display"
            :to="{ path: '/pokemonPages/PokemonDetails/' + pokemon.id }"
          >
            <PokemonCard :pokemon="pokemon"></PokemonCard
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCard from "./PokemonCard.vue";
import axios from "axios";

export default {
  components: {
    PokemonCard,
  },
  name: "pokemonSearch",
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
      pokemons: [],
      pokemonSearchInput: "",
      pokemonsDetails: [],
    };
  },
  created() {
    axios
      .get(this.url)
      .then((res) => {
        let data = res.data.results;
        this.pokemons = data;
      })
      .then(() => {
        this.getPokemons();
      });
  },

  methods: {
    getPokemons() {
      for (let i = 0; i < this.pokemons.length; i++) {
        axios.get(this.pokemons[i].url).then((res) => {
          this.pokemonsDetails.push(res.data);
        });
      }
    },
    sortPokemons(){
      this.pokemonsDetails.sort((a, b) => a.id > b.id ? 1 : -1)
    }
  },

  computed: {
    filertPokemons() {
      this.sortPokemons()
      return this.pokemonsDetails.filter((p) =>
        p.name.includes(this.pokemonSearchInput)
      );
    },
  },
};
</script>

<style>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
}
.pokemonSearch {
  max-width: 1200px;
  margin: 0 auto;
}

/* KARTY POKEMONÓW */
.display-pokemons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
}

.search-bar {
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  height: 25px;
}

.router-display {
  text-decoration: none;
  color: black;
}

/* SPINNER */
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #000;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
