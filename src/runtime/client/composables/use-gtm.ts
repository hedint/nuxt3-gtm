import { shallowRef } from "vue";
import { useState } from "#imports";

interface GtmPushObject {
  event?: string
  [key: string]: any
}

declare global {
  interface Window {
    dataLayer: GtmPushObject[]
  }
}

export const useGtmDataLayerData = () => useState<GtmPushObject[]>("gtmDataLayer", () => shallowRef([]));
export const useGtm = () => {
  let pushData;
  if (process.client) {
    pushData = (gtmPushObject: GtmPushObject) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(gtmPushObject);
    };
  } else {
    pushData = (gtmPushObject: GtmPushObject) => {
      useGtmDataLayerData().value.push(gtmPushObject);
    };
  }
  return { pushData };
};
