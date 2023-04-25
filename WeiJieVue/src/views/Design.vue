<script setup>
import { ref } from "vue";
import serverCard from "../components/serverCard.vue";
import Step from "../components/step.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();

const cardContent = ref({
  contentText: [
    "平面配置提案",
    "立面設計規劃",
    "3D圖繪製",
    "工程預算編列",
    "施工圖繪製",
  ],
  subImg: "/src/images/Servesub.png",
  name: "設計規劃",
});
</script>
<style lang="scss"></style>
<template>
  <serverCard
    :card="cardContent"
    :contentText="counterStore.serveitem.design"
  />
  <Step
    :process="counterStore.designStep"
    v-if="counterStore.designStep.length !== 0"
  />
</template>
