<template>
    <div class="Header">
      <h1>My {{ name }} and this is my page</h1>
    </div>
</template>

<script>
    export default {
      props: ['name'],
      name: 'HeaderTitle',
    };
</script>
