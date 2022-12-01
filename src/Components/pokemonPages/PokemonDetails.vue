<template>
  <div>
    <PageHeader></PageHeader>
    
  <div class="main_box">
    <div>
    <div class="box">
    <p>Deafult</p>
    <img class="deafult" :src="pokemonDetails.sprites.front_default" >
    </div>
    <div class="box"> 
    <p>Shiny</p>
    <img class="shiny" :src="pokemonDetails.sprites.front_shiny" >
    </div>
  </div>

  <div class="detail_box">
  <div class="title"> No.{{ pokemonDetails.id}}  {{ pokemonDetails.name }} 
  </div>
<div class="details">  
  <p>
   Type : {{ types }}
   <br>
   Height : {{pokemonDetails.height}}
   <br>
   Weight : {{pokemonDetails.weight}}
    <br>
    Base Experience : {{pokemonDetails.base_experience}}
    <br>
    HP : {{ pokemonDetails.stats[0].base_stat }}
    <br>
    ATTACK :  {{ pokemonDetails.stats[1].base_stat }}
    <br>
    DEFENSE : {{ pokemonDetails.stats[2].base_stat }}
    <br>
    SPECIAL ATTACK : {{ pokemonDetails.stats[3].base_stat }}
    <br>
    SPECIAL DEFENSE : {{ pokemonDetails.stats[4].base_stat }}
    <br>
    SPEED : {{ pokemonDetails.stats[5].base_stat }}
  <br></p>
</div>
</div>
</div>
<div class="compare"><p>Compare with : </p></div>
</div>

</template>

<script>
import axios from "axios";
import PageHeader from "../PageHeader.vue";
export default {
  components: {PageHeader},
  name: "PokemonDetails",
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/" + this.$route.params.id,
      pokemonDetails: [],
      types: [],
    };
  },
  beforeMount() {
    axios.get(this.url).then((res) => {
      this.pokemonDetails = res.data;
      for(let i = 0; i < res.data.types.length; i++){
          this.types.push(res.data.types[i].type.name) 
      }
  });
  },
  };
</script>

<style>
.box {
  margin: 7px;
  width: min-content;
  padding: 3px;
}

.box, .compare, .detail_box { 
  background: #FFF9EF;
  box-shadow: 5px 5px 10px #00000040,
    10px 10px 20px #00000040;
  border-radius: 32px;
}

.compare {
  width: 30%;
  margin: 15px 35%;
}

.deafult { 
  width: 150px;
}

.detail_box { 
  height: 400px;
  width: 50%;
}
.details, .title { 
  color: #625E2E;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 0.2em;
  text-transform: capitalize;
  text-decoration: none;
}

.details, .title, .compare  {
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
  background: #FFCC03;
  border-radius: 32px 32px 0 0;
}

</style>