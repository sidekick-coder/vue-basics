import { createApp } from "vue";
import App from "./App.vue";
import components from "./plugins/global-components";

const app = createApp(App);

app.use(components);

app.mount("#app");
