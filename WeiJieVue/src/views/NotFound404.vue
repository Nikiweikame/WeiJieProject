<script setup>
import { ref } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
const pageTitleContnet = ref({
  name: "not-found",
  title: "404NotFound",
});
</script>
<style lang="scss" scoped>
.not-found {
  &__titleBox {
    background-image: url("../assets/images/Contactus.png");
    :deep(.titleContent) {
      padding: 34px 0 33px;
      h3 {
        margin-bottom: 0;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .about {
    &__content {
      padding: 50px 150px 200px;
    }
  }
}
</style>
<!-- <style>
@media screen and (min-width: 1200px) {
  .not-found + footer {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
}
</style> -->
<template>
  <div class="not-found">
    <PageTitle01 class="not-found__titleBox" :page="pageTitleContnet" />
  </div>
</template>
