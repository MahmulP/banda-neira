import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ExchangePoint() {
  if (window.location.pathname === "/exchange-status") {
    import("../assets/css/exchangepoint.css");
  }

  const [exchanges, setExchanges] = useState([]);
  const [points, setPoints] = useState(null);

  useEffect(() => {
    userPoints();
    fetchExchanges();
  }, []);

  const userPoints = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user-point");
      setPoints(response.data.userPoint);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExchanges = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/user-exchange"
      );
      setExchanges(response.data);
    } catch (error) {
      console.error("Error fetching vouchers:", error);
    }
  };

  return (
    <>
      <Header />

      <section
        className="services-one"
        style={{
          background:
            "linear-gradient(357deg, rgba(255,255,255,1) 0%, rgba(220,255,219,1) 100%)",
          marginTop: "100px",
        }}>
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
                <div className="poin">{points ?? '0'}</div>
              </div>
            </div>
          </div>
          <p style={{ color: "black", fontSize: "18px" }}>
            Total Poin Anda : {points ?? '0'} Poin
          </p>
        </div>
        <div className="container mt-6 mb-6">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <table className="table table-bordered">
                <thead>
                  <tr className="text-center">
                    <th>Jenis Voucher</th>
                    <th>Status Redeem</th>
                    <th>Kode Redeem</th>
                  </tr>
                </thead>
                <tbody>
                  {exchanges.length > 0 ? (
                    exchanges.map((exchange) => (
                      <tr key={exchange.id}>
                        <td className="d-none d-xl-table-cell">
                          {exchange.voucher.jenis_voucher}
                        </td>
                        {exchange.status === "1" ? (
                          <td className="d-none d-md-table-cell">Done</td>
                        ) : (
                          <td className="d-none d-md-table-cell">
                            Being Process
                          </td>
                        )}
                        <td className="d-none d-xl-table-cell">
                          {exchange.redeem_voucher ?? "Being Process"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="text-center">
                      <td colSpan={3}>Tidak ada data penukaran</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default ExchangePoint;
