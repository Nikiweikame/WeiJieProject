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
    "工程發包與執行",
    "工程監造與管理",
  ],
  subImg: "src/images/Manage.png",
  name: "工程管理",
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
