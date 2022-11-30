<template>
  <div>
    <page-header></page-header>
    <ComponentOne/>
  </div>
</template>

<script>
import ComponentOne from './ComponentOne.vue';
import PageHeader from './PageHeader.vue'
export default {
    name: "HomePage",
    components: { ComponentOne, PageHeader }
}
</script>

<style scoped>
</style>