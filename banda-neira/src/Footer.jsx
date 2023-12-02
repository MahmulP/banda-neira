import {UseState} from 'react';
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

function Footer() {
  return (
    <div className="site-footer">
      <div className="site-footer-bg" style={{ backgroundImage: `url(src/assets/images/backgrounds/site-footer-bg.jpg)` }}></div>
      <div className="site-footer__middle">
        <div className="container">
          <div className="row">
            <div className="col-md-6 wow fadeInUp animated" data-wow-delay="100ms">
              <div className="footer-widget__column footer-widget__about">
                <a href="index.html"><img src="src/assets/images/resources/logo-1.png" alt="" style={{ marginBottom: '50px' }} /></a>
                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">"Transformasi Sampah Menjadi Kebaikan: Mari Bersama-sama Peduli Lingkungan dan Dapatkan Insentif!"</p>
                </div>
                <div className="social-icons" style={{ marginTop: '10px' }}>
                  <a href="#" className="social-icon"><i className="fab fa-facebook fa-2x"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-twitter fa-2x"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-instagram fa-2x"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="site-footer-bottom-shape" style={{ backgroundImage: `url(src/assets/images/shapes/site-footer-bottom-shape.png)` }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">Berubah Untuk Bumi: Poin Untuk Planet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
