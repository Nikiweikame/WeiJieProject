<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<style lang="scss" scoped>
.home-contain {
  padding: 60px 150px;
}
.promise {
  margin: 0 auto 30px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.2px;
  color: #373f41;
}
.btn-primary {
  padding: 10px 60px;
  display: block;
  margin: 0 auto;
  width: 200px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.2px;
  color: #ffffff;
}
</style>
<template>
  <div class="home-contain">
    <p class="promise">對家的規劃有任何專業需求，歡迎與我們聯繫</p>
    <RouterLink to="/contact" class="btn btn-primary">聯絡崴傑</RouterLink>
  </div>
</template>
