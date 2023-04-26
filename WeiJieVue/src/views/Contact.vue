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
<style lang="scss" scoped>
// .contact-us__titleBox {
//   background-image: url("../images/Contactus.png");
// }
.contact-us {
  &__titleBox {
    background-image: url("../images/Contactus.png");
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
  }
  .section {
    padding: 60px 16px;
  }
  &__business-card {
    margin-top: 30px;
    :deep(.widget) {
      // padding: 0 98px;
      text-align: center;
      li + li {
        margin-top: 17px;
      }
      svg {
        margin-right: 30px;
      }
    }
    :deep(.widget-title) {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: 0.2px;
      color: #373f41;
      margin-bottom: 20px;
    }
    :deep(.contact-widget) {
      a {
        font-family: "Noto Sans TC";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
        /* identical to box height */

        letter-spacing: 0.2px;

        color: #373f41;
      }
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
