<template>
    <div class="main_box">
        <img class="team_img" src="https://images.wikidexcdn.net/mwuploads/wikidex/0/02/latest/20221113131941/Ash_%28Viajes_Pok%C3%A9mon%29_2.png">
    <div class="group_box">
        <div class="title">
          Your group
        </div>
        <div class="box">
        <p>No.{{yourPokemonId}}</p>
          <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + yourPokemonId + '.png'">
           </div> 
        </div>
    <img class="team_img" src="https://www.pngall.com/wp-content/uploads/5/Versus-PNG-HD-Image.png">
    <div class="group_box">
        <div class="title">
            Team R group
        </div>
       <div class="box">
          <p>No.{{rPokemonId}}</p>
          <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + rPokemonId + '.png'">
                </div> 
    </div>
    <img class="team_img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da4c8018-fd02-405a-aa3d-9ed90468efed/ddg2er4-1a8dd0ce-9c16-4c8b-8b67-caea38ca0473.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RhNGM4MDE4LWZkMDItNDA1YS1hYTNkLTllZDkwNDY4ZWZlZFwvZGRnMmVyNC0xYThkZDBjZS05YzE2LTRjOGItOGI2Ny1jYWVhMzhjYTA0NzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R1O8FP6F_LP7QCy15pv4ks2o9-Rt0bo083-iyk-nUqA">
</div>

 <button @click="fight">Start Battle!</button>
 <div class="box" v-if="battleLog != ''">{{ battleLog }}</div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['pokemon'],
  name: "PokemonBattle",
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
      pokemons: [],
      yourPokemonId: Math.floor(Math.random() * (151 - 1 + 1)) + 1,
      rPokemonId: Math.floor(Math.random() * (151 - 1 + 1)) + 1,
      yourPokemonDetails: {},
      rPokemonDetails: {},
      battleLog: '',
    };
  },
  created() {
      this.loadYourPokemonDetails(this.yourPokemonId);
      this.loadRPokemonDetails(this.rPokemonId);
    },
  methods: {
    async loadYourPokemonDetails(pokemonId) {
      this.yourPokemonDetails = {};
      await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonId).then((res) => {
          this.yourPokemonDetails = res.data;
          this.yourPokemonId = res.data.id;
          console.log(this.yourPokemonDetails.stats[1].base_stat + ' ' + this.yourPokemonDetails.stats[0].base_stat)
        });
    },
    async loadRPokemonDetails(pokemonId) {
      this.rPokemonDetails = {};
      await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonId).then((res) => {
          this.rPokemonDetails = res.data;
          this.rPokemonId = res.data.id;
          console.log(this.rPokemonDetails.stats[1].base_stat + ' ' + this.rPokemonDetails.stats[0].base_stat)
        });
    },
    fight() {
      let yourPokemonHP = this.yourPokemonDetails.stats[0].base_stat;
      let rPokemonHP = this.rPokemonDetails.stats[0].base_stat;
      let yourPokemonAttack = parseInt( this.yourPokemonDetails.stats[1].base_stat);
      let rPokemonAttack = parseInt( this.rPokemonDetails.stats[1].base_stat);
      console.log('Your Pokemon Attack is: ' + yourPokemonAttack);
      console.log('Team Rocket Pokemon Attack is: ' + rPokemonAttack);
      console.log('Your HP is: ' + yourPokemonHP);
      console.log('Team Rocket HP is: ' + rPokemonHP);
       while(rPokemonHP > 0 || yourPokemonHP > 0){
        if(yourPokemonAttack > rPokemonAttack) {
          rPokemonHP -= 2;
        } else {
          rPokemonHP -= 1;
        }
        if (rPokemonAttack > yourPokemonAttack) {
          yourPokemonHP -= 2;
        } else {
          yourPokemonHP -= 1;
        }
        console.log('R HP ' + rPokemonHP);
        console.log('Your HP ' + yourPokemonHP);
        if (rPokemonHP <= 0 || yourPokemonHP <= 0){
          break;
        }
       }  
      if (rPokemonHP <= 0) {
        this.battleLog = "You win! Team Rocket's Blasting Off Again."
      } else if (yourPokemonHP <= 0){
        this.battleLog = 'Oh, no! Team go Rocket wins!'
      }
      }
    }
  }


</script>
<style scoped lang="scss">
.main_box {
    display: flex;
    align-items: center;
    justify-content: center;
    .team_img {
    height: 30vh;
    }
    .group_box { 
    width: auto;
    .box, .group_box {
    border-radius: 32px;
    box-shadow: 5px 5px 10px #00000040, 10px 10px 20px #00000040;
    height: auto;
    margin: 10px;
    padding: 10px;
    .title {
    background: #ffcc03;
    border-radius: 32px 32px 0 0;
    color: #625e2e;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    letter-spacing: 0.2em;
    padding: 18px;
    text-transform: capitalize;
    text-decoration: none;
}
    }
  }
}
button {
  background: #6061c4;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25),
    10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  margin: 25px;
  padding: 16px 60px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  text-decoration: none;
  font-size: calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)));
  color: #fff;
  letter-spacing: 0.19em;
}
.box {
    width:auto;
    border-radius: 32px;
    box-shadow: 5px 5px 10px #00000040, 10px 10px 20px #00000040;
    height: auto;
    margin: 10px;
    padding: 10px;
    }

@media screen and (max-width: 375px) {
  .main_box {
    display: flex;
    align-items: center;
    justify-content: center;
    .team_img {
    height: 10vh;
    }
    .group_box { 
    width: 50%;
    .box, .group_box {
    border-radius: 32px;
    box-shadow: 5px 5px 10px #00000040, 10px 10px 20px #00000040;
    height: auto;
    margin: 1px;
    padding: 5px;
    .title {
    background: #ffcc03;
    border-radius: 32px 32px 0 0;
    color: #625e2e;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    letter-spacing: 0.2em;
    padding: 18px;
    text-transform: capitalize;
    text-decoration: none;
}
    }
    .box {
    width:auto;
    }
  }
}
}

@media screen and (max-width: 428px) {
  .main_box {
    display: flex;
    align-items: center;
    justify-content: center;
    .team_img {
    height: 10vh;
    }
    .group_box { 
    width: 50%;
    .box, .group_box {
    border-radius: 32px;
    box-shadow: 5px 5px 10px #00000040, 10px 10px 20px #00000040;
    height: auto;
    margin: 1px;
    padding: 5px;
    .title {
    background: #ffcc03;
    border-radius: 32px 32px 0 0;
    color: #625e2e;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    letter-spacing: 0.2em;
    padding: 18px;
    text-transform: capitalize;
    text-decoration: none;
}
    }
    .box {
    width:auto;
    }
  }
}
button {
  background: #6061c4;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25),
    10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  margin: 25px;
  padding: 16px 60px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  text-decoration: none;
  font-size: calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)));
  color: #fff;
  letter-spacing: 0.19em;
}
}
</style>
