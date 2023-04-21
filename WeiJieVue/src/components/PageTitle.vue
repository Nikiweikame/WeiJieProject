<script setup>
defineProps({
  page: {
    type: Object,
  },
});
</script>
<style lang="scss" scoped>
.titleBox {
  padding: 90px 16px;
  height: 300px;
}
.titleContent {
  width: 100%;
}
@media screen and (min-width: 1200px) {
  .titleBox {
    padding: 116px 0 45px;
  }

  .titleContent {
    width: 500px;
  }
}
</style>
<template>
  <div :class="page.name + '__titleBox'" class="titleBox">
    <div :class="page.name + '__titleContent'" class="titleContent">
      <h3>{{ page.title }}</h3>
      <p>{{ page.subtitle }}</p>
    </div>
  </div>
</template>
