<script setup>
import { ref } from "vue";
import serverCard from "../components/serverCard.vue";
import Step from "../components/step.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const cardContent = ref({
  subImg: "/src/images/Develop.png",
  name: "土地開發",
});
</script>
<style lang="scss"></style>
<template>
  <serverCard
    :card="cardContent"
    :contentText="counterStore.serveitem.develop"
  />
  <Step
    :process="counterStore.developStep"
    v-if="counterStore.developStep.length !== 0"
  />
</template>
