import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import Initial from './App.jsx'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Auth0Provider
    domain="dev-3c2xolx3hiy88ux3.ca.auth0.com"
    clientId="pi82Z2qtXmxHjHAOnNrrZrpu81jkOsbl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
     <Initial />

  </Auth0Provider>
  </StrictMode>
);

