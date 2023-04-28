<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
const index = ref();
hashChange();
window.addEventListener("hashchange", () => {
  hashChange();
});

function hashChange() {
  const hash = Number(window.location.hash.slice(1));
  if (isNaN(hash)) {
    console.log("123", index.value);
    return;
  } else {
    index.value = hash;
  }
}
</script>
<style lang="scss" scoped>
.designCaseSample {
  &__titleBox {
    background-image: url("../assets/images/designCase.png");
  }
  :deep(.titleContent) {
    padding: 34px 0 33px;
    h3 {
      margin-bottom: 0;
    }
  }
  &__content {
    padding: 60px 16px 120px;
    img {
      width: 100%;
      padding: 0;
    }
  }
  &__img-group {
    padding: 0 15px;
  }
  .work-images {
    margin-top: -40px;
    a {
      display: block;
      margin-top: 40px;
    }
  }
  .work-details {
    p {
      margin: 0;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.2px;

      color: #373f41;
    }
  }
  .work-information {
    margin-top: 30px;
    li {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: #373f41;
    }
  }
}
@media screen and (min-width: 1200px) {
  .designCaseSample {
    &__content {
      padding: 60px 150px 120px;
    }
  }
}
</style>
<template>
  <div class="designCaseSample">
    <PageTitle01
      v-if="counterStore.designSampleArray.length > index"
      class="designCaseSample__titleBox"
      :page="counterStore.designSampleArray[index]"
    />
    <PageTitle01
      v-else
      class="designCaseSample__titleBox"
      :page="{ title: '無此設計案例' }"
    />

    <section class="section bgwhite designCaseSample__content">
      <div class="row">
        <div class="col-md-4">
          <div class="work-details">
            <p
              v-for="content in counterStore.designSampleDescriptionArray[
                index
              ]"
            >
              {{ content }}
            </p>
            <ul class="work-information">
              <li>{{ counterStore.designSampleDateArray[index] }}</li>
            </ul>
          </div>
          <!-- end details -->
        </div>
        <!-- end col -->

        <div class="col-md-8">
          <div class="work-images">
            <a
              v-for="img in counterStore.designSampleOtherUrlArray[index]"
              :href="img"
              data-lightbox="image-1"
              data-title="Single Portfolio Item"
              ><img :src="img" alt="" class="img-fluid"
            /></a>
          </div>
          <!-- end work-images -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </section>
    <!-- end section -->
  </div>
</template>
