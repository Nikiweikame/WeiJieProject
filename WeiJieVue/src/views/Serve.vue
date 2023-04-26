<script setup>
import { ref } from "vue";
import PageTitle from "../components/PageTitle.vue";
import { RouterLink, RouterView } from "vue-router";
import serverCard from "../components/serverCard.vue";
import { useCounterStore } from "@/stores/counter.js";
import PageTitle01 from "../components/PageTitle01.vue";
const counterStore = useCounterStore();
// const stepName=ref("設計流程")
const pageTitleContnet = ref({
  name: "serve",
  title: "服務項目",
  subtitle: "專業傑出的服務，完成您對家的理想",
});
</script>
<style lang="scss" scoped>
.serve {
  &__titleBox {
    background-image: url("../images/About.png");
  }
}
</style>
<template>
  <div class="serve">
    <PageTitle01 class="serve__titleBox" :page="pageTitleContnet" />
  </div>

  <RouterView />
</template>
