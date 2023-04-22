<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
import { RouterLink } from "vue-router";
const pageTitleContnet = ref({
  name: "projectCase",
  title: "工程案例",
  subtitle: "整合與細膩，各項工程的實績",
});
const imgGroup = ref([
  {
    src: "src/images/projectCase01.png",
    name: "projectCase01",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/projectCase02.png",
    name: "projectCase02",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/projectCase03.png",
    name: "projectCase03",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/projectCase04.png",
    name: "projectCase04",
    title: "台南安平陳宅",
  },
]);

onMounted(() => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "js/masonry.js";
  document.body.appendChild(script);
});
</script>
<style lang="scss">
.projectCase {
  &__titleBox {
    background-image: url("../images/projectCase.png");
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
          v-for="(image, index) in imgGroup"
        >
          <a>
            <img class="" :src="image.src" :alt="image.name" />
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
