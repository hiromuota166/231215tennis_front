import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <Header />
      {/* <App /> */}
      <Footer/>
    </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();
