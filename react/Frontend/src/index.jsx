import * as React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/index.css'
import './assets/css/Responsive.css'
import "./bootstrap.min.css";
import "./assets/vendors/jquery-ui/jquery-ui.css";
import "./assets/vendors/fontawesome/css/all.min.css";
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
import ExchangePoint from './pages/ExchangePoint.jsx';
import ProtectedRoutes from './routes/ProtectedRoutes.jsx';
import { ToastContainer } from 'react-toastify';
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
      element:
      <ProtectedRoutes>
        <Point />
      </ProtectedRoutes> ,
    },
    {
      path: "exchange-point",
      element: <ExchangePoint />,
    }
  ]);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={router} />
  );