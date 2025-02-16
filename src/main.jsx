import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BlogContext } from './BlogContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogContext.Provider>
      <App />
    </BlogContext.Provider>
  </StrictMode>,
)
