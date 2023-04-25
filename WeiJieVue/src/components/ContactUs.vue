<script setup>
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
defineProps({
  title: {
    type: String,
  },
  iconColor: {
    type: String,
  },
});
</script>
<style lang="scss" scoped>
.widget-title {
  // margin-bottom: 10px;
  padding: 0px;
  font-family: Oswald;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.2px;
  &::after {
    content: unset;
  }
}
.contact-widget li {
  margin: 10px 0 0;
  display: flex;
  align-items: center;
}
svg {
  margin-right: 10px;
}
</style>
<template>
  <div>
    <div class="widget clearfix">
      <h4 class="widget-title">{{ title }}</h4>
      <div class="contact-widget">
        <ul>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66667 16.6666V3.33331H18.3333V16.6666H1.66667ZM10 10.8333L3.33333 6.66665V15H16.6667V6.66665L10 10.8333ZM10 9.16665L16.6667 4.99998H3.33333L10 9.16665Z"
                :fill="iconColor"
              />
            </svg>
            <a :href="'mailto:' + counterStore.basicInformation?.mail">{{
              counterStore.basicInformation?.mail
            }}</a>
          </li>
          <li v-if="counterStore.basicInformation?.phone !== undefined">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.45 4.16667C5.5 4.90833 5.625 5.63333 5.825 6.325L4.825 7.325C4.48333 6.325 4.26667 5.26667 4.19167 4.16667H5.45ZM13.6667 14.1833C14.375 14.3833 15.1 14.5083 15.8333 14.5583V15.8C14.7333 15.725 13.675 15.5083 12.6667 15.175L13.6667 14.1833ZM6.25 2.5H3.33333C2.875 2.5 2.5 2.875 2.5 3.33333C2.5 11.1583 8.84167 17.5 16.6667 17.5C17.125 17.5 17.5 17.125 17.5 16.6667V13.7583C17.5 13.3 17.125 12.925 16.6667 12.925C15.6333 12.925 14.625 12.7583 13.6917 12.45C13.6089 12.42 13.5213 12.4059 13.4333 12.4083C13.2167 12.4083 13.0083 12.4917 12.8417 12.65L11.0083 14.4833C8.64619 13.2753 6.72467 11.3538 5.51667 8.99167L7.35 7.15833C7.58333 6.925 7.65 6.6 7.55833 6.30833C7.24221 5.34838 7.08185 4.344 7.08333 3.33333C7.08333 2.875 6.70833 2.5 6.25 2.5Z"
                :fill="iconColor"
              />
            </svg>
            <a :href="'tel:' + counterStore.basicInformation?.phone">{{
              counterStore.basicInformation?.phone
            }}</a>
          </li>
          <li v-if="counterStore.basicInformation?.address !== undefined">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5.41669C10.5525 5.41669 11.0824 5.63618 11.4731 6.02688C11.8638 6.41758 12.0833 6.94749 12.0833 7.50002C12.0833 7.77361 12.0294 8.04452 11.9248 8.29728C11.8201 8.55004 11.6666 8.7797 11.4731 8.97316C11.2797 9.16661 11.05 9.32007 10.7973 9.42477C10.5445 9.52947 10.2736 9.58335 10 9.58335C9.44747 9.58335 8.91756 9.36386 8.52686 8.97316C8.13616 8.58246 7.91667 8.05255 7.91667 7.50002C7.91667 6.94749 8.13616 6.41758 8.52686 6.02688C8.91756 5.63618 9.44747 5.41669 10 5.41669ZM10 1.66669C11.5471 1.66669 13.0308 2.28127 14.1248 3.37523C15.2188 4.46919 15.8333 5.95292 15.8333 7.50002C15.8333 11.875 10 18.3334 10 18.3334C10 18.3334 4.16667 11.875 4.16667 7.50002C4.16667 5.95292 4.78125 4.46919 5.87521 3.37523C6.96917 2.28127 8.45291 1.66669 10 1.66669ZM10 3.33335C8.89493 3.33335 7.83512 3.77234 7.05372 4.55374C6.27232 5.33514 5.83333 6.39495 5.83333 7.50002C5.83333 8.33335 5.83333 10 10 15.5917C14.1667 10 14.1667 8.33335 14.1667 7.50002C14.1667 6.39495 13.7277 5.33514 12.9463 4.55374C12.1649 3.77234 11.1051 3.33335 10 3.33335Z"
                :fill="iconColor"
              />
            </svg>
            <a :href="counterStore.basicInformation?.googleMap">{{
              counterStore.basicInformation?.address
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- end image-box -->
  </div>
</template>
