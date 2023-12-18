import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const changeRole = async (userId) => {
    try {
      Swal.fire({
        title: "Anda yakin mengubah role user ini?",
        text: "Pengubahan role akan memberikan dampak terhadap akun user!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ubah",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axios.post(
              "http://localhost:8000/change-role",
              {
                userId: userId,
              }
            );

            fetchUsers();

            Swal.fire({
              title: "Berhasil!",
              text: "Role berhasil diubah.",
              icon: "success",
            });
          } catch (error) {
            console.error("Error during point exchange:", error);
            Swal.fire({
              icon: "error",
              title: "Gagal melakukan perubahan role",
              text: "Terjadi kesalahan saat melakukan perubahan.",
            });
          }
        }
      });
    } catch (error) {
      console.error("Error during change the role:", error);
    }
  };

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
              </div>
              <h6 className="card-subtitle text-muted">
                Managing the role members
              </h6>
            </div>
            <table
              id="datatables-dashboard-projects"
              className="table table-striped my-0">
              <thead>
                <tr>
                  <th style={{ width: "0.1rem" }}>ID</th>
                  <th>Name</th>
                  <th className="d-none d-xl-table-cell">Email</th>
                  <th className="d-none d-xl-table-cell">Phone</th>
                  <th>Access Level</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td className="d-none d-xl-table-cell">{user.email}</td>
                    <td className="d-none d-xl-table-cell">{user.phone}</td>
                    <td className="d-none d-md-table-cell">
                      {user.role == "admin" ? (
                        <button
                          className="btn btn-success shadow-xl"
                          style={{ width: "80%" }}>
                          <i className="align-middle bi bi-display">&nbsp; </i>
                          Admin
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger shadow-xl"
                          style={{ width: "80%" }}>
                          <i className="align-middle bi bi-shield-lock">
                            &nbsp;{" "}
                          </i>
                          User
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger shadow-xl"
                        style={{ width: "80%" }}
                        onClick={() => changeRole(user.id)}>
                        <i className="align-middle bi bi-shield-lock">
                          &nbsp;{" "}
                        </i>
                        Change Role
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
export default User;
