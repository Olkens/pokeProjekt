<template>
  <div class="main-container">
    <div>
      <page-header></page-header>
    </div>
    <router-link to="/pokemonPages/pokemonSearch" />
    <router-view class="main-height"></router-view>
    <div>
      <footer-f></footer-f>
    </div>
  </div>
</template>

<script>
import FooterF from './Components/FooterF.vue';
import PageHeader from './Components/PageHeader.vue';
export default {
  name: 'App',
  components: { FooterF, PageHeader },
  data() {
    return {
    }
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #FFF9EF;
  margin: 0;
  padding: 0;
}
</style>
