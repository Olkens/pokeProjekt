import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import PokemonSearch from "@/Components/pokemonPages/pokemonSearch";
import HomePage from "@/Components/HomePage";

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {path: '/', component: HomePage,},
        {path: '/pokemonPages/PokemonSearch', component: PokemonSearch}
    ],
})


createApp(App).use(router).mount('#app');

