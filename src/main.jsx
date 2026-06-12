import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle 404 redirect from GitHub Pages
const redirect = new URLSearchParams(window.location.search).get('redirect')
if (redirect) {
  window.location.replace(redirect)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
