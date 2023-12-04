import Header from "../components/Header";
import Footer from "../components/Footer";
import Dhika from "../assets/images/img/dhika.jpeg";

function About() {
  if (window.location.pathname === "/about") {
    import("../assets/css/service.css");
  }
  return (
    <>
      <Header></Header>
      <section id="header-about">
      <h2 className="manage-waste__title" style={{ color: "black", textAlign: "center",
            marginTop: "200px",
            marginBottom: "50px",
            fontWeight: "600", }}>
                  Tentang Kami
                </h2>
        <p
          className="box-header"
          style={{
            backgroundColor: "var(--wostin-white)",
            color: "black",
            border: "2px solid rgb(238, 216, 216)",
            borderRadius: "35px",
            padding: "10px",
            textAlign: "center",
            marginLeft: "250px",
            marginRight: "250px",
            marginTop: "15px",
            fontSize: "25px",
            padding: "30px",
          }}>
          Web ini dibuat sebagai respons terhadap meningkatnya masalah
          lingkungan akibat pengelolaan sampah yang tidak efisien dan bertujuan
          untuk menginspirasi perubahan positif dengan menggabungkan edukasi,
          insentif, dan kolaborasi komunitas dalam satu platform.
        </p>
      </section>

      <section className="welcome" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline"></span>
                  <h2 className="section-title__title">Visi Kami</h2>
                </div>
                <p className="welcome__text-2">
                  Mewujudkan lingkungan yang lebih bersih, hijau, dan
                  berkelanjutan melalui kolaborasi komunitas, perubahan perilaku
                  positif, dan inovasi insentif.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome__left">
                <div>
                  <div className="welcome__img">
                    <img
                      src="Src/assets/fdesign/21.jpeg"
                      alt=""
                      style={{ height: "390px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "70px" }}>
            <div className="col-xl-6">
              <div className="welcome__left">
                <div>
                  <div className="welcome__img">
                    <img
                      src="src/assets/fdesign/24.jpeg"
                      alt=""
                      style={{ height: "390px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline"></span>
                  <h2 className="section-title__title">Misi Kami</h2>
                </div>
                <p className="welcome__text-3">
                  <ul className="visi">
                    <li>
                      {" "}
                      Memberikan sumber daya dan informasi kepada individu
                    </li>
                    <li>
                      Mengembangkan sistem insentif poin yang memberikan
                      penghargaan kepada individu yang berpartisipasi
                    </li>
                    <li>
                      Mendorong kolaborasi antara pengguna, pengepul sampah,
                      bank sampah, dan bisnis lokal.
                    </li>
                    <li>Menginspirasi perubahan perilaku positif</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-page industries-page--carousel">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Tim Kami</h2>
          </div>
          <div
            className="thm-owl__carousel owl-carousel owl-theme owl-with-shadow owl-dots__style-1"
            data-owl-options='{
            "loop": true,
            "items": 1,
            "autoplay": true,
            "margin": 30,
            "nav": false,
            "dots": true,
            "smartSpeed": 500,
            "autoplayTimeout": 5000,
            "responsive": {
              "0": {
                "items": 1
              },
              "768": {
                "items": 2
              },
              "992": {
                "items": 3
              }
            }
          }'>
            <div className="item">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img
                    src="img/jehan.jpeg"
                    alt=""
                    style={{ height: "350px" }}
                  />
                </div>
                <div className="team-one__content">
                  <p className="team-one__title">Hustler</p>
                  <h3 className="team-one__name">Sunniyah Jehan L.</h3>
                  <div className="team-one__social-box"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img
                    src="src/assets/img/fardan.jpeg"
                    alt=""
                    style={{ height: "350px" }}
                  />
                </div>
                <div className="team-one__content">
                  <p className="team-one__title">Hipster</p>
                  <h3 className="team-one__name">Fardan Murobby M.</h3>
                  <div className="team-one__social-box"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img
                    src="src/assets/images/img/kartika.jpeg"
                    alt=""
                    style={{ height: "350px" }}
                  />
                </div>
                <div className="team-one__content">
                  <p className="team-one__title">Hipster</p>
                  <h3 className="team-one__name">Kartika Nur Anggraeni</h3>
                  <div className="team-one__social-box"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img
                    src="src/assets/images/img/thurzi.jpeg"
                    alt=""
                    style={{ height: "350px" }}
                  />
                </div>
                <div className="team-one__content">
                  <p className="team-one__title">Hipster</p>
                  <h3 className="team-one__name">Thurzi Retra R.</h3>
                  <div className="team-one__social-box"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img
                    src="src/assets/images/img/machmul.jpeg"
                    alt=""
                    style={{ height: "350px" }}
                  />
                </div>
                <div className="team-one__content">
                  <p className="team-one__title">Hacker</p>
                  <h3 className="team-one__name">Machmul Pratama</h3>
                  <div className="team-one__social-box"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img src={Dhika} alt="" style={{ height: "350px" }} />
                </div>
                <div className="team-one__content">
                  <p className="team-one__title">Hacker</p>
                  <h3 className="team-one__name">Muhammad Andhika</h3>
                  <div className="team-one__social-box"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img src="src/assets/images/img/nisa.jpeg" alt="" style={{ height: "350px" }} />
                </div>
                <div className="team-one__content">
                  <p className="team-one__title">Hacker</p>
                  <h3 className="team-one__name">Nisa Syifa M</h3>
                  <div className="team-one__social-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default About;
