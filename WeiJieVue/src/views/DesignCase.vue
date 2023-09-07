<script setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
import { RouterLink } from "vue-router";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const pageTitleContnet = ref({
  name: "designCase",
  title: "地產案件",
  subtitle: "貼近人們需求，設計最理想的空間",
});
const script = document.createElement("script");
script.type = "text/javascript";
script.src = "js/masonry.js";
watch(counterStore.designSampleArray, () => {
  document.body.appendChild(script);
});
onMounted(() => {
  document.body.appendChild(script);
});
onUnmounted(() => {
  document.body.removeChild(script);
});
</script>
<style lang="scss">
.designCase {
  .titleBox {
    background-image: url("../assets/images/designCase.png");
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
      margin: 0px;
    }
    img {
      width: 100%;
      padding: 0;
    }
  }
  &__img-group {
    padding: 0 15px;
  }
  .designCase__little-content {
    // background-color: aquamarine;
    .designCase__little-sub a {
      left: 20px;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 35px;
      /* identical to box height */

      letter-spacing: 0.2px;

      color: #ffffff;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .designCase {
    &__content {
      padding: 60px 150px 120px;
    }
  }
}
</style>
<template>
  <div class="designCase">
    <PageTitle01 class="designCase__titleBox" :page="pageTitleContnet" />
    <div class="designCase__content">
      <div id="da-thumbs" class="da-thumbs portfolio row">
        <div
          class="pitem item-w1 item-h1 cat1 designCase__img-group col-12 col-xl-6"
          v-for="(image, index) in counterStore.designSampleArray"
        >
          <a>
            <img class="" :src="image.imgUrl" :alt="image.name" />
            <div class="designCase__little-content">
              <span class="designCase__little-sub">
                <RouterLink :to="'/designCaseSample#' + index">
                  {{ image.name }}
                </RouterLink>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
