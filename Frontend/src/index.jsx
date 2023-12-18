// Import necessary libraries and components
import * as React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./assets/css/index.css";
import "./assets/css/Responsive.css";
import "./bootstrap.min.css";
import "./assets/vendors/jquery-ui/jquery-ui.css";
import "./assets/vendors/fontawesome/css/all.min.css";
import "./assets/vendors/wostin-icons/style.css";
import "./assets/vendors/timepicker/timePicker.css";
import "./assets/vendors/OwlCarousel/dist/assets/owl.carousel.css";
import "./assets/vendors/jquery/jquery-3.6.0.min.js";
import "./assets/vendors/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendors/timepicker/timePicker.js";
import "./assets/vendors/owl-carousel/owl.carousel.min.js";
import App from "./pages/App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import About from "./pages/About";
import Process from "./pages/Process";
import Information from "./pages/Information";
import TrashSelection from "./pages/Trash-selection";
import Contact from "./pages/Contact.jsx";
import Point from "./pages/Point.jsx";
import ExchangePoint from "./pages/ExchangePoint.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import User from "./pages/User.jsx";
import Messages from "./pages/Messages.jsx";
import Settings from "./pages/Settings.jsx";
import Voucher from "./pages/Voucher.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
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
  {
    path: "exchange-status",
    element: <ExchangePoint />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "role-user",
    element: <User />,
  },
  {
    path: "messages",
    element: <Messages />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "voucher",
    element: <Voucher />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
]);

// Create a root for ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap your entire application with AuthProvider and RouterProvider
root.render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
