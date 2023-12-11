import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Point() {
  if (window.location.pathname === "/point") {
    import("../assets/css/point.css");
  }

  const [vouchers, setVouchers] = useState([]);
  const [point, setPoint] = useState('');

  useEffect(() => {
    fetchVouchers();
  }, []);

  const fetchVouchers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/vouchers");

      setVouchers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching vouchers:", error);
    }
  };

  return (
    <>
      <Header />

      <section className="services-one" style={{ marginTop: "100px" }}>
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
          {vouchers.map((voucher) => (
            <div className="voucher-body">
              <div className="voucher">
                <h2>{voucher.jenis_voucher}</h2>
                <p style={{ borderBottom: "1px solid black" }}>
                  {voucher.valid_voucher}
                </p>
                <p>{voucher.deskripsi_voucher}</p>
                <button className="voucher-code">
                  <a href="exchange-point">Tukar {voucher.point_voucher} point</a>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="button-bingung">
          <a href="process">Bingung gimana cara menukarkan pointnya?</a>
        </div>
        <div style={{ paddingBottom: 10 }}>&nbsp;</div>
      </section>

      <Footer />
    </>
  );
}
export default Point;
