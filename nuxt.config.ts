import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { resolvePath, resolveAlias, resolveFiles } from '@nuxt/kit'

export default defineNuxtConfig({
  modules: [
    [
      'nuxt-vuefire',
      {
        auth: true,
        appCheck: {
          debug: process.env.NODE_ENV !== 'production',
          isTokenAutoRefreshEnabled: true,
          provider: 'ReCaptchaV3',
          key: '6LfJ0vgiAAAAAHheQE7GQVdG_c9m8xipBESx_SKI',
        },

        config: {
          apiKey: 'AIzaSyAkUKe36TPWL2eZTshgk-Xl4bY_R5SB97U',
          authDomain: 'vue-fire-store.firebaseapp.com',
          databaseURL: 'https://vue-fire-store.firebaseio.com',
          projectId: 'vue-fire-store',
          storageBucket: 'vue-fire-store.appspot.com',
          messagingSenderId: '998674887640',
          appId: '1:998674887640:web:1e2bb2cc3e5eb2fc3478ad',
          measurementId: 'G-RL4BTWXKJ7',
        },

        admin: {
          config: {},
          serviceAccount: resolve(
            fileURLToPath(new URL('./service-account.json', import.meta.url))
          ),
        },
      },
    ],
  ],

  // NOTE: temporary workaround that cannot be put within the nuxt-vuefire module
  hooks: {
    // cannot be added in nuxt's resolve.alias
    'vite:extendConfig': (config, { isServer }) => {
      if (isServer) {
        // we need the root node modules where packages are hoisted
        const nodeModules = fileURLToPath(new URL('./node_modules', import.meta.url))

        config.resolve ??= {}
        config.resolve.alias ??= {}
        // @ts-ignore
        config.resolve.alias['firebase/firestore'] = resolve(
          nodeModules,
          'firebase/firestore/dist/index.mjs'
        )
        // @ts-ignore
        config.resolve.alias['@firebase/firestore'] = resolve(
          nodeModules,
          '@firebase/firestore/dist/index.node.mjs'
        )

        // add any other firebase alias you need
      }
    },
  },
})
