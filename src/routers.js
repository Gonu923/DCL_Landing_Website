import HomePart from "./components/HomePart";
import AboutPage from "./components/pages/AboutPage"
import ContactUs from "./components/pages/ContactUs"
import VendorReg from "./components/pages/JoinUs"
import MessagePage from "./components/pages/MessagePage"
import OurServices from "./components/pages/OurServices"
import PartnerPage from "./components/pages/PartnerPage"
import MediaPage from "./components/pages/MediaPage"
import EnterPrise from "./components/pages/EnterPrise"
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
  {
    name: OurServices,
    component: OurServices,
    path: "/our-services"
  },
  {
    name: MessagePage,
    component: MessagePage,
    path: "/message"
  },
  {
    name: PartnerPage,
    component: PartnerPage,
    path: "/Partner"
  },
  {
    name:MediaPage,
    component: MediaPage,
    path: "/media"
  },
  {
    name:EnterPrise,
    component: EnterPrise,
    path: "/EnterPrise"
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
