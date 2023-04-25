<script setup>
import { ref } from "vue";
import PageTitle from "../components/PageTitle.vue";
import { RouterLink, RouterView } from "vue-router";
import serverCard from "../components/serverCard.vue";
import Step from "../components/step.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
// const stepName=ref("設計流程")
const pageTitleContnet = ref({
  name: "serve",
  title: "服務項目",
  subtitle: "專業傑出的服務，完成您對家的理想",
});
const cardContent = ref({
  contentText: [
    "平面配置提案",
    "立面設計規劃",
    "3D圖繪製",
    "工程預算編列",
    "施工圖繪製",
  ],
  subImg: "src/images/Servesub.png",
  name: "設計規劃",
});
const serveProcess = ref([
  {
    stepContent: `初訪案場，<br>丈量及討論使用需求`,
    ps: `（收提案企劃費，如後續有簽約將從設計費折扣）`,
  },
  {
    stepContent: `提供初步平面配置圖及<br>風格簡報，設計理念洽談`,
    ps: `※丈量日至初版平面配置圖完稿，約需10個工作天`,
  },
  {
    stepContent: `提供初步預算書及<br>協議簽訂設計委託合約`,
    ps: `（設計委託合約簽訂後一周內，由業主支付第一期設計費<共兩期>）※簽約日至初版施工圖完稿洽談，約需20個工作天，如附3D效果圖，約需30個工作天`,
  },
  {
    stepContent: `洽談需求至平面圖定案，<br>設計方續執行施工圖繪製`,
    ps: "",
  },
  {
    stepContent: `提供初版施工圖`,
    ps: "",
  },
  {
    stepContent: `施工圖及工程預算定案，<br>簽訂工程承攬合約`,
    ps: `（於設計圖及工程預算完成最終定案後一周內，業主方支付第二期設計費<共兩期>）（於工程承攬合約簽訂日起一週內由業主支付第一期工程款<共五期>）`,
  },
  {
    stepContent: `協力廠商訪價，發包，<br>排定開工日期及工程進度表`,
    ps: "",
  },
  {
    stepContent: `依序完成工程進度及請款作業`,
    ps: "",
  },
  {
    stepContent: `完工點交及現場裝飾佈置`,
    ps: "",
  },
]);
</script>
<style lang="scss">
.serve {
  .titleBox {
    background-image: url("../images/About.png");
  }
  .titleContent {
    height: 119px;
    margin: 0 auto;
    padding: 8px 8px 16px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    letter-spacing: 0.2px;
    font-style: normal;
    h3 {
      color: #ffffff;
      font-family: "Noto Sans TC";
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 36px;
      line-height: 52px;
    }
    p {
      font-family: "Noto Sans TC";
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #ffffff;
    }
  }
  &__content {
    padding: 60px 16px 120px;
    .row {
      margin-top: -30px;
    }
    img {
      width: 100%;
    }
    h4 {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 52px;
      letter-spacing: 0.2px;
      color: #373f41;
      margin-bottom: 20px;
    }
    p {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.2px;
      color: #373f41;
      margin-bottom: 10px;
    }
  }
  &__card {
    margin-top: 30px;
    text-align: center;
  }
}
@media screen and (min-width: 1200px) {
  .serve {
    &__content {
      padding: 60px 150px 120px;
    }
    &__card {
      text-align: start;
    }
  }
}
</style>
<template>
  <div class="serve">
    <PageTitle :page="pageTitleContnet" :nameTitle="pageTitleContnet.name" />
  </div>

  <RouterView />
</template>
