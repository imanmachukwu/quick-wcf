import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPrismic } from "@prismicio/vue";
//import barba from "@barba/core";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const prismic = createPrismic({
  endpoint: "https://wcfresources.cdn.prismic.io/api/v2",
  Client: {
    endpoint: "https://wcfresources.cdn.prismic.io/api/v2",
    accessToken:
      "MC5aZFpiUEJFQUFDRUFLWW54.IWrvv700aDg6Cu-_vRnvv70FHhjvv71WOnrvv73vv71577-9He-_ve-_vXkXUu-_vXs8fg",
    routes: router,
  },
});

/* barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        console.log(data);
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        console.log(data);
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
}); */

//console.log(prismic);

createApp(App).use(router).use(prismic).mount("#app");
