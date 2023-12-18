import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Messages() {
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
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12 col-xl-6 w-100">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Contact to us</h5>
                  </div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th style={{ width: "20%" }}>Name</th>
                        <th style={{ width: "20%" }}>Email</th>
                        <th style={{ width: "15%" }}>No. Hp</th>
                        <th style={{ width: "20%" }}>Subject</th>
                        <th style={{ width: "25%" }}>Messages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Nisa Syifa</td>
                        <td>nisa@gmail.com</td>
                        <td>864-348-0485</td>
                        <td className="d-none d-md-table-cell">Dear OLSAM</td>
                        <td className="table-action">
                          Saya ingin berkunjung ke kantor
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Messages;
