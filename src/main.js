import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import vSelect from 'vue-select'

import App from './App.vue'
import PokemonSearch from './Components/pokemonPages/PokemonSearch'
import PokemonDetails from './Components/pokemonPages/PokemonDetails'
import HomePage from './Components/HomePage'
import PokemonBattle from './Components/pokemonPages/PokemonBattle'
import ComparePokemon from './Components/pokemonPages/ComparePokemon'


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {path: '/', component: HomePage,},
        {path: '/pokemonPages/PokemonSearch', component: PokemonSearch},
        {path: '/pokemonPages/PokemonDetails/:id', component: PokemonDetails},
        {path: '/pokemonPages/PokemonBattle', component: PokemonBattle},
        {path: '/pokemonPages/ComparePokemon', component: ComparePokemon}
    ],
})



createApp(App).component('v-select', vSelect).use(router).mount('#app');

