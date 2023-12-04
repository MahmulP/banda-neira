import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css'
import './assets/css/Responsive.css'
import "./bootstrap.min.css";
import "./assets/vendors/jquery-ui/jquery-ui.css";
import "./assets/vendors/fontawesome/css/all.min.css";
import "./assets/vendors/wostin-icons/style.css";
import "./assets/vendors/timepicker/timePicker.css";
import "./assets/vendors/owl-carousel/owl.carousel.min.css";
import "./assets/vendors/jquery/jquery-3.6.0.min.js";
import "./assets/vendors/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendors/timepicker/timePicker.js";
import "./assets/vendors/owl-carousel/owl.carousel.min.js";
import App from './pages/App';
import AuthLogin from './pages/AuthLogin';
import AuthRegister from './pages/AuthRegister';
import Service from './pages/Service';
import About from './pages/About';
import Process from './pages/Process';
import Information from './pages/Information';
import TrashSelection from './pages/Trash-selection';
import Contact from './pages/Contact.jsx';
import Point from './pages/Point.jsx';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
    {
      path: "service",
      element: <Service />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "process",
      element: <Process />,
    },
    {
      path: "information",
      element: <Information />,
    },
    {
      path: "trash-selection",
      element: <TrashSelection />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "point",
      element: <Point />,
    },
  ]);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={router} />
  );