import { useGtmDataLayerData } from "../composables/use-gtm";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin({
  name: "nuxt3-gtm-plugin",
  hooks: {
    "app:beforeMount": () => {
      const gtmDataLayer = useGtmDataLayerData();
      console.info(gtmDataLayer);
      while (gtmDataLayer.value.length) {
        const obj = gtmDataLayer.value.shift();
        if (obj) {
          window.dataLayer.push(obj);
        }
      }
    },
  },
});
