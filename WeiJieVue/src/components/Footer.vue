<script setup>
import CompanyName from "./CompanyName.vue";
import ContactUs from "./ContactUs.vue";
import LinkGroup from "./LinkGroup.vue";
import Copyright from "./Copyright.vue";
import { ref } from "vue";

const copyRightText = ref("Copyright 2023 © 崴傑地產開發 All rights reserved.");
</script>
<style lang="scss" scoped>
:deep.footer {
  position: relative;
  // height: 250px;
  background: #373f41;
  padding: 40px 150px 30px;
  &__copyright {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0px;
    margin: 0;

    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 30px;
    letter-spacing: 0.2px;
    text-align: center;
    color: #ffffff;
  }
  &__companyName {
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 52px;
    // text-align: center;
    letter-spacing: 0.2px;
    color: #ffffff;
  }
  &__describe {
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
  &__name {
    margin: 0 0 0 20px;
  }
}
</style>
<template>
  <footer class="footer">
    <div class="container p-0">
      <div class="row g-0">
        <CompanyName class="col-12 col-xl-4 footer__companyName" />
        <ContactUs class="col-12 col-xl-4" />
        <LinkGroup class="col-12 col-xl-4" />
      </div>
    </div>
    <Copyright class="footer__copyright" :copyRightText="copyRightText" />
  </footer>
</template>
