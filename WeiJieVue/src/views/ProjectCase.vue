<script setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
import { RouterLink } from "vue-router";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const pageTitleContnet = ref({
  name: "projectCase",
  title: "實體活動",
  subtitle: "財商系列課程及會員產業分享活動",
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
.projectCase {
  &__titleBox {
    background-image: url("../assets/images/projectCase.png");
  }
  &__content {
    padding: 60px 16px 120px;
    img {
      width: 100%;
      padding: 0;
    }
    .row {
      margin: 0;
    }
  }
  &__img-group {
    padding: 0 15px;
  }
  .projectCase__little-content {
    // background-color: aquamarine;
    .projectCase__little-sub a {
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
  .projectCase__content {
    padding: 60px 150px 120px;
  }
}
</style>
<template>
  <div class="projectCase">
    <PageTitle01 class="projectCase__titleBox" :page="pageTitleContnet" />
    <div class="projectCase__content">
      <div id="da-thumbs" class="da-thumbs portfolio row">
        <div
          class="pitem item-w1 item-h1 cat1 projectCase__img-group col-12 col-xl-6"
          v-for="(image, index) in counterStore.projectSampleArray"
        >
          <a>
            <img class="" :src="image.imgUrl" :alt="image.name" />
            <div class="projectCase__little-content">
              <span class="projectCase__little-sub">
                <RouterLink :to="'/projectCaseSample#' + index">
                  {{ image.title }}
                </RouterLink></span
              >
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
