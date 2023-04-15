<script setup>
defineProps({
  copyRightText: {
    type: String,
  },
});
</script>
<style lang="scss"></style>
<template>
  <p>{{ copyRightText }}</p>
</template>
