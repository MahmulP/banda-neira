import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Voucher() {
  return (
    <div className="d-flex">
      <div className="w-auto position-fixed  ">
        <Sidebar />
      </div>
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col overflow-auto">
        <Topbar />
        <div className="main">
          <main className="content">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="card-actions float-end">
                  <div className="dropdown position-relative">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                    >
                      <i className="align-middle bi bi-three-dots-veritcal" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="card-title mb-2">Voucher</h5>
                <h6 className="card-subtitle text-muted">
                  The data of voucher exchange by users
                </h6>
              </div>
              <table
                id="datatables-dashboard-projects"
                className="table table-striped my-0"
              >
                <thead>
                  <tr>
                    <th style={{ width: "0.1rem" }}>ID</th>
                    <th>ID Voucher</th>
                    <th className="d-none d-xl-table-cell">Name</th>
                    <th className="d-none d-xl-table-cell">Redeem</th>
                    <th className="d-none d-xl-table-cell">Created at</th>
                    <th>Updated at</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>VCKEBUT</td>
                    <td className="d-none d-xl-table-cell">Nisa</td>
                    <td className="d-none d-xl-table-cell">
                      Voucher Diskon 20%
                    </td>
                    <td>13/12/2023</td>
                    <td className="d-none d-md-table-cell">14/12/2023</td>
                    <td className="d-none d-md-table-cell">
                      <button
                        className="btn btn-success shadow-xl"
                        style={{ width: "80%" }}
                      >
                        <i className="align-middle bi bi-pencil">&nbsp; </i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Voucher;
