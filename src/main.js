import { createApp } from "vue";
import App from "./App.vue";
import VBtn from "./components/v-btn.vue";
import VInput from "./components/v-input.vue";

const app = createApp(App);

app.component("v-btn", VBtn);
app.component("v-input", VInput);

app.mount("#app");
