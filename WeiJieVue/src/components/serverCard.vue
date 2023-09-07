<script setup>
import { useCounterStore } from "@/stores/counter.js";
import { computed } from "vue";
const counterStore = useCounterStore();

const props = defineProps({
  card: {
    tpye: Object,
  },
  nameTitle: {
    type: String,
  },
  contentText: {
    type: Array,
  },
  subImg: {
    type: String,
  },
});

const contents = computed(() => {
  return counterStore.ServeContent.filter((o) => o.topic == props.nameTitle);
});
</script>
<style lang="scss" scoped>
.card {
  &__container {
    padding: 60px 16px 60px;
    background-color: #fcfcfc;
    .row {
      margin-top: -30px;
    }
    img {
      width: 100%;
    }
    h4 {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 52px;
      letter-spacing: 0.2px;
      color: #373f41;
      margin-bottom: 20px;
    }
    p {
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0.2px;
      color: #373f41;
      margin: 0px;
      & + p {
        margin-top: 10px;
      }
    }
  }
  &__img {
    margin-top: 30px;
    text-align: center;
  }
  &__text {
    margin-top: 30px;
    text-align: center;
  }
}

@media screen and (min-width: 1200px) {
  .card {
    &__container {
      padding: 60px 150px 60px;
    }
    &__img {
      text-align: start;
    }
    &__text {
      text-align: start;
    }
  }
}
</style>
<template>
  <div class="card__container">
    <template v-for="(row, index) of contents">
      <div
        class="row d-flex pb-5"
        :class="{ 'flex-row-reverse': index % 2 != 0 }"
      >
        <div class="col-12 col-xl-7 card__img">
          <img :src="row.src" alt="" />
        </div>
        <div class="col-12 col-xl-5 card__text pl-5">
          <h4>{{ row.title }}</h4>
          <p style="white-space: pre-line">
            {{ row.content }}
          </p>
        </div>
      </div>
    </template>
  </div>
</template>
