<script setup>
import { ref, computed } from "vue";
import serverCard from "../components/serverCard.vue";
import Step from "../components/Step.vue";
import { useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const route = useRoute();
const id = computed(() => route.params.id);
const step = computed(() => `${route.params.id}Step`);
</script>
<style lang="scss"></style>
<template>
  <serverCard
    :nameTitle="counterStore[id]?.name"
    :subImg="counterStore[id]?.subImg"
    :contentText="counterStore.serveitem[id]"
  />
  <Step :process="counterStore[step]" v-if="counterStore[step].length !== 0" />
</template>
