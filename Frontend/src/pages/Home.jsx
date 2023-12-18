import React from "react";
// import PieChart from "./PieChart";
import BarChart from "./BarChart";
import "../assets/css/light.css";
// import "./style.css";

function Home() {
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <div className="row mb-2 mb-xl-3">
          <div className="col-auto d-none d-sm-block">
            <h3>Dashboard</h3>
          </div>
          <div className="col-auto ms-auto text-end mt-n1">
            <div className="dropdown me-2 d-inline-block position-relative">
              <a
                className="btn btn-light bg-white shadow-sm dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <i className="align-middle mt-n1 bi bi-calendar " />
                Today
              </a>
              <div className="dropdown-menu dropdown-menu-end ">
                <h6 className="dropdown-header">Settings</h6>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            <button className="btn btn-primary shadow-sm">
              <i className="align-middle bi bi-funnel">&nbsp;</i>
            </button>{" "}
            {""}
            <button className="btn btn-primary shadow-sm">
              <i className="align-middle bi bi-arrow-clockwise">&nbsp;</i>
            </button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-sm-6 col-xxl-3 d-flex">
            <div className="card illustration flex-fill">
              <div className="card-body p-0 d-flex ">
                <div className="row g-0 w-100">
                  <div className="col-6">
                    <div className="illustration-text p-3 ">
                      <h4 className="illustration-text">
                        Welcome Back, username
                      </h4>
                      <p className="mb-0">Dashboard OLSAM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xxl-3 d-flex">
            <div className="card flex-fill">
              <div className="card-body py-4">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <h3 className="mb-2">24.300</h3>
                    <p className="mb-2">Total Users</p>
                    <div className="mb-0">
                      <span className="badge bg-success me-2">+5.35%</span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                  <div className="d-inline-block ms-3">
                    <i className="align-center text-success bi bi-people-fill fs-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xxl-3 d-flex">
            <div className="card flex-fill">
              <div className="card-body py-4">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <h3 className="mb-2">43</h3>
                    <p className="mb-2">Point Exchange</p>
                    <div className="mb-0">
                      <span className="badge bg-success me-2">+4.25%</span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                  <div className="d-inline-block ms-3">
                    <i className="align-middle text-danger bi bi-star-fill fs-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xxl-3 d-flex">
            <div className="card flex-fill">
              <div className="card-body py-4">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <h3 className="mb-2">$ 18.700</h3>
                    <p className="mb-2">Total Revenue</p>
                    <div className="mb-0">
                      <span className="badge bg-success me-2">+8.65%</span>
                      <span className="text-muted">Since last week</span>
                    </div>
                  </div>
                  <div className="d-inline-block ms-3">
                    <i className="align-middle text-info bi bi-currency-dollar fs-5" />
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
