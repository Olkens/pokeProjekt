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
     <div class="arrow"> <img class="button button-left" src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png">
     </div> <div class="compare"><p>Compare with :</p><div class="search"><p>pokemon name</p></div></div>
<div class="arrow"><img class="button button-right" src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png">
</div></div></div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  name: "PokemonDetails",
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/" + this.$route.params.id,
      pokemonDetails: [],
      types: [],
    };
  },
  created() {
    axios.get(this.url).then((res) => {
      this.pokemonDetails = res.data;
      console.log(this.pokemonDetails);
      for (let i = 0; i < res.data.types.length; i++) {
        this.types.push(res.data.types[i].type.name);
        console.log(res.data.types.length);
      }
    });
  },
};
</script>

<style>
.botom_box { 
  display: flex;
  justify-content: center;
  width: 40%;
  margin: auto;
}

.box {
  margin: 7px;
  width: min-content;
  padding: 3px;
}

.box,.detail_box{
  background: #fff9ef;
}

.box,
.compare,
.detail_box {
  background: #fff9ef;
  box-shadow: 5px 5px 10px #00000040, 10px 10px 20px #00000040;
  border-radius: 32px;
}
.button{ 
  margin-top: 12px;
  width: 60px;
  height: 60px;
}

.button-left { 
 transform: rotate(180deg);
}

.compare {
  background: #ffcc03;
  display: flex;
  justify-content: center;
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
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
  text-align: left;
  padding: 18px;
}

.main_box {
  width: 65%;
  display: flex;
  justify-content: center;
  margin: auto;
}

.shiny {
  width: 120px;
}

.title {
  background: #ffcc03;
  border-radius: 32px 32px 0 0;
}
.search{
  background: #fff9ef;
  border-radius: 32px;
  box-shadow: inset -2px -2px 4px #ffffff80,
    inset -5px -5px 10px #FFFFFF,
    inset 5px 5px 10px #FFAC60;
  display: flex;
  justify-content: center;
  margin: 0 20px;
  width: 50%;
  }
</style>