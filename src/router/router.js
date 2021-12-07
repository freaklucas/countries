import Vue from "vue";
import Router from "vue-router";

import Home from "../components/home/Home.vue";
// import Search from "../components/template/Search.vue";
import Region from "../components/template/Region.vue";
import Capital from "../components/template/Capital.vue";
import Lenguage from "../components/template/Lenguage.vue";
import Country from "../components/template/Country.vue";
import Code from "../components/template/Code.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/region",
      component: Region,
      name: "region",
    },
    {
      path: "/capital",
      component: Capital,
      name: "capital",
    },
    {
      path: "/lenguage",
      component: Lenguage,
      name: "lenguage",
    },
    {
      path: "/country",
      component: Country,
      name: "country",
    },
    {
      path: "/code",
      component: Code,
      name: "code",
    },
  ],
});
