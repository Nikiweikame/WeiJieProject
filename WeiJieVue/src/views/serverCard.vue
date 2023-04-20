<script setup>
defineProps({
  card: {
    tpye: Object,
  },
  nameTitle:{
    type:String
  }
});
</script>
<style lang="scss" scoped></style>
<template>
  <div class="serve__content contain">
    <div class="row">
      <div class="col-6">
        <img :src="card.subImg" alt="" />
      </div>
      <div class="col-6">
        <h4>{{ card.name }}</h4>
        <p v-for="text in card.contentText" v-if="card.contentText.length !== 0">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
