import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

import store from '@/store'

const i18n = createI18n({
  locale: store.getters.getLocale,
  fallbackLocale: store.getters.getLocale,

  allowComposition: true,
  legacy: false,
  globalInjection: true,

  messages
})

export default i18n;