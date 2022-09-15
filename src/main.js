import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'

import router from '@/router'
import store from '@/store'
import i18n from '@/utils/i18n'
import { jphAxios } from '@/utils/axios'

import App from '@/App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.use(createMetaManager())

app.provide('jphAxios', jphAxios)

app.mount('#app')