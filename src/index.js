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
import TestPage from './pages/TestPage';
import TestPage01 from './pages/testFull/TestPage01';
import TestPage001 from './pages/testFull/TestPage001';
import Collab from './pages/Collab';
import NoteApp from './pages/Notes';
import Users from './pages/Users';

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
  {
    path: "/test",
    element: <TestPage />
  },
  {
    path: "/test/:title",
    element: <TestPage01 />
  },
  {
    path: "/test/TestPage",
    element: <TestPage001 />
  },
  {
    path: "/Collab",
    element: <Collab />
  },
  {
    path: "/Notes",
    element: <NoteApp />
  },
  {
    path: "/users",
    element: <Users />
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
