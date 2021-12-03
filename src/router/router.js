import Vue from "vue";
import Router from "vue-router";
import Home from "../components/home/Home.vue";
// import Menu from "../components/template/Menu.vue";
// import Region from "../components/template/Region.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});
