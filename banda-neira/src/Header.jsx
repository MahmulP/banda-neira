import { useState } from 'react';
import './App.css';
import './index.css';
import './Responsive.css';
import './bootstrap.min.css';
import './assets/vendors/jquery-ui/jquery-ui.css';
import './assets/vendors/fontawesome/css/all.min.css';
import './assets/vendors/wostin-icons/style.css';
import './assets/vendors/timepicker/timePicker.css';
import './assets/vendors/jquery/jquery-3.6.0.min.js';
import './assets/vendors/bootstrap/js/bootstrap.bundle.min.js';
import './assets/vendors/timepicker/timePicker.js';

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="main-header-three">
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-wrapper__logo">
              <a href="index.html"><img src="assets/images/resources/logo-1.png" alt="Logo"></img></a>
            </div>
            <div className="main-menu-three__main-menu">
              <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
              <ul className="main-menu__list">
                <li><a href="index.html" className="active-tab">Beranda</a></li>
                <li><a href="services.html">Layanan Kami</a></li>
                <li><a href="about.html">Tentang Kami</a></li>
                <li><a href="process.html">Cara Kerja</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Informasi
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="information.html">Bank Sampah</a></li>
                    <li><a className="dropdown-item" href="pemilihan_sampah.html">Pemilihan Sampah</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Kontak Kami</a></li>
              </ul>
            </div>
            <div className="main-menu-three__right">
              <div className="main-menu-three__search-box">
                <a href="login.html">Masuk</a>
              </div>
              <div className="main-menu-three__call">
                <div className="main-menu-three__call-icon">
                  <span className="icon-budget"></span>
                </div>
                <div className="main-menu-three__call-number">
                  <h5><a href="point.html">Point</a></h5>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
