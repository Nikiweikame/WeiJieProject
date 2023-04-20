<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
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
    height: 300px;
    padding: 116px 0 45px;
  }
  &__titleContent {
    width: 500px;
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
    padding: 60px 150px 120px;
    img {
      width: 100%;
      padding: 0;
    }
  }
  &__img-group {
    padding: 0 15px;
  }
  .projectCase__little-content {
    // background-color: aquamarine;
    .projectCase__little-sub {
      left: 20px;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 35px;
      /* identical to box height */

      letter-spacing: 0.2px;

      color: #ffffff;
    }
  }
}
</style>
<template>
  <div :class="pageTitleContnet.name">
    <PageTitle01 :page="pageTitleContnet" />
    <div class="projectCase__content">
      <div id="da-thumbs" class="da-thumbs portfolio row">
        <div
          class="pitem item-w1 item-h1 cat1 projectCase__img-group col-12 col-xl-6"
          v-for="image in imgGroup"
        >
          <a>
            <img class="" :src="image.src" :alt="image.name" />
            <!-- <div class="projectCase__little-content">
              <span class="projectCase__little-sub">{{ image.title }}</span>
            </div> -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
