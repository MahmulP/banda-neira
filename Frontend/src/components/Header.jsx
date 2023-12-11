import React, { useState, useEffect } from "react";
import axios from "axios";
import toastr from "toastr";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:8000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUsername(decoded.username);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log(error);
      }
    }
  };

  const handleLogout = async (req, res, next) => {
    try {
      const response = await axios.delete("http://localhost:8000/logout");
      navigate("/login");

      toastr.success("Successfully logged out");
    } catch (error) {
      console.log(error);
    }
  };

  const isActive = (path) => {
    return window.location.pathname === path ? "active-tab" : "";
  };

  const current = (path) => {
    return window.location.pathname === path ? "current" : "";
  };

  return (
    <>
      <header className="main-header-three">
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-wrapper__logo">
              <a href="index.html">
                <img src="/logo-1.png" alt="Logo" />
              </a>
            </div>
            <div className="main-menu-three__main-menu">
              <a href="#" className="mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </a>
              <ul className="main-menu__list">
                <li className={current("/")}>
                  <a href="/" className={isActive("/")}>
                    Beranda
                  </a>
                </li>
                <li className={current("/service")}>
                  <a href="service" className={isActive("/service")}>
                    Layanan Kami
                  </a>
                </li>
                <li className={current("/process")}>
                  <a href="process" className={isActive("/process")}>
                    Cara Kerja
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Informasi
                  </a>
                  <ul className="dropdown-menu">
                    <li className={current("/information")}>
                      <a
                        href="information"
                        className={isActive("/information")}>
                        Bank Sampah
                      </a>
                    </li>
                    <li className={current("/trash-selection")}>
                      <a
                        href="trash-selection"
                        className={isActive("/trash-selection")}>
                        Pemilihan Sampah
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={current("/about")}>
                  <a href="about" className={isActive("/about")}>
                    Tentang Kami
                  </a>
                </li>
                <li className={current("/contact")}>
                  <a href="contact" className={isActive("/contact")}>
                    Kontak Kami
                  </a>
                </li>
              </ul>
            </div>
            <div className="main-menu-three__right">
              <div className="main-menu-three__search-box">
                {username ? (
                  <div className="dropdown">
                    <a href=""
                      className="text-black dropdown-toggle"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      {username}
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink">
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={handleLogout}>
                        Log Out
                      </a>
                    </div>
                  </div>
                ) : (
                  <a href="login" className={current("/login")}>
                    Masuk
                  </a>
                )}
              </div>
              <div className="main-menu-three__call">
                <div className="main-menu-three__call-icon">
                  <span className="icon-budget"></span>
                </div>
                <div className="main-menu-three__call-number">
                  <h5>
                    <a href="point" className={isActive("/point")}>
                      Point
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
