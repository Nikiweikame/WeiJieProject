<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<style lang="scss" scoped>
.company {
  &-name {
    height: 60px;
  }
  &-describe {
    margin-top: 20px;
    margin-bottom: 0;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.2px;

    color: #ffffff;
  }
}
</style>
<template>
  <div>
    <RouterLink to="/">
      <img
        class="company-name"
        src="../assets/images/CompanyName.png"
        alt="崴傑傳承家族辦公室"
      />
    </RouterLink>
    <p class="company-describe">在崴傑，您對家的夢想，由我們守護。</p>
  </div>
</template>
