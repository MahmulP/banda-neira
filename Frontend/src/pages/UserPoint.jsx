import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const UserPoint = () => {
  const [points, setPoints] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [pointUser, setPointUser] = useState("");
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetchPoints();
    fetchUsers();
  }, []);

  const fetchPoints = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user-points");
      setPoints(response.data);
    } catch (error) {
      console.error("Error fetching points:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePoint = async () => {
    try {
      await axios.post("http://localhost:8000/give-point", {
        userId: userId,
        points: pointUser,
      });

      console.log("Update successful!");

      Swal.fire(
        "Success!",
        "Point has been succesfully given to the user",
        "success"
      );

      handleCloseModal();
      fetchPoints();
      setPointUser("");
      setUserId("");
    } catch (error) {
      console.error("Error updating voucher redemption:", error);
      Swal.fire("Error!", "Failed to update voucher", "error");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="col overflow-auto">
        <Topbar />
        <div className="main">
          <main className="content">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="d-flex">
                  <h5 className="card-title mb-2">Points</h5>
                  <button className="btn btn-primary col-auto ms-auto text-end mt-n1" onClick={() => handleShowModal()}>
                    <i className="align-start bi bi-plus">&nbsp; </i>
                    Add User Point
                  </button>
                </div>
                <h6 className="card-subtitle text-muted">
                  The data of receiving points from users
                </h6>
              </div>
              <table
                id="datatables-dashboard-projects"
                className="table table-striped my-0">
                <thead>
                  <tr>
                    <th className="d-none d-xl-table-cell">ID</th>
                    <th className="d-none d-xl-table-cell">Name</th>
                    <th className="d-none d-xl-table-cell">Point</th>
                    <th className="d-none d-xl-table-cell">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {points.map((point) => (
                    <tr key={point.id}>
                      <td>{point.id}</td>
                      <td className="d-none d-xl-table-cell">
                        {point.user.username}
                      </td>
                      <td className="d-none d-xl-table-cell">
                        {point.total_point}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {point.createdAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>

      {/* Modal for updating voucher redemption */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Give Points for Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="userSelect">
              <Form.Label>Select User</Form.Label>
              <Form.Control
                as="select"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}>
                <option value="" disabled>
                  Select user
                </option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.username}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="redeemForm">
              <Form.Label>Points</Form.Label>
              <Form.Control
                type="number"
                placeholder="Total Point"
                value={pointUser}
                onChange={(e) => setPointUser(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePoint}>
            Give Point
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserPoint;
