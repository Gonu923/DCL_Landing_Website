import router from "./routers";
import App from "./App.vue";
import { createApp } from "vue";
import 'bootstrap';


createApp(App).use(router).mount("#app");
