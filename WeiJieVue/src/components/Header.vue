<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();

const serveItem = ref(["design", "manage", "develop", "property", "auction"]);
onMounted(() => {
  setTimeout(() => {
    document.querySelector("header").classList.remove("loading");
  }, 1000);
});
</script>
<style lang="scss">
.loading.header {
  .header__nav {
    height: 70px;
  }
  h1 {
    position: fixed;
    z-index: 999;
    background-color: #fff;
    height: 100vh;
    width: 100vw;
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
    padding: 40% calc(50% - 125px) 60%;
    opacity: 100%;
    img {
      height: 44px;
    }
  }
}
.header {
  &__nav {
    background-color: #ffffffe6;
    padding: 10px 16px;
    justify-content: space-between;
    position: static;
  }
  h1 {
    margin: 0;
    transition: all 1s ease;
    background-color: transparent;
    line-height: 1;
  }

  &__logo {
    padding: 0;
    margin: 0;
    cursor: pointer;
    img {
      height: 50px;
      transition: all 1s ease;
    }
  }
  .header__navLink {
    width: auto;
    // flex-shrink: 0;
  }
  .nav-item .nav-link {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.2px;
    color: #4d4c4a;
    padding: 15px 16px;
    &.disable-link {
      color: #c4c4c4;
      pointer-events: none;
    }
  }
  .navbar-nav {
    align-items: flex-start;
    padding: 15px 0 60px;
    .has-submenu {
      &.show > .dropdown-menu {
        display: block;
      }
      > ul {
        position: static;
        display: none;
      }
    }
  }
  .navbar-toggler {
    right: 16px;
    top: 15px;
    border: 1px solid #707b91;
    border-radius: 4px; // &:focus-visible{
    // }
  }
  .header__social-software {
    display: flex;
    // padding: 0 7px;
    .nav-link {
      padding: 15px 16px;
      height: 70px;
    }
  }
  ul.dropdown-menu {
    margin: 5px 0;
    border-width: 0;
    li {
      border-bottom-width: 0;
    }
  }
  .dropdown-toggle::after {
    content: unset;
  }
  .dropdown-item {
    padding: 10px 16px;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.2px;
    color: #373f41;
    &:hover {
      background-color: #fff;
      text-decoration: none;
    }
  }
}

@media screen and (min-width: 768px) {
  .loading.header h1 {
    padding: 20% calc(50% - 250px) 80%;
    img {
      height: 100px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .header {
    &__nav {
      position: fixed;
      padding: 10px 150px;
    }
    .navbar-nav {
      align-items: center;
      height: 50px;
      padding: 0;
      .has-submenu {
        ul.dropdown-menu {
          top: 70px;
          margin: 0;
          position: absolute;
          display: block;
        }
        &.show > .dropdown-menu {
          display: block;
        }
      }
    }
    .nav-item .nav-link {
      padding: 15px;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.2px;

      color: #4d4c4a;
    }
    .dropdown-menu {
      border: 1px solid #f5f5f5;
      li {
        border-bottom: 1px solid #f5f5f5;
      }
    }
    .header__social-software {
      margin-right: -15px;
      padding: 0;
      .nav-link {
        padding: 5px 15px;
        height: unset;
      }
    }

    .dropdown-item {
      padding: 4px 57px 5px;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.2px;
      color: #373f41;
    }
  }
}
</style>
<template>
  <header class="header loading">
    <div class="container-xl px-0">
      <nav class="navbar navbar-toggleable-lg fixed-top header__nav">
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMbileMenu"
          aria-controls="navbarMbileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#4d4c4a"
                stroke-width="2"
                stroke-linecap="round"
                stroke-miterlimit="10"
                d="M4 8h24M4 16h24M4 24h24"
              />
            </svg>
          </span>
        </button>
        <h1>
          <RouterLink class="navbar-brand header__logo" to="/"
            ><img src="../assets/logo_navibar.png" alt="威傑地產開發logo"
          /></RouterLink>
        </h1>
        <div
          class="collapse navbar-collapse header__navLink"
          id="navbarMbileMenu"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">認識崴傑</RouterLink>
            </li>
            <li class="nav-item dropdown has-submenu">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown03"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                服務項目
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_227_398"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_227_398)">
                    <path
                      d="M12 15.375L6 9.375L7.4 7.975L12 12.575L16.6 7.975L18 9.375L12 15.375Z"
                      fill="#4D4C4A"
                    />
                  </g>
                </svg>
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdown03">
                <li v-for="item in counterStore.serveItem">
                  <RouterLink :to="'/serve/' + item">
                    <a class="dropdown-item" href="single-portfolio.html">{{
                      counterStore[item]?.name
                    }}</a>
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                to="/designCase"
                :class="{
                  'disable-link': counterStore.designSampleArray.length === 0,
                }"
                >設計案例</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                to="/projectCase"
                :class="{
                  'disable-link': counterStore.projectSampleArray.length === 0,
                }"
                >工程案例</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact">聯絡我們</RouterLink>
            </li>
            <li class="nav-item">
              <div class="header__social-software">
                <a class="nav-link" :href="counterStore.link.FB" target="_blank"
                  ><svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.6666 20C36.6666 10.8 29.2 3.33333 20 3.33333C10.8 3.33333 3.33331 10.8 3.33331 20C3.33331 28.0667 9.06665 34.7833 16.6666 36.3333V25H13.3333V20H16.6666V15.8333C16.6666 12.6167 19.2833 10 22.5 10H26.6666V15H23.3333C22.4166 15 21.6666 15.75 21.6666 16.6667V20H26.6666V25H21.6666V36.5833C30.0833 35.75 36.6666 28.65 36.6666 20Z"
                      fill="#4D4C4A"
                    />
                  </svg>
                </a>
                <a class="nav-link" :href="counterStore.link.IG" target="_blank"
                  ><svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 3.33333H27C32.3333 3.33333 36.6666 7.66667 36.6666 13V27C36.6666 29.5638 35.6482 32.0225 33.8353 33.8354C32.0225 35.6482 29.5637 36.6667 27 36.6667H13C7.66665 36.6667 3.33331 32.3333 3.33331 27V13C3.33331 10.4362 4.35176 7.97749 6.16461 6.16464C7.97747 4.35178 10.4362 3.33333 13 3.33333ZM12.6666 6.66667C11.0753 6.66667 9.54922 7.29881 8.42401 8.42403C7.29879 9.54924 6.66665 11.0754 6.66665 12.6667V27.3333C6.66665 30.65 9.34998 33.3333 12.6666 33.3333H27.3333C28.9246 33.3333 30.4507 32.7012 31.576 31.576C32.7012 30.4508 33.3333 28.9246 33.3333 27.3333V12.6667C33.3333 9.35 30.65 6.66667 27.3333 6.66667H12.6666ZM28.75 9.16667C29.3025 9.16667 29.8324 9.38616 30.2231 9.77686C30.6138 10.1676 30.8333 10.6975 30.8333 11.25C30.8333 11.8025 30.6138 12.3324 30.2231 12.7231C29.8324 13.1138 29.3025 13.3333 28.75 13.3333C28.1974 13.3333 27.6675 13.1138 27.2768 12.7231C26.8861 12.3324 26.6666 11.8025 26.6666 11.25C26.6666 10.6975 26.8861 10.1676 27.2768 9.77686C27.6675 9.38616 28.1974 9.16667 28.75 9.16667ZM20 11.6667C22.2101 11.6667 24.3297 12.5446 25.8925 14.1074C27.4553 15.6702 28.3333 17.7899 28.3333 20C28.3333 22.2101 27.4553 24.3298 25.8925 25.8926C24.3297 27.4554 22.2101 28.3333 20 28.3333C17.7898 28.3333 15.6702 27.4554 14.1074 25.8926C12.5446 24.3298 11.6666 22.2101 11.6666 20C11.6666 17.7899 12.5446 15.6702 14.1074 14.1074C15.6702 12.5446 17.7898 11.6667 20 11.6667ZM20 15C18.6739 15 17.4021 15.5268 16.4644 16.4645C15.5268 17.4021 15 18.6739 15 20C15 21.3261 15.5268 22.5979 16.4644 23.5355C17.4021 24.4732 18.6739 25 20 25C21.3261 25 22.5978 24.4732 23.5355 23.5355C24.4732 22.5979 25 21.3261 25 20C25 18.6739 24.4732 17.4021 23.5355 16.4645C22.5978 15.5268 21.3261 15 20 15Z"
                      fill="#4D4C4A"
                    />
                  </svg>
                </a>
                <a
                  class="nav-link"
                  :href="counterStore.link.Line"
                  target="_blank"
                  ><svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.89 16.906C30.0077 16.9019 30.1249 16.9216 30.2348 16.9638C30.3447 17.0061 30.4449 17.07 30.5296 17.1518C30.6142 17.2335 30.6816 17.3315 30.7276 17.4399C30.7735 17.5483 30.7972 17.6648 30.7972 17.7825C30.7972 17.9002 30.7735 18.0167 30.7276 18.1251C30.6816 18.2334 30.6142 18.3314 30.5296 18.4132C30.4449 18.495 30.3447 18.5589 30.2348 18.6011C30.1249 18.6433 30.0077 18.663 29.89 18.6589H27.4538V20.2213H29.89C30.0084 20.2155 30.1267 20.2338 30.2377 20.2751C30.3488 20.3164 30.4503 20.3799 30.5361 20.4616C30.6219 20.5433 30.6902 20.6416 30.7369 20.7505C30.7835 20.8594 30.8076 20.9767 30.8076 21.0952C30.8076 21.2137 30.7835 21.3309 30.7369 21.4398C30.6902 21.5487 30.6219 21.647 30.5361 21.7287C30.4503 21.8104 30.3488 21.8739 30.2377 21.9152C30.1267 21.9565 30.0084 21.9748 29.89 21.969H26.581C26.3497 21.9682 26.1281 21.8758 25.9647 21.712C25.8013 21.5483 25.7095 21.3265 25.7092 21.0952V14.4708C25.7092 13.9886 26.0998 13.5928 26.581 13.5928H29.8963C30.1212 13.6044 30.333 13.7021 30.4878 13.8656C30.6427 14.0292 30.7287 14.246 30.728 14.4712C30.7273 14.6964 30.6401 14.9128 30.4842 15.0754C30.3284 15.238 30.116 15.3344 29.8911 15.3447H27.4548V16.907L29.89 16.906ZM24.5426 21.0941C24.5407 21.3261 24.4473 21.5479 24.2827 21.7114C24.118 21.8748 23.8955 21.9667 23.6636 21.967C23.5262 21.9683 23.3904 21.9376 23.267 21.8774C23.1435 21.8173 23.0357 21.7291 22.9522 21.6201L19.5619 17.0091V21.0931C19.5619 21.3248 19.4698 21.5471 19.3059 21.711C19.1421 21.8749 18.9198 21.967 18.688 21.967C18.4563 21.967 18.234 21.8749 18.0701 21.711C17.9062 21.5471 17.8141 21.3248 17.8141 21.0931V14.4687C17.8141 14.0948 18.0589 13.7594 18.411 13.6397C18.4979 13.6089 18.5896 13.5938 18.6818 13.5949C18.9526 13.5949 19.2025 13.7417 19.3702 13.948L22.7876 18.5694V14.4687C22.7876 13.9865 23.1782 13.5907 23.6615 13.5907C24.1448 13.5907 24.5406 13.9865 24.5406 14.4687L24.5426 21.0941ZM16.5684 21.0941C16.5673 21.3265 16.4742 21.5489 16.3094 21.7127C16.1447 21.8765 15.9217 21.9683 15.6894 21.968C15.4588 21.9661 15.2382 21.8732 15.0758 21.7095C14.9133 21.5459 14.822 21.3247 14.8217 21.0941V14.4698C14.8217 13.9875 15.2123 13.5917 15.6956 13.5917C16.1778 13.5917 16.5695 13.9875 16.5695 14.4698L16.5684 21.0941ZM13.1448 21.968H9.82953C9.59745 21.9675 9.37495 21.8754 9.21036 21.7118C9.04576 21.5481 8.95237 21.3262 8.95045 21.0941V14.4698C8.95045 13.9875 9.34624 13.5917 9.82953 13.5917C10.3128 13.5917 10.7034 13.9875 10.7034 14.4698V20.2203H13.1448C13.3766 20.2203 13.5989 20.3123 13.7627 20.4762C13.9266 20.6401 14.0187 20.8624 14.0187 21.0941C14.0187 21.3259 13.9266 21.5482 13.7627 21.712C13.5989 21.8759 13.3766 21.968 13.1448 21.968ZM36.33 17.5289C36.33 10.0702 28.8485 4 19.665 4C10.4815 4 3 10.0702 3 17.5289C3 24.2126 8.92962 29.811 16.9361 30.8744C17.4788 30.9879 18.2162 31.2327 18.4068 31.6941C18.5745 32.1107 18.5151 32.7565 18.461 33.1971L18.2329 34.6126C18.1672 35.0302 17.8964 36.2572 19.6869 35.5083C21.4825 34.7594 29.2942 29.8453 32.7929 25.8186C35.1853 23.1991 36.33 20.5077 36.33 17.5289Z"
                      fill="#4D4C4A"
                    />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- end container -->
  </header>
  <!-- end header -->
</template>
