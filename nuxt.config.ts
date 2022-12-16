import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/', '/firestore-getDoc-on-server'],
    },
  },

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
          // FIXME: remove as it should be automatic on vuefire
          serviceAccount: resolve(
            fileURLToPath(new URL('./service-account.json', import.meta.url))
          ),
        },
      },
    ],
  ],
})
