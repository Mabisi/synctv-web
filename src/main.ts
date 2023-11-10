import "./assets/reset.css";
import "./assets/global.less";
import "./assets/animation.less";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { userStore } from "@/stores/user";

import SunIcon from "./components/icons/Sun.vue";
import MoonIcon from "./components/icons/Moon.vue";
import PlayIcon from "./components/icons/Play.vue";
import EditIcon from "./components/icons/Edit.vue";
import TrashIcon from "./components/icons/Trash.vue";
import PersonIcon from "./components/icons/Person.vue";
import BilibiliIcon from "./components/icons/Bilibili.vue";

const app = createApp(App);
app
  .component("SunIcon", SunIcon)
  .component("MoonIcon", MoonIcon)
  .component("PlayIcon", PlayIcon)
  .component("EditIcon", EditIcon)
  .component("TrashIcon", TrashIcon)
  .component("PersonIcon", PersonIcon)
  .component("BilibiliIcon", BilibiliIcon);

const { getUserInfo, token } = userStore();

const initApp = async () => {
  try {
    token.value && (await getUserInfo());
  } catch (err: any) {
    console.error(err);
  } finally {
    app.use(createPinia());
    app.use(router);
    app.mount("#app");
  }
};

initApp();
