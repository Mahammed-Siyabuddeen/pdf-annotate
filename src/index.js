import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page2 from './components/Page2'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/2',
    element:<Page2/>
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);