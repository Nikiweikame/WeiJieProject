<script setup>
import { ref } from "vue";
import PageTitle from "../components/PageTitle.vue";
import serverCard from "../components/serverCard.vue";
import Step from "../components/step.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const pageTitleContnet = ref({
  name: "serve",
  title: "服務項目",
  subtitle: "專業傑出的服務，完成您對家的理想",
});
const cardContent = ref({
  contentText: ["工程發包與執行", "工程監造與管理"],
  subImg: "/src/images/Manage.png",
  name: "工程管理",
});
</script>
<style lang="scss"></style>
<template>
  <serverCard
    :card="cardContent"
    :contentText="counterStore.serveitem.manage"
  />
  <Step
    :process="counterStore.manageStep"
    v-if="counterStore.manageStep.length !== 0"
  />
</template>
