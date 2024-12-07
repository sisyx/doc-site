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
import store from './redux/store.js';
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
)
