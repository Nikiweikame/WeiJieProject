<script setup>
import CompanyName from "./CompanyName.vue"
import Copyright from "./Copyright.vue";
import { ref } from "vue";

const copyRightText = ref(
  "Copyright 2023 &copy; 崴傑地產開發 All rights reserved."
);
</script>
<style lang="scss">
.footer {
  height: 250px;
  background: #373f41;
  padding: 40px 150px 30px;
  &__copyright {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0px;
    text-align: center;
  }
}
</style>
<template>
  <footer class="footer">
    <CompanyName/>
    <Copyright class="footer__copyright" :copyRightText="copyRightText" />
  </footer>
</template>
