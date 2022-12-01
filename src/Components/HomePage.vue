<template>
  <div class="main-container">
    <ComponentOne />
  </div>
</template>

<script>
import ComponentOne from "./ComponentOne.vue";

export default {
  name: "HomePage",
  components: { ComponentOne },
};
</script>

<style scoped>
.main-container {
  min-height: 66vh; /* to jest tylko na chwile */
}
</style>