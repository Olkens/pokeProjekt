<template>
  <div>
    <div class="main_box">
      <div>
        <div class="box">
          <p>Deafult</p>
          <img class="deafult" :src="pokemonDetails.sprites.front_default" />
        </div>
        <div class="box">
          <p>Shiny</p>
          <img class="shiny" :src="pokemonDetails.sprites.front_shiny" />
        </div>
      </div>

      <div class="detail_box">
        <div class="title">
          No.{{ pokemonDetails.id }} {{ pokemonDetails.name }}
        </div>
        <div class="details">
          <p>
            Type :
            <span v-for="(type, index) in types" :key="index">
              <span v-if="index == types.length - 1">{{ type }}</span>
              <span v-else> {{ type }}, </span>
            </span>
            <br />
            Height : {{ pokemonDetails.height }}
            <br />
            Weight : {{ pokemonDetails.weight }}
            <br />
            Base Experience : {{ pokemonDetails.base_experience }}
            <br />
            HP : {{ pokemonDetails.stats[0].base_stat }}
            <br />
            ATTACK : {{ pokemonDetails.stats[1].base_stat }}
            <br />
            DEFENSE : {{ pokemonDetails.stats[2].base_stat }}
            <br />
            SPECIAL ATTACK : {{ pokemonDetails.stats[3].base_stat }}
            <br />
            SPECIAL DEFENSE : {{ pokemonDetails.stats[4].base_stat }}
            <br />
            SPEED : {{ pokemonDetails.stats[5].base_stat }} <br />
          </p>
        </div>
      </div>
    </div>
    <div class="botom_box">
      <div v-if="pokemonDetails.id > 1">
        <button @click="loadPokemonDetailsById(pokemonId - 1)"  class="arrow">
          <img
            class="button button-left"
            src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png"
          />
        </button>
      </div>
      <div class="compare">
        <p>Compare with :</p>
        <div class="search"><p>pokemon name</p></div>
      </div>
      <div v-if="pokemonDetails.id < 151">
        <button @click="loadPokemonDetailsById(pokemonId + 1)" class="arrow">
          <img
            class="button button-right"
            src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  name: "PokemonDetails",
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/" + this.$route.params.id,
      pokemonId: 0,
      pokemonDetails: [],
      types: [],
    };
  },
  created() {
    this.loadPokemonDetailsById(this.$route.params.id);
  },

  methods: {
    async loadPokemonDetailsById(pokemonId) {
      this.pokemonDetails = [];
      this.types = [];
      await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonId).then((res) => {
          this.pokemonDetails = res.data;
          this.pokemonId = res.data.id;
          for (let i = 0; i < res.data.types.length; i++) {
            this.types.push(res.data.types[i].type.name);
          }
        });
    },
  },
};
</script>

<style scoped>
button {
  background: #fff9ef;
  border: none;
  border-radius: 40px;
  box-shadow: 5px 5px 10px #00000017, 10px 10px 20px #00000017;
  height: min-content;
  width: min-content;
}

.botom_box {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 20px;
  width: 40%;
}

.box {
  margin: 7px;
  padding: 3px;
  width: min-content;
}
button, 
.box,
.detail_box,
.detail_box  {
  background: #fff9ef;
}

.box,
.compare,
.detail_box {
  border-radius: 32px;
  box-shadow: 5px 5px 10px #00000040, 10px 10px 20px #00000040;
}

.button {
  margin-top: 12px;
  width: 60px;
}

.button-left {
  transform: rotate(180deg);
}

.compare {
  background: #ffcc03;
  display: flex;
  margin: auto;
  margin-bottom: 20px;
  justify-content: center;
  width: 60%;
}

.deafult {
  width: 150px;
}

.detail_box {
  height: 400px;
  width: 50%;
}
.details,
.title {
  color: #625e2e;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 0.2em;
  text-transform: capitalize;
  text-decoration: none;
}

.details,
.title,
.compare {
  padding: 18px;
  text-align: left;
}

.main_box {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 65%;
}

.shiny {
  width: 120px;
}

.title {
  background: #ffcc03;
  border-radius: 32px 32px 0 0;
}
.search {
  background: #fff9ef;
  box-shadow: inset 2px 2px 4px #ffac6099, inset 5px 5px 10px #ffac6080,
    inset -5px -5px 10px #ffffff;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  width: 50%;
}
</style>