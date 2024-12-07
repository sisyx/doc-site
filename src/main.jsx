import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@/styles/responsive.css'
import '@/styles/animate.css'
// import '@/styles/select2.min.css'
// import '@/styles/venobox.min.css'
import '@/styles/custom_spacing.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
)
