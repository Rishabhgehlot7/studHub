import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import LoginContext, { LoginDetails } from './context/LoginContext';
import Home from './pages/Home';
import AiPage from './pages/AiPage';
import Coureses from './pages/Coureses';

const root = ReactDOM.createRoot(document.getElementById('root'));

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Login",
    element: <LoginPage />
  },
  {
    path: "Register",
    element: <Register />
  },
  {
    path: "/ai",
    element: <AiPage />
  },
  {
    path: "/Coureses",
    element: <Coureses />
  },
])

root.render(
  <React.StrictMode>
    <LoginContext>
      <RouterProvider router={router} />
    </LoginContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
