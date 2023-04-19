<script setup>
import { ref } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
const pageTitleContnet = ref({
  name: "designCase",
  title: "設計案例",
  subtitle: "貼近人們需求，設計最理想的空間",
});
const imgGroup = ref([
  { src: "src/images/designCase01.png", name: "designCase01" },
  { src: "src/images/designCase02.png", name: "designCase02" },
  { src: "src/images/designCase03.png", name: "designCase03" },
  { src: "src/images/designCase04.png", name: "designCase04" },
  { src: "src/images/designCase05.png", name: "designCase05" },
  { src: "src/images/designCase06.png", name: "designCase06" },
  { src: "src/images/designCase07.png", name: "designCase07" },
  { src: "src/images/designCase08.png", name: "designCase08" },
]);
</script>
<style lang="scss">
.designCase {
  &__titleBox {
    background-image: url("../images/designCase.png");
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
}
</style>
<template>
  <div :class="pageTitleContnet.name">
    <PageTitle01 :page="pageTitleContnet" />
    <div class="designCase__content">
      <div class="designCase__img-group">
        <img
          v-for="image in imgGroup"
          class="col-6"
          :src="image.src"
          :alt="image.name"
        />
      </div>
    </div>
  </div>
</template>
