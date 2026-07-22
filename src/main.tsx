import '@getdashfy/ui/styles.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeRegistry } from '@getdashfy/ui'

import { App } from './App'

ThemeRegistry.loadAllThemes()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
