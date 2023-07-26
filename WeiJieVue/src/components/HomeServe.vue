<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const title = ref(`崴傑傳承家族辦公室提供一站式財富管理服務平台`);
// const serveItem = ref(["design", "manage", "develop", "property", "auction"]);
</script>
<style lang="scss" scoped>
.contain {
  padding: 60px 16px;
}
.title {
  margin: -30px auto;
  // width: 652px;
  padding: 30px;
  h2 {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #373f41;
    margin-bottom: 0;
  }
}
.content {
  margin: -30px -16px 0;
  padding: 0;
  justify-content: center;
}
.serve-item {
  padding: 0 16px;
  margin-top: 30px;
  position: relative;
  img {
    width: 100%;
  }
}
.serve-link {
  position: absolute;
  bottom: 0;
  left: 15px;
  right: 15px;
  height: 50px;
  padding: 5px 20px 10px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */
  letter-spacing: 0.2px;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 50%
  );
  color: #ffffff;
}
@media screen and (min-width: 1200px) {
  .contain {
    padding: 60px 150px;
  }
  .content {
    margin-top: -30px -15px;
    justify-content: center;
  }
}
</style>
<template>
  <div class="contain">
    <div class="title">
      <h2 v-html="title"></h2>
    </div>
    <div class="content row">
      <div
        class="col-12 col-xl-4 serve-item"
        v-for="item in counterStore.serveItem"
      >
        <img
          :src="counterStore[item]?.subImg"
          :alt="counterStore[item]?.name"
        />
        <RouterLink class="serve-link" :to="'/serve/' + item">{{
          counterStore[item]?.name
        }}</RouterLink>
      </div>
    </div>
  </div>
</template>
