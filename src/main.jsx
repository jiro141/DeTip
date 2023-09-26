import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './assets/css/Global.css'
import { GoogleOAuthProvider } from '@react-oauth/google'



ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='574095482632-kos2cb0cr06setldm5nkn2j9i159aaff.apps.googleusercontent.com'>
    <React.StrictMode>
      <ChakraProvider>
        <App  />
      </ChakraProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
)
