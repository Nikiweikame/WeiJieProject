import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Serve from "../views/Serve.vue";
import ServeItem from "../views/ServeItem.vue";
import DesignCase from "../views/DesignCase.vue";
import DesignCaseSample from "../views/DesignCaseSample.vue";
import ProjectCase from "../views/ProjectCase.vue";
import ProjectCaseSample from "../views/ProjectCaseSample.vue";
import Contact from "../views/Contact.vue";
import NotFound404 from "../views/NotFound404.vue";
const scrollBehavior = (to, from, savedPosition) => {
  // document.querySelector("#navbarMbileMenu").classList.remove("show");
  if (savedPosition && to.meta.keepAlive) {
    return savedPosition;
  }
  return { left: 0, top: 0 };
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/serve",
      name: "Serve",
      component: Serve,
      children: [
        {
          path: ":id",
          name: "Serveitem",
          component: ServeItem,
        },
      ],
    },
    {
      path: "/designCase",
      name: "DesignCase",
      component: DesignCase,
    },
    {
      path: "/designCaseSample",
      name: "DesignCaseSample",
      component: DesignCaseSample,
    },
    {
      path: "/projectCase",
      name: "ProjectCase",
      component: ProjectCase,
    },
    {
      path: "/projectCaseSample",
      name: "ProjectCaseSample",
      component: ProjectCaseSample,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/404",
      name: "404NotFound",
      component: NotFound404,
      hidden: true,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
      hidden: true,
    },
  ],
  scrollBehavior,
});

router.afterEach((to, from, next) => {
  document.querySelector("#navbarMbileMenu").classList.remove("show");
});

export default router;
