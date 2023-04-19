<script setup>
defineProps({
  page: {
    type: Object,
  },
});
</script>
<style lang="scss" scoped></style>
<template>
  <div :class="page.name + '__titleBox'">
    <div :class="page.name + '__titleContent'">
      <h3>{{ page.title }}</h3>
      <p>{{ page.subtitle }}</p>
    </div>
  </div>
</template>
