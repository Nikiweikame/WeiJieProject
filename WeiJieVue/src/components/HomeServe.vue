<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const title = ref(["崴傑地產團隊致力於", "房地產及房市相關專業服務"]);
const ServeItem = ref([
  {
    name: "設計規劃",
    img: "src/images/Servesub.png",
    path: "/design",
  },
  {
    name: "工程管理",
    img: "src/images/Manage.png",
    path: "/manage",
  },
  {
    name: "土地開發",
    img: "src/images/Develop.png",
    path: "/develop",
  },
  {
    name: "物業管家",
    img: "src/images/Property.png",
    path: "/property",
  },
  {
    name: "資產標售",
    img: "src/images/Auction.png",
    path: "/auction",
  },
]);
</script>
<style lang="scss" scoped>
.contain {
  padding: 60px 16px;
}
.title {
  margin: -30px auto;
  // width: 652px;
  padding: 30px;
  p {
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
      <p v-for="text in title">{{ text }}</p>
    </div>
    <div class="content row">
      <div class="col-12 col-xl-4 serve-item" v-for="item in ServeItem">
        <img :src="item.img" :alt="item.name" />
        <RouterLink class="serve-link" :to="'/serve' + item.path">{{
          item.name
        }}</RouterLink>
      </div>
    </div>
  </div>
</template>
