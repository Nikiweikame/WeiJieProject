<script setup>
import { RouterLink, RouterView } from "vue-router";
// import loaderWrapper from "./components/loaderWrapper.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Alert from "./components/WeiJieAlert.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <Alert />
</template>
<style lang="scss" scoped></style>
