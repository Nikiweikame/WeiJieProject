<script setup>
import { ref } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
import inputGroup from "../components/inputGroup.vue";
import ContactUs from "../components/ContactUs.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const pageTitleContnet = ref({
  name: "contact-us",
  title: "聯絡我們",
  subtitle: "對家的規劃有任何專業需求，歡迎與我們聯繫",
});
</script>
<style lang="scss">
.contact-us {
  .titleBox {
    background-image: url("../images/Contactus.png");
    background-size: 100% 100%;
  }
  .titleContent {
    height: 119px;
    margin: 0 auto;
    padding: 8px 8px 16px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    letter-spacing: 0.2px;
    font-style: normal;
    h3 {
      color: #ffffff;
      font-family: "Noto Sans TC";
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 36px;
      line-height: 52px;
    }
    p {
      font-family: "Noto Sans TC";
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #ffffff;
    }
  }
  &__content {
    padding: 50px 150px 200px;
    img {
      width: 100%;
    }
    p {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 40px;
      letter-spacing: 0.2px;
      color: #373f41;
      margin-bottom: 0;
    }
  }
  .row.inputGroup {
    margin-top: -30px;
  }
  &__input-group {
    margin-top: 30px;

    label {
      position: absolute;
      margin: 0;
      top: 11.5px;
      right: 10px;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      text-align: right;
      color: #373f41;
    }
    .last-input {
      position: relative;
    }
  }
  .section {
    padding: 60px 16px;
  }
  .form-control {
    color: #373f41;
    font-family: "Noto Sans TC";
    position: relative;
    &input::placeholder {
      color: #373f41;
    }
    &.last-input {
      margin-bottom: 34px;
    }
  }
  .btn {
    width: 165px;

    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 138% */
    color: #ffffff;
    margin-bottom: 0;
  }
  &__business-card {
    margin-top: 30px;
    .widget {
      // padding: 0 98px;
      text-align: center;
      li + li {
        margin-top: 17px;
      }
      svg {
        margin-right: 30px;
      }
    }
    .widget-title {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      align-items: center;
      letter-spacing: 0.2px;
      color: #373f41;
      margin-bottom: 20px;
    }
  }
  iframe {
    margin-bottom: -7px;
  }
}
@media screen and (min-width: 1200px) {
  .contact-us {
    .section {
      padding: 60px 120px;
    }

    &__business-card {
      .widget {
        text-align: start;
        padding: 0 98px;
      }
    }
  }
}
</style>
<template>
  <div class="contact-us">
    <PageTitle01 class="contact-us__titleBox" :page="pageTitleContnet" />
    <section class="section bgwhite">
      <div class="row inputGroup">
        <inputGroup class="col-12 col-xl-6 contact-us__input-group" />
        <!-- end col -->

        <ContactUs
          class="col-12 col-xl-6 contact-us__business-card"
          :title="'崴傑地產開發'"
          :iconColor="'#373F41'"
        />
        <!-- end col -->
      </div>
      <!-- end row -->
    </section>
    <iframe
      v-if="counterStore.basicInformation?.iframeMap"
      :src="counterStore.basicInformation?.iframeMap"
      width="100%"
      height="400"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
