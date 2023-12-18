import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function User() {
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
        <main className="content">
          <div className="card flex-fill">
            <div className="card-header">
              <div className="card-actions float-end">
                <div className="dropdown position-relative"></div>
              </div>
              <div className="d-flex">
                <h5 className="card-title mb-2">Manage Role</h5>
                <button className="btn btn-primary col-auto ms-auto text-end mt-n1">
                  <i className="align-start bi bi-plus">&nbsp; </i>
                  Add User
                </button>
              </div>
              <h6 className="card-subtitle text-muted">
                Managing the role members
              </h6>
            </div>
            <table
              id="datatables-dashboard-projects"
              className="table table-striped my-0"
            >
              <thead>
                <tr>
                  <th style={{ width: "0.1rem" }}>ID</th>
                  <th>Name</th>
                  <th className="d-none d-xl-table-cell">Email</th>
                  <th className="d-none d-xl-table-cell">Phone</th>
                  <th className="d-none d-xl-table-cell">Status</th>
                  <th>Access Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Nisaaaaa</td>
                  <td className="d-none d-xl-table-cell">Nisa@gmail.com</td>
                  <td className="d-none d-xl-table-cell">089656</td>
                  <td>Active</td>
                  <td className="d-none d-md-table-cell">
                    <button
                      className="btn btn-danger shadow-xl"
                      style={{ width: "80%" }}
                    >
                      <i className="align-middle bi bi-shield-lock">&nbsp; </i>
                      User
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nisa</td>
                  <td className="d-none d-xl-table-cell">Nisa@gmail.com</td>
                  <td className="d-none d-xl-table-cell">089754</td>
                  <td>Active</td>
                  <td className="d-none d-xl-table-cell">
                    <button
                      className="btn btn-success shadow-xl"
                      style={{ width: "80%" }}
                    >
                      <i className="align-middle bi bi-display">&nbsp; </i>
                      Admin
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
export default User;
