import HomePart from "./components/HomePart";
import AboutPage from "./components/pages/AboutPage"
import ContactUs from "./components/pages/ContactUs"
import VendorReg from "./components/pages/JoinUs"
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    name: HomePart,
    component: HomePart,
    path: "/"
  },
  {
    name: AboutPage,
    component: AboutPage,
    path: "/about-us"
  },

  {
    name: ContactUs,
    component: ContactUs,
    path: "/contact-us"
  },
  {
    name: VendorReg,
    component: VendorReg,
    path: "/vendor-registration"
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
