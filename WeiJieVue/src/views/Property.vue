<script setup>
import { ref } from "vue";
import serverCard from "../components/serverCard.vue";
import Step from "../components/step.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const cardContent = ref({
  contentText: [],
  subImg: "/src/images/Property.png",
  name: "物業管家",
});
</script>
<style lang="scss"></style>
<template>
  <serverCard
    :card="cardContent"
    :contentText="counterStore.serveitem.property"
  />
  <Step
    :process="counterStore.propertyStep"
    v-if="counterStore.propertyStep.length !== 0"
  />
</template>
