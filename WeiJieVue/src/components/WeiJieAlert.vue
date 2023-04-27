<script setup></script>

<template>
  <div class="alert"></div>
</template>
<style lang="scss" scoped>
.alert {
  font-family: "Noto Sans TC";
  position: fixed;
  top: 10%;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 400px;
  display: none;
  text-align: center;
  &.show {
    display: block;
  }
}
</style>
