import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Assets/fonts/Roboto-Regular.ttf';
import './Assets/fonts/Roboto-Bold.ttf';
import './Assets/fonts/Roboto-Light.ttf';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './Components/HomePage';
import { DesarrollosDetailsPage } from './Components/DesarrollosDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/desarrollos",
    element: <DesarrollosDetailsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} >

      <App />
    </RouterProvider>
  </React.StrictMode>
);
