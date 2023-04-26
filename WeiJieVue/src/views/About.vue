<script setup>
import { ref } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
const pageTitleContnet = ref({
  name: "about",
  title: "認識崴傑",
  subtitle: "在崴傑，您對家的夢想，由我們守護。",
  subImg: "src/images/Aboutsub.png",
});

const contentText = ref([
  "崴傑地產團隊致力於房地產及房市相關服務，",
  "提供最新投資資訊與土地開發、物業管家、資產標售、室內設計美學服務，",
  "為您的財富把關並保護您的個人資訊。",
  "在崴傑，您對家的夢想，由我們守護。",
]);
</script>
<style lang="scss" scoped>
.about {
  &__titleBox {
    background-image: url("../images/About.png");
  }
  &__content {
    padding: 60px 16px 120px;
    img {
      width: 100%;
    }
    p {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 40px;
      letter-spacing: 0.2px;
      color: #373f41;
      margin-bottom: 0;
    }
  }
  .row {
    margin-top: -30px;
  }
  &__info {
    margin-top: 30px;
  }
}
@media screen and (min-width: 1200px) {
  .about {
    &__content {
      padding: 50px 150px 200px;
    }
  }
}
</style>
<template>
  <div class="about">
    <PageTitle01 class="about__titleBox" :page="pageTitleContnet" />
    <div class="about__content">
      <div class="row">
        <div class="col-12 col-xl-6 about__info">
          <img :src="pageTitleContnet.subImg" alt="" />
        </div>
        <div class="col-12 col-xl-6 about__info">
          <p v-for="text in contentText">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
