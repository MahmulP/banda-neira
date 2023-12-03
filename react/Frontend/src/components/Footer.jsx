import { UseState } from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="site-footer-bg"
        style={{
          backgroundImage: `url(src/assets/images/backgrounds/site-footer-bg.jpg)`,
        }}></div>
      <div className="site-footer__middle">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 wow fadeInUp animated"
              data-wow-delay="100ms"
              style={{
                marginRight: "auto",
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}>
              <div className="footer-widget__column footer-widget__about">
                <a href="index.html">
                  <img
                    src="src/assets/images/resources/logo-1.png"
                    alt=""
                    style={{ marginBottom: "50px" }}
                  />
                </a>
                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">
                    "Transformasi Sampah Menjadi Kebaikan: Mari Bersama-sama
                    Peduli Lingkungan dan Dapatkan Insentif!"
                  </p>
                </div>
                <div className="social-icons" style={{ marginTop: "10px" }}>
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                  {/* Add more social media icons as needed */}
                </div>
              </div>
            </div>
            <div
              className="col-md-3 wow fadeInUp animated"
              data-wow-delay="200ms"
              style={{
                visibility: "visible",
                animationDelay: "200ms",
                animationName: "fadeInUp",
              }}>
              <div className="footer-widget__column footer-widget__links clearfix">
                <h3 className="footer-widget__title">Abouts</h3>
                <ul className="footer-widget__links-list list-unstyled clearfix">
                  <li>
                    <a href="about.html">Careers</a>
                  </li>
                  <li>
                    <a href="request-pickup.html">Contact us</a>
                  </li>
                  <li>
                    <a href="about.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="services.html">Terms and Condition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-3 wow fadeInUp animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInUp",
              }}>
              <div className="footer-widget__column footer-widget__services clearfix">
                <h3 className="footer-widget__title">Olah Sampah</h3>
                <ul className="footer-widget__services-list list-unstyled clearfix">
                  <li>
                    <a href="dumpster-rental.html">Products</a>
                  </li>
                  <li>
                    <a href="about.html">Partner</a>
                  </li>
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="zero-waste.html">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div
          className="site-footer-bottom-shape"
          style={{
            backgroundImage: `url(src/assets/images/shapes/site-footer-bottom-shape.png)`,
          }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  Berubah Untuk Bumi: Poin Untuk Planet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
