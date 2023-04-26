<script setup>
defineProps({
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
</script>
<style lang="scss" scoped>
.card {
  &__container {
    padding: 60px 16px 120px;
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
      font-size: 36px;
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
      line-height: 23px;
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
      padding: 60px 150px 120px;
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
    <div class="row">
      <div class="col-12 col-xl-6 card__img">
        <img :src="subImg" alt="" />
      </div>
      <div class="col-12 col-xl-6 card__text">
        <h4>{{ nameTitle }}</h4>
        <p v-for="text in contentText" v-if="contentText.length !== 0">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
