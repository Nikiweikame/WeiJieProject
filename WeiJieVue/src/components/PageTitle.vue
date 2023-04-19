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
  <div :class="page.name + '__content contain'">
    <div class="row">
      <div class="col-6">
        <img :src="page.subImg" alt="" />
      </div>
      <div class="col-6">
        <slot />
      </div>
    </div>
  </div>
</template>
