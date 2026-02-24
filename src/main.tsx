import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async'
=======
>>>>>>> d730f26463a23ec299dfacc2d15acc8be8931f09
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> d730f26463a23ec299dfacc2d15acc8be8931f09
  </StrictMode>,
)
