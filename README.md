<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt 3 GTM
- Package name: nuxt3-gtm
- Description: My new Nuxt module
-->

# Nuxt 3 GTM

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt 3 module for adding [Google Tag Manager (GTM)](https://support.google.com/tagmanager/answer/6102821?hl=en) script to the every page of your nuxt 3 project.

## Quick Setup

1. Add `nuxt3-gtm` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt3-gtm

# Using yarn
yarn add --dev nuxt3-gtm

# Using npm
npm install --save-dev nuxt3-gtm
```

2. Add `nuxt3-gtm` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    "nuxt3-gtm"
  ]
})
```
There are only two settings:
- **id**: your gtm id
- **shownInDevMode** : Whether you want GTM to be included in a dev environment.

You are able to pass these options through:

- gtm section in your nuxt.config.ts
```javascript
export default defineNuxtConfig({
  modules: [
    "nuxt3-gtm"
  ],
  gtm: {
    id: "GTM-123456"
  }
})
```

- nuxt [runtimeConfig](https://nuxt.com/docs/guide/going-further/runtime-config) (you can override these settings by setting up env variables)
```javascript
export default defineNuxtConfig({
  modules: [
    'nuxt3-gtm'
  ],
  runtimeConfig: {
    public: {
      gtm: {
        id: "GTM-123456",
        shownInDevMode: false,
      }
    }
  }
})
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt3-gtm/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt3-gtm

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt3-gtm.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt3-gtm

[license-src]: https://img.shields.io/npm/l/nuxt3-gtm.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt3-gtm

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
