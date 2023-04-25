<script setup>
import { ref } from "vue";
import serverCard from "../components/serverCard.vue";
import Step from "../components/step.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const cardContent = ref({
  contentText: [],
  subImg: "/src/images/Auction.png",
  name: "資產標售",
});
</script>
<style lang="scss"></style>
<template>
  <serverCard
    :card="cardContent"
    :contentText="counterStore.serveitem.auction"
  />
  <Step
    :process="counterStore.auctionStep"
    v-if="counterStore.auctionStep.length !== 0"
  />
</template>
