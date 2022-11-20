<template>
  <div>
    <p>This is second component and the content is: {{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ['text'],
  name: 'SectionTwo'
}
</script>