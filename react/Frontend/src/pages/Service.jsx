import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceOneImage from "../assets/images/services/services-1-1.jpg";
import ServiceTwoImage from "../assets/images/services/services-1-2.jpg";
import ServiceThreeImage from "../assets/images/services/services-1-3.jpg";
import ServiceFourImage from "../assets/images/services/services-1-4.jpg";
import MaterialBg from "../assets/images/backgrounds/waste-materials-bg.jpg";
import MaterialShape from "../assets/images/shapes/waste-materials-shape-1.png";

function Service() {
  if (window.location.pathname === "/service") {
    import("../assets/css/service.css");
  }
  return (
    <>
      <Header></Header>
      <section>
        <div className="container" style={{ marginTop: "200px" }}>
          <div className="row">
            <div className="col-xl-12">
              <div className="manage-waste__inner">
                <h3 className="manage-waste__title" style={{ color: "black" }}>
                  Kelola Sampah Secara Efektif <br /> dan Mengurangi Dampak
                  Lingkungan
                </h3>
                <div className="manage-waste__btn-box">
                  <a
                    href="https://api.whatsapp.com/send?phone=62882015033199&text=Saya%20ingin%20melakukan%20penukaran%20sampah,%20harap%20lakukan%20penjemputan%20ke%20lokasi%20saya%20sekarang.&app_absent=0"
                    className="thm-btn manage-waste__btn-1" target="_blank">
                    Jemput Sampahmu
                  </a>
                  <a href="/contact" className="thm-btn manage-waste__btn-2">
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-one">
        <div className="container">
          <div className="services-one__top">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="services-one__top-left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Apa yang kami tawarkan
                    </span>
                    <h2 className="section-title__title">
                      Layanan yang kami berikan
                      <br /> kepada pelanggan kami
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="services-one__top-right">
                  <p className="services-one__top-text">
                    Kami berkomitmen untuk mengurangi penumpukan sampah di
                    masyarakat sampai sampah terkecil sekalipun, sebagai salah
                    satu upaya dalam menjaga lingkungan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="services-one__bottom">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms">
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img src={ServiceOneImage} alt="" />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-garbage-1"></span>
                    </div>
                  </div>
                  <div className="services-one__content-box">
                    <div className="services-one__content">
                      <h3 className="services-one__title">
                        <a href="zero-waste.html">Zero Waste</a>
                      </h3>
                    </div>
                    <div className="services-one__hover">
                      <h3 className="services-one__hover-title">
                        <a href="zero-waste.html">Zero Waste</a>
                      </h3>
                      <p className="services-one__hover-text">
                        Membantu mengurangi limbah di sekitar rumahmu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms">
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img src={ServiceTwoImage} alt="" />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-dumpster"></span>
                    </div>
                  </div>
                  <div className="services-one__content-box">
                    <div className="services-one__content">
                      <h3 className="services-one__title">
                        <a href="dumpster-rental.html">Pickup</a>
                      </h3>
                    </div>
                    <div className="services-one__hover">
                      <h3 className="services-one__hover-title">
                        <a href="dumpster-rental.html">Pickup</a>
                      </h3>
                      <p className="services-one__hover-text">
                        Jemputan sampah dengan waktu fleksibel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms">
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img src={ServiceThreeImage} alt="" />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-portable-toilets"></span>
                    </div>
                  </div>
                  <div className="services-one__content-box">
                    <div className="services-one__content">
                      <h3 className="services-one__title">
                        <a href="portable-toilet.html">Olsam Point</a>
                      </h3>
                    </div>
                    <div className="services-one__hover">
                      <h3 className="services-one__hover-title">
                        <a href="portable-toilet.html">Olsam Point</a>
                      </h3>
                      <p className="services-one__hover-text">
                        Konversi sampahmu menjadi point.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms">
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img src={ServiceFourImage} alt="" />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-triangular-arrows-sign-for-recycle"></span>
                    </div>
                  </div>
                  <div className="services-one__content-box">
                    <div className="services-one__content">
                      <h3 className="services-one__title">
                        <a href="recylcing-services.html">Daur Ulang</a>
                      </h3>
                    </div>
                    <div className="services-one__hover">
                      <h3 className="services-one__hover-title">
                        <a href="recylcing-services.html">Daur Ulang</a>
                      </h3>
                      <p className="services-one__hover-text">
                        Daur ulang sampah untuk mengurangi penumpukan sampah.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="waste-materials" style={{ marginBottom: "200px" }}>
        <div className="container">
          <div className="waste-materials__inner">
            <div
              className="waste-materials-bg"
              style={{
                backgroundImage: `url(${MaterialBg})`,
              }}></div>
            <div className="waste-materials-shape-1 float-bob-y">
              <img src={MaterialShape} alt="" />
            </div>
            <div className="waste-materials__title-box">
              <h2 className="waste-materials__title">
                Jenis sampah yang kami <br /> kelola dan daur ulang
              </h2>
            </div>
            <div className="waste-materials__points">
              <ul className="list-unstyled waste-materials__point-1">
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <a href="">
                      <p>Besi & Logam</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <a href="">
                      <p>Lampu/Bohlam</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <a href="trash/plastik.html">
                      <p>Plastik</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <a href="">
                      <p>Buku & Kertas</p>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="list-unstyled waste-materials__point-1 waste-materials__point-2">
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <a href="">
                      <p>Alumunium</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <a href="">
                      <p>Botol</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <a href="">
                      <p>Makanan</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <a href="">
                      <p>Elektronik</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Service;
