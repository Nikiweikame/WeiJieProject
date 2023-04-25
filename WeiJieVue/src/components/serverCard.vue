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
  subImg:{
    type: String,
  }
});
</script>
<style lang="scss" scoped></style>
<template>
  <div class="serve__content">
    <div class="row">
      <div class="col-12 col-xl-6 serve__card">
        <img :src="subImg" alt="" />
      </div>
      <div class="col-12 col-xl-6 serve__card">
        <h4>{{ nameTitle }}</h4>
        <p v-for="text in contentText" v-if="contentText.length !== 0">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
