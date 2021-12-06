import Vue from "vue";
import Router from "vue-router";

import Home from "../components/home/Home.vue";
import Search from "../components/template/Search.vue";
import Region from "../components/template/Region.vue";
import Capital from "../components/template/Capital.vue";
import Lenguage from "../components/template/Lenguage.vue";
import Country from "../components/template/Country.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/search",
      component: Search,
      props: true,
      children: [
        { path: "/region", component: Region },
        { path: ":id", component: Capital },
        { path: "/lenguage", component: Lenguage },
        { path: ":id/country", component: Country },
      ],
    },
  ],
});
