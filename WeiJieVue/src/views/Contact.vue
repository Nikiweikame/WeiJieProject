<script setup>
import { ref } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
import inputGroup from "../components/inputGroup.vue";
import ContactUs from "../components/ContactUs.vue";
const pageTitleContnet = ref({
  name: "contact-us",
  title: "聯絡我們",
  subtitle: "對家的規劃有任何專業需求，歡迎與我們聯繫",
});
</script>
<style lang="scss">
.contact-us {
  &__titleBox {
    background-image: url("../images/Contactus.png");
    background-size: 100% 100%;
    height: 300px;
    padding: 116px 0 45px;
  }
  &__titleContent {
    width: 500px;
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
  iframe {
    margin-bottom: -7px;
  }
  .section {
    padding: 60px 120px;
  }
  .form-control {
    color: #373f41;
  }
  .form-control {
    font-family: "Noto Sans TC";
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
  }
  &__business-card {
    .widget {
      padding: 0 98px;
      li {
        margin: 0 0 17px;
      }
      li:last-childx {
        margin-bottom: 0;
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
}
</style>
<template>
  <div class="contact-us">
    <PageTitle01 :page="pageTitleContnet" />
    <section class="section bgwhite">
      <div class="row">
        <inputGroup class="col-lg-6 col-md-12 col-sm-12 col-xs-12" />
        <!-- end col -->

        <ContactUs
          class="col-lg-6 col-md-12 col-sm-12 col-xs-12 contact-us__business-card"
          :title="'崴傑地產開發'"
          :iconColor="'#373F41'"
        />
        <!-- end col -->
      </div>
      <!-- end row -->
    </section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4382.836831744017!2d120.21436297424952!3d23.00337232092076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e771e0b7d21ed%3A0x45f10dbc593d79b7!2z5aW95oOz5bel5L2c5a6k!5e0!3m2!1szh-TW!2stw!4v1681815615431!5m2!1szh-TW!2stw"
      width="100%"
      height="400"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
