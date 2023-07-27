import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/homepage.jsx';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App pages={<HomePage/>}/>
  },
  {
    path: '/login',
    element: <App pages={<LoginPage/>}/>
  },
  {
    path: '/register',
    element: <App pages={<RegisterPage/>}/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
