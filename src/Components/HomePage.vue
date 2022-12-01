<template>
  <div class="main-container">
    <page-header></page-header>
    <ComponentOne/>
    <FooterF/>
  </div>
</template>

<script>
import FooterF from './FooterF.vue';
import ComponentOne from './ComponentOne.vue';
import PageHeader from './PageHeader.vue'
export default {
    name: "HomePage",
    components: { ComponentOne, PageHeader, FooterF}
}
</script>

<style scoped>
.main-container {
    min-height: 66vh;
}
</style>