import React, { useState, useEffect } from "react";
import axios from "axios";
import toastr from "toastr";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
// import PieChart from "./PieChart";
import BarChart from "./BarChart";
import "../assets/css/light.css";
// import "./style.css";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [token, setToken] = useState("");
  const [totalUsers, setTotalUsers] = useState('0');
  const [totalVouchers, setTotalVouchers] = useState('0');

  useEffect(() => {
    refreshToken();
    usersTotal();
    vouchersTotal();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:8000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUsername(decoded.username);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate('/login');

        toastr.error('Anda harus login terlebih dahulu untuk mengakses dashboard tersebut');
      } else {
        console.log(error);
      }
    }
  };

  const usersTotal = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      const totalUsers = response.data.length;
      setTotalUsers(totalUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const vouchersTotal = async () => {
    try {
      const response = await axios.get("http://localhost:8000/voucher-exchange");
      const totalVouchers = response.data.length;
      setTotalVouchers(totalVouchers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <div className="row mb-2 mb-xl-3">
          <div className="col-auto d-none d-sm-block">
            <h3>Dashboard</h3>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-sm-6 col-xxl-4 d-flex">
            <div className="card illustration flex-fill">
              <div className="card-body p-0 d-flex ">
                <div className="row g-0 w-100">
                  <div className="col-7">
                    <div className="illustration-text p-3 ">
                      <h4 className="illustration-text">
                        Welcome Back, {username}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xxl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body py-4">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <h3 className="mb-2">{totalUsers}</h3>
                    <p className="mb-2">Total Users</p>
                  </div>
                  <div className="d-inline-block ms-3">
                    <i className="align-center text-success bi bi-people-fill fs-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xxl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body py-4">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <h3>{totalVouchers}</h3>
                    <p>Total Voucher Exchange</p>
                  </div>
                  <div className="d-inline-block ms-3">
                    <i className="align-middle text-danger bi bi-star-fill fs-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className=" d-flex ">
            <div className="card flex-fill height-50">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
