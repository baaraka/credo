import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/main.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import router from "./router";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueSplide);
app.mount("#app");
