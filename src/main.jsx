import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global magical foundations
import App from './App.jsx' // The main Dashboard container

// Connecting the React virtual DOM to the real 'root' element in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)