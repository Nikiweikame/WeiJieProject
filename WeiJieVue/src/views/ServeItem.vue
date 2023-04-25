<script setup>
import { ref, computed } from "vue";
import serverCard from "../components/serverCard.vue";
import Step from "../components/step.vue";
import { useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
// defineProps({
//   id:{

//   }
// })
const route = useRoute();
const id = computed(() => route.params.id);
console.log(id.value)
const step = computed(() => `${route.params.id}Step`);
// const step = ref(`${id.value}Step`)
const cardContent = ref({
  subImg: "/src/images/Servesub.png",
  name: "設計規劃",
});
</script>
<style lang="scss"></style>
<template>
  <serverCard
    :nameTitle="counterStore[id]?.name"
    :subImg="counterStore[id]?.subImg"
    :contentText="counterStore.serveitem[id]"
  />
  <Step
    :process="counterStore[step]"
    v-if="counterStore[step].length !== 0"
  />
</template>
