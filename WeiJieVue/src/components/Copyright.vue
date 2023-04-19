<script setup>
defineProps({
  copyRightText: {
    type: String,
  },
});
</script>
<style lang="scss">

</style>
<template>
  <div class="bottom">
    <span>{{ copyRightText }}</span>
    <a href="#"
      ><span>回到頂端 Back to top </span>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_177_1934"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <rect width="30" height="30" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_177_1934)">
          <path d="M8.75 17.5L15 11.25L21.25 17.5H8.75Z" fill="white" />
        </g>
        </svg>
      </a>
  </div>
</template>
