<script setup>
import { RouterLink, RouterView } from "vue-router";

import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
// const stepName=ref("設計流程")
</script>
<style lang="scss" scoped></style>
<template>
  <RouterView />
</template>
