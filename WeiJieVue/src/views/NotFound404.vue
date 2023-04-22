<script setup>
import { ref } from "vue";
import PageTitle from "../components/PageTitle.vue";
import PageTitle01 from "../components/PageTitle01.vue";
const pageTitleContnet = ref({
  name: "not-found",
  title: "404NotFound",
});
</script>
<style lang="scss">
.not-found {
  background-image: url("../images/Contactus.png");
  background-size: 100% 100%;
}
.titleContent {
  // height: 119px;
  margin: 0 auto;
  padding: 16px 8px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  letter-spacing: 0.2px;
  font-style: normal;
}
@media screen and (min-width: 1200px) {
  .about {
    &__content {
      padding: 50px 150px 200px;
    }
  }
}
</style>
<template>
  <div :class="pageTitleContnet.name">
    <PageTitle01 :page="pageTitleContnet" />
  </div>
</template>
