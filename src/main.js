import Vue from "vue";
import App from "./App.vue";

// import api from "./services/config";

// Vue.prototype.$http = api;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
