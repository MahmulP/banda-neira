import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Point() {
  if (window.location.pathname === "/point") {
    import("../assets/css/point.css");
  }

  const [vouchers, setVouchers] = useState([]);
  const [points, setPoints] = useState(null);

  useEffect(() => {
    fetchVouchers();
    userPoints();
  }, []);

  const userPoints = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user-point");
      setPoints(response.data.userPoint);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVouchers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/vouchers");
      setVouchers(response.data);
    } catch (error) {
      console.error("Error fetching vouchers:", error);
    }
  };

  const exchangePoint = async (voucherId, voucherPoint) => {
    try {
      if (points >= voucherPoint) {
        Swal.fire({
          title: "Anda yakin ingin melakukan penukaran?",
          text: "Penukaran tidak dapat dibatalkan!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Tukar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const response = await axios.post(
                "http://localhost:8000/exchange-voucher",
                {
                  voucherId: voucherId,
                }
              );

              userPoints();

              Swal.fire({
                title: "Berhasil!",
                text: "Point Anda berhasil ditukarkan.",
                icon: "success",
              });
            } catch (error) {
              console.error("Error during point exchange:", error);
              Swal.fire({
                icon: "error",
                title: "Gagal melakukan penukaran",
                text: "Terjadi kesalahan saat melakukan penukaran.",
              });
            }
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Point Anda tidak cukup",
          text: "Anda tidak memiliki cukup point untuk melakukan penukaran.",
        });
      }
    } catch (error) {
      console.error("Error during point exchange:", error);
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
          <div>
            <div className="skill">
              <div className="box">
                <div className="skill-bar">
                  <div className="poin">{points ? points : 0}</div>
                </div>
              </div>
            </div>
            <p style={{ color: "black", fontSize: "18px" }}>
              Total Poin Anda: {points ? points : 0} Poin
            </p>
          </div>
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
                <button
                  className="voucher-code"
                  onClick={() =>
                    exchangePoint(voucher.id, voucher.point_voucher)
                  }>
                  Tukar {voucher.point_voucher} point
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
