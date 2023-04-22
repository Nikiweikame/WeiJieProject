<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
import { RouterLink } from "vue-router";
const pageTitleContnet = ref({
  name: "designCase",
  title: "設計案例",
  subtitle: "貼近人們需求，設計最理想的空間",
});
const imgGroup = ref([
  {
    src: "src/images/designCase01.png",
    name: "designCase01",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/designCase02.png",
    name: "designCase02",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/designCase03.png",
    name: "designCase03",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/designCase04.png",
    name: "designCase04",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/designCase05.png",
    name: "designCase05",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/designCase06.png",
    name: "designCase06",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/designCase07.png",
    name: "designCase07",
    title: "台南安平陳宅",
  },
  {
    src: "src/images/designCase08.png",
    name: "designCase08",
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
.designCase {
  &__titleBox {
    background-image: url("../images/designCase.png");
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
          v-for="(image, index) in imgGroup"
        >
          <a>
            <img class="" :src="image.src" :alt="image.name" />
            <div class="designCase__little-content">
              <span class="designCase__little-sub">
                <RouterLink :to="'/designCaseSample#' + index">
                  {{ image.title }}
                </RouterLink>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
