import Vue from "vue";
// import App from "./App.vue";
import wrap from "@vue/web-component-wrapper";
import "./assets/scss/normalize.scss";
import Article from "./pages/Article";

Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

const CustomElement = wrap(Vue, Article);
window.customElements.define("idf-widget", CustomElement);
