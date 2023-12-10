import { useState } from "react";
import axios from "axios";
import "toastr/build/toastr.css";
import toastr from "toastr";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  if (window.location.pathname === "/contact") {
    import("../assets/css/service.css");
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/post-message", {
        name: name,
        email: email,
        subject: subject,
        phone: phone,
        message: message,
      });

      setName("");
      setEmail("");
      setSubject("");
      setPhone("");
      setMessage("");

      toastr.success(
        "Pesan Anda berhasil kami terima, Anda akan segera kami hubungi"
      );
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
        toastr.error(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <Header />
      <section className="page-header" style={{ marginTop: "120px" }}>
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(src/assets/images/backgrounds/wostin-for-job-hover-bg.jpg)",
          }}></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Kontak Kami</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>Kontak Kami</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="header-about"
        style={{ backgroundImage: "linear-gradient(#8ad584ee, #ffffffc8)" }}>
        <div className="row">
          <div className="col-xl-12">
            <div className="welcome">
              <form action="#" className="faq-search__search-form">
                <input
                  type="search"
                  placeholder="Cari yang anda butuhkan"
                  style={{
                    backgroundColor: "rgba(243, 243, 243, 0.999)",
                    color: "black",
                  }}
                />
                <button type="submit">
                  <i className="icon-magnifying-glass" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title " style={{ fontSize: 45 }}>
              Pilih Opsi Yang Kami Sediakan
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img src="assets/waste-bankimages.jpeg" alt="" />
                </div>
                <div className="industries-one__content">
                  <div className="industries-one__icon">
                    <span className="icon-recycling-symbol" />
                  </div>
                  <h3 className="industries-one__title">
                    <a href="panduan.html">Panduan</a>
                  </h3>
                  <p className="industries-one__text">
                    Pertanyaan yang sering ditanyakan pengguna
                  </p>
                  <div className="industries-one__arrow"></div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img
                    src="assets/waste-bankbank-sampah-png-616cc1e08bae9314b841cb22.png"
                    alt=""
                  />
                </div>
                <div className="industries-one__content">
                  <div className="industries-one__icon">
                    <span className="icon-quote" />
                  </div>
                  <h3 className="industries-one__title">
                    <a href="faq.html">FAQ</a>
                  </h3>
                  <p className="industries-one__text">
                    Pertanyaan yang sering ditanyakan pengguna
                  </p>
                  <div className="industries-one__arrow"></div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms">
              <div className="industries-one__single">
                <div className="industries-one__img">
                  <img
                    src="assets/waste-bankbank-sampah-dan-pegadaian_copy_800x500.jpg"
                    alt=""
                  />
                </div>
                <div className="industries-one__content">
                  <div className="industries-one__icon">
                    <span className="icon-affection" />
                  </div>
                  <h3 className="industries-one__title">
                    <a href="komunitas.html">Komunitas</a>
                  </h3>
                  <p className="industries-one__text">
                    Pertanyaan yang sering ditanyakan pengguna
                  </p>
                  <div className="industries-one__arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-content" style={{ marginBottom: 30 }}>
          <h4
            className="faq-content-title"
            style={{ fontSize: 45, fontWeight: "bold" }}>
            {" "}
            <center>
              Cari dibawah ini
              <br />
            </center>
          </h4>
          <h5
            className="faq-content-title-styele"
            style={{
              margin: 25,
              fontSize: 25,
              fontFamily: "Arial, Helvetica, sans-serif",
            }}>
            <center>
              Pilih salah satu pertanyaan yang sudah kami sediakan.
            </center>
          </h5>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}>
            <div className="col-xl-8 col-lg-7">
              <div className="faq-waste-pickup__left">
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion-1">
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Cara kerja Point?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Point akan terus didapatkan apabila kita selalu rajin
                          menukarkan sampah kita melalui website ini, dan juga
                          dapat ditukarkan melalui menu{" "}
                          <a href="point.html">poin</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Cara buat akun?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Untuk pembuatan akun dapat melalui menu registrasi
                          yang telah tersedia ataupun dapat melalui{" "}
                          <a href="register.html">tombol berikut</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion last-chiled">
                    <div className="accrodion-title">
                      <h4>Cara mencari komunitas?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Kamu dapat mencari komunitas peduli lingkungan di
                          sekitar kamu, dan kamu dapat melakukan registrasi
                          anggota dari komunitas kamu ke website kami ini.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="contact-one contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-one__left">
                  <div className="section-title text-left">
                    <h2 className="section-title__title">
                      Jangan ragu untuk kirimkan pertanyaan Anda kepada kami
                    </h2>
                  </div>
                  <ul className="list-unstyled contact-one__info">
                    <li>
                      <div className="icon">
                        <span className="icon-phone-call" />
                      </div>
                      <div className="text">
                        <p>Email</p>
                        <a href="#">olsam-help@gmail.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-placeholder" />
                      </div>
                      <div className="text">
                        <p>Kunjungi kami di</p>
                        <span>Malang, Jawa Timur</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-one__right">
                  <form
                    className="contact-one__form contact-form-validated"
                    onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xl-12 col-lg-6 col-md-6">
                        <div className="contact-one__form-input-box">
                          <input
                            type="text"
                            placeholder="Nama Lengkap"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-6 col-md-6">
                        <div className="contact-one__form-input-box">
                          <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-6 col-md-6">
                        <div className="contact-one__form-input-box">
                          <input
                            type="text"
                            placeholder="Nomor Ponsel"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-6 col-md-6">
                        <div className="contact-one__form-input-box">
                          <input
                            type="text"
                            placeholder="Subjek"
                            name="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-one__form-input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Pesan"
                            defaultValue={""}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                        <div className="contact-one__btn-box">
                          <button
                            type="submit"
                            className="thm-btn contact-one__btn">
                            Kirim
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Contact;
