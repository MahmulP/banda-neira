import {useState, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

function ExchangePoint() {
  if (window.location.pathname === "/exchange-point") {
    import("../assets/css/exchangepoint.css");
  }
  const [loadingText, setLoadingText] = useState("Pointmu lagi diproses ni");

  useEffect(() => {
    const id = document.getElementById("penukaran");
    const loading = document.createElement("div");
    loading.textContent = "Pointmu lagi diproses ni";
    id.appendChild(loading);

    const loaded = setInterval(() => {
      setLoadingText((prevText) => prevText + ".");
    }, 1000);

    setTimeout(() => {
      clearInterval(loaded);
      setLoadingText("YEAY SELAMAT POINTMU BERHASIL DITUKARKAN");
    }, 4000);

    return () => {
      clearInterval(loaded);
      id.removeChild(loading);
    };
  }, []);

  return (
    <>
      <Header />

      <section className="services-one" style={{marginTop: "100px"}}>
        <div className="container">
          <h1 className="industy-details__title">
            <b>Kumpulkan untuk Mendapatkan Voucher!</b>
          </h1>
        </div>
      </section>

      <section
        className="header-about"
        style={{
          background:
            "linear-gradient(357deg, rgba(255,255,255,1) 0%, rgba(220,255,219,1) 100%)",
          marginTop: "50px",
        }}>
        <div
          className="presentase"
          style={{
            backgroundColor: "rgb(150, 150, 150)",
            color: "white",
            fontSize: "2px",
            backgroundColor: "rgb(249, 249, 249)",
            borderRadius: "12px",
            padding: "10px",
            textAlign: "center",
            marginLeft: "250px",
            marginRight: "250px",
            marginTop: "15px",
          }}>
          <div className="skill">
            <div className="box">
              <div className="skill-bar">
                <div className="poin">75</div>
              </div>
            </div>
          </div>
          <p style={{ color: "black", fontSize: "18px" }}>
            Total Poin Anda : 75 Poin
          </p>
        </div>
        <div className="image">
          <img src="src/assets/fdesign/16.png" alt="" />
        </div>
        <div
          id="penukaran"
          style={{
            color: "black",
            fontSize: "25px",
            fontFamily: "'Times New Roman', Times, serif",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "200px",
            marginTop: "150px",
          }}>
          {loadingText}
        </div>
      </section>

      <Footer />
    </>
  );
}
export default ExchangePoint;
