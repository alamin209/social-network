import React from 'react'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from 'react-router-dom';
const styles= {
  global:(props)=>({
    body:{
      color:mode('gray.800', 'whiteAlpha.900')(props),
      bg:mode('gray.800', '#101010')(props),
    }
  })
};
const config= {
  initialColormode: 'dark',
  useSystemColorMode: true
}
const color= {
     gray:{
      light:"#616161",
      dark:"#1e1e1e"
     }
}
const theme = extendTheme({config, styles,color})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme} >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <App />
      </ChakraProvider>
      </BrowserRouter>
    
  </React.StrictMode>, 
)
