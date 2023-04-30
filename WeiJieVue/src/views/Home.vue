<script setup>
import { ref } from "vue";
import Slide from "../components/Slide.vue";
import HomeServe from "../components/HomeServe.vue";
import HomeIG from "../components/HomeIG.vue";
import HomeContact from "../components/HomeContact.vue";

const sildeDataArray = ref([
  {
    title: "崴傑地產開發",
    subTitle: "在崴傑，您對家的夢想，由我們守護。",
    button: "認識崴傑",
    background: "images/Rectangle4.png",
    indexID: "rs-3045",
    path: "/about",
  },
  // {
  //   title: "崴傑地產開發",
  //   subTitle: "在崴傑，您對家的夢想，由我們守護。",
  //   button: "認識崴傑",
  //   background: "/src/upload/Rectangle4.png",
  //   indexID: "rs-30451",
  //   path: "/about",
  // },
]);
const onlyOne = ref(sildeDataArray.value.length === 1);
</script>
<style lang="scss" scoped>
:deep(.onlyOne .tparrows) {
  display: none;
}
.content {
  padding: 0 16px;
}
</style>
<template>
  <div class="example">
    <div class="content">
      <div
        id="rev_slider_1078_1_wrapper"
        class="rev_slider_wrapper fullwidthbanner-container"
        data-alias="classic4export"
        data-source="gallery"
        style="
          margin: 0px auto;
          background-color: transparent;
          padding: 0px;
          margin-top: 0px;
          margin-bottom: 0px;
        "
      >
        <!-- START REVOLUTION SLIDER 5.4.1 fullwidth mode -->
        <div
          id="rev_slider_1078_1"
          class="rev_slider fullwidthabanner"
          :class="{ onlyOne: onlyOne }"
          data-version="5.4.1"
        >
          <!-- SLIDE  -->
          <ul>
            <Slide v-for="SildeDate in sildeDataArray" :slideDate="SildeDate" />
          </ul>
        </div>
      </div>
    </div>
  </div>

  <HomeServe />
  <HomeIG />
  <HomeContact />
</template>
