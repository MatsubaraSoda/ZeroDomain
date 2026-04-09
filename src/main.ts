import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

async function bootstrap() {
  const mswFlag = import.meta.env.VITE_ENABLE_MSW
  const enableMsw = mswFlag != null ? mswFlag === 'true' : import.meta.env.DEV

  if (enableMsw) {
    const { worker } = await import('./mocks/browser')
    await worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
  app.mount('#app')
}

void bootstrap()
