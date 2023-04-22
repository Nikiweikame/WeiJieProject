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
  h3 {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 52px;
    letter-spacing: 0.2px;
    color: #ffffff;
    text-align: center;
    margin: 0;
  }
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
  <div class="titleBox">
    <div class="titleContent">
      <h3>{{ page.title }}</h3>
      <p v-if="page.subtitle !== undefined">{{ page.subtitle }}</p>
    </div>
  </div>
</template>
