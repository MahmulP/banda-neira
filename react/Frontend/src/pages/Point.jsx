import Header from "../components/Header";
import Footer from "../components/Footer";

function Point() {
  if (window.location.pathname === "/point") {
    import("../assets/css/point.css");
  }
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
          marginTop: "-80px",
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
            Total Poin Anda: 75 Poin
          </p>
        </div>

        <div className="container-voc">
          <div className="voucher-body">
            <div className="voucher">
              <h2>VOUCHER DISKON 20%</h2>
              <p style={{ borderBottom: "1px solid black" }}>
                Valid until <b>23 June 2024</b>
              </p>
              <p>
                Diskon 20% s/d Rp 5.000 dengan minimal belanja Rp 150.000 di
                Indomaret
              </p>
              <button className="voucher-code">
                <a href="exchange-point">Tukar 150 point</a>
              </button>
            </div>
            <div className="voucher">
              <h2>VOUCHER DISKON 15%</h2>
              <p style={{ borderBottom: "1px solid black" }}>
                Valid until <b>23 June 2024</b>
              </p>
              <p>
                Diskon Top Up 15% s/d Rp 10.000 dengan minimal belanja Rp
                120.000 di Alfamart
              </p>
              <button className="voucher-code">
                <a href="exchange-point">Tukar 75 point</a>
              </button>
            </div>
          </div>
          <div className="voucher-body">
            <div className="voucher">
              <h2>VOUCHER DISKON 50%</h2>
              <p style={{ borderBottom: "1px solid black" }}>
                Valid until <b>23 June 2024</b>
              </p>
              <p>
                Diskon 50% s/d Rp 25.000 dengan minimal belanja Rp 50.000 di
                Shopee
              </p>
              <button className="voucher-code">
                <a href="exchange-point">Tukar 250 point</a>
              </button>
            </div>
            <div className="voucher">
              <h2>VOUCHER CASHBACK 25%</h2>
              <p style={{ borderBottom: "1px solid black" }}>
                Valid until <b>23 June 2024</b>
              </p>
              <p>
                Cashback 25% s/d Rp 50.000 dengan minimal belanja Rp 100.000 di
                McD
              </p>
              <button className="voucher-code">
                <a href="exchange-point">Tukar 100 point</a>
              </button>
            </div>
          </div>
        </div>
        <div className="button-bingung">
          <a href="process">Bingung gimana cara menukarkan pointnya?</a>
        </div>
        <div style={{paddingBottom: 10}}>&nbsp;</div>
      </section>

      <Footer />
    </>
  );
}
export default Point;
