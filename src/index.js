import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/Dashboard';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home.js';
import Contact from './components/Contact.js';
import ProductApiCall from './components/ProductApiCall.js';
import ProductDetails from './components/ProductDetails.js';

let routes = createBrowserRouter([
  {
    path:"/",
    element:<Dashboard/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        index:true
      },
      {
        path:"products",
        element:<ProductApiCall/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/products/:id",
        element:<ProductDetails/>
      }
    ]

}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}>
    <Dashboard/>
  </RouterProvider>
);

