import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { Auth0Provider } from '@auth0/auth0-react'

const authDomain = import.meta.env.VITE_AUTHDOMAIN;
const authClientId = import.meta.env.VITE_AUTHCLIENTID;

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider 
        domain={authDomain} 
        clientId={authClientId} 
        authorizationParams={
          {
            redirect_uri: window.location.origin,
            audience: 'http://localhost:8000',
            scope: 'openid profile email'
          }
      }>
      <ThemeProvider theme={darkTheme}>
          <App/>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
