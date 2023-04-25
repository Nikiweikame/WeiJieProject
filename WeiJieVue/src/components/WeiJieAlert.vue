<script setup></script>

<template>
  <div class="alert alert-danger"></div>
</template>
<style lang="scss" scoped>
.alert.alert-danger {
  position: fixed;
  top: 50%;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 400px;
  display: none;
  background-color: #c8d2fa;
  border-color: #ebcccc;
  color: blue;
  text-align: center;
  &.show {
    display: block;
  }
}
</style>
