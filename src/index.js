import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import SignIn from './pages/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
},
{
  path: "signin",
  element: <SignIn />,
}
])

root.render(<RouterProvider router={router} />);


reportWebVitals();
