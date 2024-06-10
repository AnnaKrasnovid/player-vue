import { createApp } from 'vue'
import router from './router'
import { createPinia } from "pinia";
import { createI18n, useI18n } from 'vue-i18n';
//@ts-ignore
import { languages, defaultLocale } from './i18n/index.js'

import App from './App.vue'

import '@/assets/styles/index.scss'
import 'normalize.css';

const pinia = createPinia()

const messages = Object.assign(languages)
const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'ru',
  locale: defaultLocale,
  messages: messages,
})

createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
  .use(pinia)
  .use(router)
  .use(i18n)
  .mount('#app')
