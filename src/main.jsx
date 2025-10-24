import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ResultProvider } from './context/Results.c.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <BrowserRouter>

    <ResultProvider>
    <Toaster/>
    <App />
    </ResultProvider>
    </BrowserRouter>
  </StrictMode>,
)
