<script setup>
defineProps({
  page: {
    type: Object,
  },
  title: {
    type: String,
  },
});
</script>
<style lang="scss" scoped>
.titleBox {
  padding: 90px 16px 91px;
  height: 300px;
  background-size: cover;
}
.titleContent {
  height: 119px;
  margin: 0 auto;
  padding: 12px 0px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  letter-spacing: 0.2px;
  font-style: normal;
  width: 100%;
  h3 {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 52px;
    letter-spacing: 0.2px;
    color: #ffffff;
    text-align: center;
    margin: 0 0 20px;
  }
  p {
    font-family: "Noto Sans TC";
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #ffffff;
    margin-bottom: 0;
  }
}
@media screen and (min-width: 1200px) {
  .titleBox {
    padding: 116px 0 65px;
    background-size: cover;
  }

  .titleContent {
    padding: 8px 8px 16px;
    width: 500px;
  }
}
</style>
<template>
  <div class="titleBox">
    <div class="titleContent">
      <h3>{{ title }}</h3>
      <p v-if="page.subtitle !== undefined">{{ page.subtitle }}</p>
    </div>
  </div>
</template>
