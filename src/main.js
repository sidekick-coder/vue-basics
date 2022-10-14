import { createApp } from "vue";
import App from "./App.vue";
import VBtn from "./components/v-btn.vue";

const app = createApp(App);

app.component("v-btn", VBtn);

app.mount("#app");
