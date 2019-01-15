import Vue from "vue";
import App from "./App.vue";
// import wrap from "@vue/web-component-wrapper";
import "./assets/scss/normalize.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

// const CustomElement = wrap(Vue, HelloWorld);

// window.customElements.define("idf-widget", CustomElement);
