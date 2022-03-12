import { createWebHistory, createRouter } from "vue-router"
import Home from '../views/Home.vue'
import About from '../views/about.vue'
import OurWork from '../views/ourwork.vue'
import ContactUs from '../views/contactus.vue'


const history = createWebHistory();
const routes = [
  { path: "/", component: Home, name: 'Home' },
  { path: "/about", component: About, name: 'About' },
  { path: "/about#information", component: About, name: 'AboutInformation' },
  { path: "/ourwork", component: OurWork, name: 'ourwork' },
  { path: "/contactus", component: ContactUs, name: 'contactus' },
];


const router = createRouter({ 
  history, 
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
   });
   router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    
    // More code ...
    next();
  });
export default router;