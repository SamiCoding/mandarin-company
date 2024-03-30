import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import nav from './plugins/nav'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(nav)
  .mount('#app')
