<script setup>
import { ref } from "vue";
import PageTitle from "../components/PageTitle.vue";
import { RouterLink, RouterView } from "vue-router";
import serverCard from "./serverCard.vue";
const pageTitleContnet = ref({
  name: "serve",
  title: "服務項目",
  subtitle: "專業傑出的服務，完成您對家的理想",
});
const cardContent = ref({
  contentText: [
  ],
  subImg: "src/images/Property.png",
  name: "物業管家",
});
</script>
<style lang="scss">
</style>
<template>
  <div class="serve">
    <PageTitle :page="pageTitleContnet" :nameTitle="pageTitleContnet.name" />
  </div>
  <serverCard :card="cardContent" />
</template>
