import Header from "../components/Header";
import Footer from "../components/Footer";

function Point(){
    if (window.location.pathname === "/point") {
        import("../assets/css/point.css");
      }
    return(
        <>
        <Header/>
            <section className="services-one">
                <div className="container">
                    <h1 className="title">
                        <b>Kumpulkan Sampahmu untuk Mendapatkan Voucher!</b>
                    </h1>
                </div>
            </section>
            <section
            className="header-about"
            style={{
                marginTop: "-80px"
            }}>
                <div className="get-point">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/coins/75efaf1b556a8e2fac6ab9383e95d4e3.png" alt="" />
                <p> Total Point Anda:</p>
                <div className="collect-point">
                    <a href="#">Kumpulkan point</a>
                </div>
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
            {" "}
            <a href="proses_penukaran.html">Tukar 150 point</a>
          </button>
        </div>
        <div className="voucher">
          <h2>VOUCHER DISKON 15%</h2>
          <p style={{ borderBottom: "1px solid black" }}>
            Valid until <b>23 June 2024</b>
          </p>
          <p>
            Diskon Top Up 15% s/d Rp 10.000 dengan minimal belanja Rp 120.000 di
            Alfamart
          </p>
          <button className="voucher-code">
            {" "}
            <a href="proses_penukaran.html">Tukar 75 point</a>
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
            Diskon 50% s/d Rp 25.000 dengan minimal belanja Rp 50.000 di Shopee
          </p>
          <button className="voucher-code">
            {" "}
            <a href="proses_penukaran.html">Tukar 250 point</a>
          </button>
        </div>
        <div className="voucher">
          <h2>VOUCHER CASHBACK 25%</h2>
          <p style={{ borderBottom: "1px solid black" }}>
            Valid until <b>23 June 2024</b>
          </p>
          <p>
            Cashback 25% s/d Rp 50.000 dengan minimal belanja Rp 100.000 di McD
          </p>
          <button className="voucher-code">
            {" "}
            <a href="proses_penukaran.html">Tukar 100 point</a>
          </button>
        </div>
      </div>
    </div>
    <div className="button-bingung">
      <a href="/process">Bingung gimana cara menukarkan pointnya?</a>
    </div>
    </section>
  <Footer/>
</>

    )
}
export default Point;