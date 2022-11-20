<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HeaderTitle name="Michał"/>
  <SectionsFirst text="u lala"></SectionsFirst>
  <SectionTwo text="u lala2"></SectionTwo>
</template>

<script>
import HeaderTitle from './components/Header/HeaderTitle'
import SectionsFirst from "./components/Sections/SectionsFirst";
import SectionTwo from "@/components/Sections/SectionTwo";


export default {
  name: 'App',
  components: {
    HeaderTitle,
    SectionsFirst,
    SectionTwo,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
