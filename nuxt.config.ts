import { defineNuxtConfig, NuxtConfig } from 'nuxt/config'
import type { InputConfig, ConfigLayerMeta } from 'c12'
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['./assets/css/reset.less', '~/assets/css/global.less'],
  build: {
    transpile: ['intersection-observer']
  },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  app: {
    head: {
      title: 'Nuxt',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover,user-scalable=no' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: '@/assets/reset.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  }
} as InputConfig<NuxtConfig, ConfigLayerMeta>)
