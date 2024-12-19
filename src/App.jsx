import { useState, useEffect } from 'react';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';
import Customize from './components/customize';
import Checkout from './components/checkout';
import Order from './components/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Customize />
        </>
      ),
    },
    {
      path: '/checkout',
      element: (
        <>
        
          <Header />
          <Checkout />
        </>
      ),
    },
    {
      path: '/Order',
      element: (
        <>
        
          <Header />
          <Order/>
        </>
      ),
    },
  ]);

  

  return(
    
    <RouterProvider router={router} />
  ) 
}

export default App;
