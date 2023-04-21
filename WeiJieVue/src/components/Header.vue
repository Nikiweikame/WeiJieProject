<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
const serveGroup = ref([
  { name: "設計規劃", path: "/serve" },
  { name: "工程管理", path: "/manage" },
  { name: "土地開發", path: "/develop" },
  { name: "物業管家", path: "/property" },
  { name: "資產標售", path: "/auction" },
]);
</script>
<style lang="scss">
.header {
  &__nav {
    background-color: #ffffffe6;
    padding: 10px 16px;
    justify-content: space-between;
    position: static;
  }
  &__logo {
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .header__navLink {
    width: auto;
    padding-top: 15px;
  }
  .nav-item .nav-link {
    padding: 15px 22px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #4d4c4a;
  }
  .navbar-nav {
    align-items: flex-start;
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
    margin-right: -15px;
    padding: 0 7px;
    .nav-link {
      padding: 15px;
    }
  }
  .dropdown-menu {
    margin-top: 20px;
  }
  .dropdown-toggle::after {
    content: unset;
  }
  .dropdown-item {
    padding: 4px 57px;
  }
}

@media screen and (min-width: 1200px) {
  .header {
    &__nav {
      position: fixed;
      padding: 10px 150px;
    }
    .header__navLink {
      padding-top: 0px;
    }
    .header__social-software {
      padding: 0;
    }
    .navbar-nav {
      align-items: center;
    }
    .nav-item .nav-link {
      padding: 15px;
    }
  }
}
</style>
<template>
  <header class="header">
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
        <RouterLink class="navbar-brand header__logo" to="/"
          ><img src="../assets/logo_navibar.png" alt="威傑地產開發logo"
        /></RouterLink>
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
                <li v-for="element in serveGroup">
                  <RouterLink :to="element.path">
                    <a class="dropdown-item" href="single-portfolio.html">{{
                      element.name
                    }}</a>
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/designCase"
                >設計案例</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/projectCase"
                >工程案例</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact">聯絡我們</RouterLink>
            </li>
            <li class="nav-item">
              <div class="header__social-software">
                <a class="nav-link" href="https://www.facebook.com/"
                  ><svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.6666 17C33.6666 7.8 26.1999 0.333334 16.9999 0.333334C7.79992 0.333334 0.333252 7.8 0.333252 17C0.333252 25.0667 6.06659 31.7833 13.6666 33.3333V22H10.3333V17H13.6666V12.8333C13.6666 9.61667 16.2833 7 19.4999 7H23.6666V12H20.3333C19.4166 12 18.6666 12.75 18.6666 13.6667V17H23.6666V22H18.6666V33.5833C27.0833 32.75 33.6666 25.65 33.6666 17Z"
                      fill="#4D4C4A"
                    />
                  </svg>
                </a>
                <a class="nav-link" href="https://www.instagram.com/"
                  ><svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99992 0.333334H23.9999C29.3333 0.333334 33.6666 4.66667 33.6666 10V24C33.6666 26.5638 32.6481 29.0225 30.8353 30.8354C29.0224 32.6482 26.5637 33.6667 23.9999 33.6667H9.99992C4.66659 33.6667 0.333252 29.3333 0.333252 24V10C0.333252 7.43624 1.3517 4.97749 3.16455 3.16464C4.9774 1.35178 7.43616 0.333334 9.99992 0.333334ZM9.66658 3.66667C8.07529 3.66667 6.54916 4.29881 5.42394 5.42403C4.29873 6.54924 3.66659 8.07537 3.66659 9.66667V24.3333C3.66659 27.65 6.34992 30.3333 9.66658 30.3333H24.3333C25.9245 30.3333 27.4507 29.7012 28.5759 28.576C29.7011 27.4508 30.3333 25.9246 30.3333 24.3333V9.66667C30.3333 6.35 27.6499 3.66667 24.3333 3.66667H9.66658ZM25.7499 6.16667C26.3025 6.16667 26.8324 6.38616 27.2231 6.77686C27.6138 7.16756 27.8333 7.69747 27.8333 8.25C27.8333 8.80254 27.6138 9.33244 27.2231 9.72314C26.8324 10.1138 26.3025 10.3333 25.7499 10.3333C25.1974 10.3333 24.6675 10.1138 24.2768 9.72314C23.8861 9.33244 23.6666 8.80254 23.6666 8.25C23.6666 7.69747 23.8861 7.16756 24.2768 6.77686C24.6675 6.38616 25.1974 6.16667 25.7499 6.16667ZM16.9999 8.66667C19.2101 8.66667 21.3297 9.54464 22.8925 11.1074C24.4553 12.6702 25.3333 14.7899 25.3333 17C25.3333 19.2101 24.4553 21.3298 22.8925 22.8926C21.3297 24.4554 19.2101 25.3333 16.9999 25.3333C14.7898 25.3333 12.6702 24.4554 11.1074 22.8926C9.54456 21.3298 8.66658 19.2101 8.66658 17C8.66658 14.7899 9.54456 12.6702 11.1074 11.1074C12.6702 9.54464 14.7898 8.66667 16.9999 8.66667ZM16.9999 12C15.6738 12 14.4021 12.5268 13.4644 13.4645C12.5267 14.4021 11.9999 15.6739 11.9999 17C11.9999 18.3261 12.5267 19.5979 13.4644 20.5355C14.4021 21.4732 15.6738 22 16.9999 22C18.326 22 19.5978 21.4732 20.5355 20.5355C21.4731 19.5979 21.9999 18.3261 21.9999 17C21.9999 15.6739 21.4731 14.4021 20.5355 13.4645C19.5978 12.5268 18.326 12 16.9999 12Z"
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
