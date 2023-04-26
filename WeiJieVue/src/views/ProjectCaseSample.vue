<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import PageTitle01 from "../components/PageTitle01.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
// console.log(counterStore)
const pageTitleContnet = ref([
  {
    title: "台南安平陳宅",
    imgGroup: [
      "src/images/designCase01-1.png",
      "src/images/designCase01-2.png",
      "src/images/designCase01-3.png",
    ],
    textGroup: [
      "本案是位於台南安平的陳宅。",
      "廚房和客廳的開放式設計，讓室內更寬敞、通透。廚房擁有高級不鏽鋼電器，配合現代風格的橱柜和水槽，使其看起來時尚而又實用。客廳擺放著超舒適的沙發和扶手椅，配合優美的地毯和時尚的裝飾，營造出了一個舒適和諧的氛圍。",
      `臥室是這個公寓的一大亮點。附帶的床頭燈和抱枕，讓你可以在舒適的環境下看書或聽音樂。簡潔而又優美的地毯和簾子，使得整個房間更顯高雅。
浴室是一個現代化而又舒適的空間。從洗手盆到浴缸、馬桶，每個設計都考慮到了實用性和美觀。浴室的地磚和燈光營造了一個放鬆的氛圍，使你能在這裡享受一個愉悅的沐浴時光。`,
    ],
    date: "DATE: 2023/07/12",
  },
  {
    title: "台南安平陳宅2",
    imgGroup: [
      "src/images/designCase01-1.png",
      "src/images/designCase01-2.png",
      "src/images/designCase01-3.png",
    ],
    textGroup: [
      "本案是位於台南安平的陳宅。",
      "廚房和客廳的開放式設計，讓室內更寬敞、通透。廚房擁有高級不鏽鋼電器，配合現代風格的橱柜和水槽，使其看起來時尚而又實用。客廳擺放著超舒適的沙發和扶手椅，配合優美的地毯和時尚的裝飾，營造出了一個舒適和諧的氛圍。",
      `臥室是這個公寓的一大亮點。附帶的床頭燈和抱枕，讓你可以在舒適的環境下看書或聽音樂。簡潔而又優美的地毯和簾子，使得整個房間更顯高雅。
浴室是一個現代化而又舒適的空間。從洗手盆到浴缸、馬桶，每個設計都考慮到了實用性和美觀。浴室的地磚和燈光營造了一個放鬆的氛圍，使你能在這裡享受一個愉悅的沐浴時光。`,
    ],
    date: "DATE: 2023/07/12",
  },
  {
    title: "無此設計案例",
    imgGroup: [],
    textGroup: [],
    date: "",
  },
]);

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
.projectCaseSample {
  &__titleBox {
    background-image: url("../images/projectCase.png");
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
  .projectCaseSample {
    &__content {
      padding: 60px 150px 120px;
    }
  }
}
</style>
<template>
  <div class="projectCaseSample">
    <PageTitle01
      v-if="counterStore.projectSampleArray.length > index"
      class="projectCaseSample__titleBox"
      :page="counterStore.projectSampleArray[index]"
    />
    <PageTitle01
      v-else
      class="projectCaseSample__titleBox"
      :page="{ title: '無此設計案例' }"
    />

    <section class="section bgwhite projectCaseSample__content">
      <div class="row">
        <div class="col-md-4">
          <div class="work-details">
            <p
              v-for="content in counterStore.projectSampleDescriptionArray[
                index
              ]"
            >
              {{ content }}
            </p>
            <ul class="work-information">
              <li>{{ counterStore.projectSampleDateArray[index] }}</li>
            </ul>
          </div>
          <!-- end details -->
        </div>
        <!-- end col -->

        <div class="col-md-8">
          <div class="work-images">
            <a
              v-for="img in counterStore.projectSampleOtherUrlArray[index]"
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
