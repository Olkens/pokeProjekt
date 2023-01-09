<template>
  <div class="pokemonSearch">
    <input type="text" v-model="pokemonSearchInput" class="search-bar" placeholder="Wyszukaj pokemona" />
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
          <router-link class="router-display" :to="{ path: '/pokemonPages/PokemonDetails/' + pokemon.id }">
            <PokemonCard :pokemon="pokemon"></PokemonCard>
          </router-link>
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
  name: "PokemonSearch",
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
    sortPokemons() {
      this.pokemonsDetails.sort((a, b) => (a.id > b.id ? 1 : -1));
    },
  },
  computed: {
    filertPokemons() {
      this.sortPokemons();
      return this.pokemonsDetails.filter((p) =>
        p.name.includes(this.pokemonSearchInput)
      );
    },
  },
};
</script>

<style scoped lang="scss">
$color-grey: rgba(255, 255, 255, 0.5);
$color-orange: rgba(255, 172, 96, 0.6);
$color-black: #000;
$color-white: #ffffff;


.pokemonSearch {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  .search-bar {
    max-width: 877px;
    width: 100%;
    height: 64px;
    padding: 10px 26px;
    border-radius: 5px;
    border: 1px solid $color-black;
    height: 25px;
    background: $color-white;
    box-shadow: inset -2px -2px 4px $color-grey,
      inset 2px 2px 4px $color-orange,
      inset 5px 5px 10px $color-orange, inset -5px -5px 10px $color-white;
    border-radius: 40px;
    margin-bottom: 25px;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    .lds-roller{
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
        &div{
      animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 40px 40px;
        }
          &:after{
            content: " ";
            display: block;
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: $color-black;
            margin: -4px 0 0 -4px;
        }
          &:nth-child(1){
            animation-delay: -0.036s;
        }
          &:nth-child(1)::after{
            top: 63px;
            left: 63px;
        }
            &:nth-child(2) {
            animation-delay: -0.072s;
        }
          &:nth-child(2):after {
          top: 68px;
          left: 56px;
        }
          &:nth-child(3) {
          animation-delay: -0.108s;
        }
          &:nth-child(3):after {
          top: 71px;
          left: 48px;
        }
          &:nth-child(4) {
          animation-delay: -0.144s;
        }
          &:nth-child(4):after {
          top: 72px;
          left: 40px;
        }
          &:nth-child(5) {
          animation-delay: -0.18s;
        }
          &:nth-child(5):after {
          top: 71px;
          left: 32px;
        }
          &:nth-child(6) {
          animation-delay: -0.216s;
        }
          &:nth-child(6):after {
          top: 68px;
          left: 24px;
        }
          &:nth-child(7) {
          animation-delay: -0.252s;
        }
          &:nth-child(7):after {
          top: 63px;
          left: 17px;
        }
          &:nth-child(8) {
          animation-delay: -0.288s;
        }
          &:nth-child(8):after {
          top: 56px;
          left: 12px;
      }
    }
  }
  .display-pokemons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
    .router-display {
    text-decoration: none;
    color: $color-black;
    }
  }
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 412px) {
  .pokemonSearch {
    max-width: 350px;
  }
  .search-bar {
    height: 25px;
    margin-bottom: 25px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .display-pokemons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
}
@media only screen and (max-width: 360px) {
  .pokemonSearch {
    max-width: 250px;
  }
  .search-bar {
    height: 15px;
    margin-bottom: 25px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .display-pokemons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
}
@media only screen and (max-width: 384px) {
  .pokemonSearch {
    max-width: 250px;
  }
  .search-bar {
    height: 15px;
    margin-bottom: 25px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .display-pokemons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
}
@media only screen and (max-width: 810px) {
  .pokemonSearch {
    max-width: 600px;
  }
  .search-bar {
    height: 15px;
    margin-bottom: 25px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .display-pokemons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
}
@media only screen and (max-width: 375px) {
  .pokemonSearch {
    max-width: 250px;
  }

  .search-bar {
    height: 15px;
    margin-bottom: 25px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .display-pokemons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
} 
}
@media only screen and (max-width: 414px) {
  .pokemonSearch {
    max-width: 250px;
  }
  .search-bar {
    height: 25px;
    margin-bottom: 25px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .display-pokemons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
}
@media only screen and (max-width: 428px) {
  .pokemonSearch {
    max-width: 350px;
  }
  .search-bar {
    height: 25px;
    margin-bottom: 25px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .display-pokemons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
}
</style>