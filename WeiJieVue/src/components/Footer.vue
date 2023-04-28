<script setup>
import CompanyName from "./CompanyName.vue";
import ContactUs from "./ContactUs.vue";
import LinkGroup from "./LinkGroup.vue";
import Copyright from "./Copyright.vue";
import { ref } from "vue";

const copyRightText = ref("Copyright 2023 © 崴傑地產開發 All rights reserved.");
</script>
<style lang="scss">
.footer {
  &__info {
    background: #373f41;
    padding: 60px 16px;
    .row {
      margin-top: -30px;
      > * {
        margin-top: 30px;
      }
    }
  }
  &__companyName {
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 52px;
    letter-spacing: 0.2px;
    color: #ffffff;
  }
  // &__name {
  //   margin: 0 0 0 20px;
  // }
}
@media screen and (min-width: 1200px) {
  .footer {
    &__info {
      padding: 40px 150px 60px;
    }
    .row > div {
      margin-bottom: unset;
    }
  }
}
</style>
<template>
  <footer class="footer">
    <div class="footer__info">
      <div class="row">
        <CompanyName class="col-12 col-xl-4 footer__companyName" />
        <ContactUs
          class="col-12 col-xl-4"
          :title="'CONTACT US'"
          :iconColor="'white'"
        />
        <LinkGroup class="col-12 col-xl-4" />
      </div>
    </div>
    <Copyright :copyRightText="copyRightText" />
  </footer>
</template>
