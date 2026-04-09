import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

async function bootstrap() {
  const enableMsw = import.meta.env.VITE_ENABLE_MSW === 'true'

  if (enableMsw) {
    const { worker } = await import('./mocks/browser')
    await worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
  app.mount('#app')
}

void bootstrap()
