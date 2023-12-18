// import React from "react";
// import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/light.css";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = async (req, res, next) => {
    try {
      const response = await axios.delete("http://localhost:8000/logout");
      navigate("/login");

      toastr.success("Successfully logged out");
    } catch (error) {
      console.log(error);
    }
  };
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //   const toggleSidebar = () => {
  //     setIsSidebarOpen(!isSidebarOpen);
  //   };
  return (
    <>
      <nav className="navbar navbar-expand-lg mb-3 navbar-light navbar-bg">
        <a className="sidebar-toggle p-4 ">
          <i className="bi bi-list align-self-center text-black"></i>
        </a>
        <div className="container-fluid">
          <a className="navbar-brand d-none d-md-block text-black" href="#">
            Dashboard
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="nav nav-pills ms-auto mb-2 mb-lg-0">
              <li
                className="nav-item mx-1 rounded border"
                style={{ textDecoration: "none" }}
              >
                <a className="nav-link text-black">Account</a>
              </li>
              <li
                className="nav-item mx-1 rounded border"
                style={{ textDecoration: "none" }}
              >
                <a
                  className="nav-link text-black"
                  href="#"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
