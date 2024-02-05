import { addServerPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";
import { defu } from "defu";
import type { Nuxt3GtmModuleOptions } from "./types/nuxt3-gtm-module-options";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt3-gtm",
    configKey: "gtm",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const defaultOptions = {
      shownInDevMode: true,
    };
    nuxt.options.runtimeConfig.public.gtm = defu(nuxt.options.runtimeConfig.public.gtm, options, defaultOptions);
    addServerPlugin(resolve("./runtime/server/plugins/nitro-plugin-gtm"));
  },
});

export interface ModuleOptions extends Nuxt3GtmModuleOptions {}
export interface ModulePublicRuntimeConfig {
  gtm?: Nuxt3GtmModuleOptions
}
declare module "@nuxt/schema" {
  interface NuxtConfig {
    ["gtm"]?: ModuleOptions
  }
  interface NuxtOptions {
    ["gtm"]?: ModuleOptions
  }
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}

}
declare module "nitropack" {
  interface NitroRuntimeConfig {
    public: {
      gtm?: Nuxt3GtmModuleOptions
    }
  }
}
