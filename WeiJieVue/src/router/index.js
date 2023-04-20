import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Serve from "../views/Serve.vue";
import Manage from "../views/Manage.vue";
import Develop from "../views/Develop.vue";
import Property from "../views/Property.vue";
import Auction from "../views/Auction.vue";
import DesignCase from "../views/DesignCase.vue";
import DesignCase01 from "../views/DesignCase01.vue";
import ProjectCase from "../views/ProjectCase.vue";
import Contact from "../views/Contact.vue";

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
      // children:[
      //   {
      //     path: '',
      //     name: 'design',
      //     component: Design
      //   }
      // ],
    },
    {
      path: "/manage",
      name: "manage",
      component: Manage,
    },
    {
      path: "/develop",
      name: "develop",
      component: Develop,
    },
    {
      path: "/property",
      name: "property",
      component: Property,
    },
    {
      path: "/auction",
      name: "auction",
      component: Auction,
    },
    {
      path: "/designCase",
      name: "DesignCase",
      component: DesignCase,
    },
    {
      path: "/designCase01",
      name: "DesignCase01",
      component: DesignCase01,
    },
    {
      path: "/projectCase",
      name: "ProjectCase",
      component: ProjectCase,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});

export default router;
