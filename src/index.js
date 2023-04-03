import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Assets/fonts/Gilam-Black.ttf';
import './Assets/fonts/Gilam-BlackItalic.ttf';
import './Assets/fonts/Gilam-Bold.ttf';
import './Assets/fonts/Gilam-BoldItalic.ttf';
import './Assets/fonts/Gilam-Book.ttf';
import './Assets/fonts/Gilam-BookItalic.ttf';
import './Assets/fonts/Gilam-ExtraLight.ttf';
import './Assets/fonts/Gilam-ExtraLightItalic.ttf';
import './Assets/fonts/Gilam-Heavy.ttf';
import './Assets/fonts/Gilam-HeavyItalic.ttf';
import './Assets/fonts/Gilam-Light.ttf';
import './Assets/fonts/Gilam-LightItalic.ttf';
import './Assets/fonts/Gilam-Regular.ttf';
import './Assets/fonts/Gilam-RegularItalic.ttf';
import './Assets/fonts/Gilam-SemiBold.ttf';
import './Assets/fonts/Gilam-SemiBoldItalic.ttf';
import './Assets/fonts/Gilam-Thin.ttf';
import './Assets/fonts/Gilam-ThinItalic.ttf';
import './Assets/fonts/HelveticaLt.ttf';
import './Assets/fonts/Helvetica-Light.ttf';
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
