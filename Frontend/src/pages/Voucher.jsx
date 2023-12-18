import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Voucher = () => {
  const [exchanges, setExchanges] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [voucherRedeem, setVoucherRedeem] = useState('');
  const [selectedVoucherId, setSelectedVoucherId] = useState(null);

  useEffect(() => {
    fetchExchanges();
  }, []);

  const fetchExchanges = async () => {
    try {
      const response = await axios.get("http://localhost:8000/voucher-exchange");
      setExchanges(response.data);
    } catch (error) {
      console.error("Error fetching vouchers:", error);
    }
  };

  const handleShowModal = (voucherId) => {
    setShowModal(true);
    setSelectedVoucherId(voucherId);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVoucherId(null);
  };

  const handleUpdateRedemption = async () => {
    try {
      console.log("Updating redemption:", selectedVoucherId, voucherRedeem);
  
      await axios.post('http://localhost:8000/voucher-redeem', {
        voucherId: selectedVoucherId,
        redeem: voucherRedeem,
      });
  
      console.log("Update successful!");
  
      // Additional actions on success, e.g., update state or show a notification
      Swal.fire("Success!", "Voucher has been updated", "success");
  
      handleCloseModal();
      fetchExchanges(); // Refresh the data after the update
    } catch (error) {
      console.error('Error updating voucher redemption:', error);
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
                <h5 className="card-title mb-2">Voucher</h5>
                <h6 className="card-subtitle text-muted">
                  The data of voucher exchange by users
                </h6>
              </div>
              <table id="datatables-dashboard-projects" className="table table-striped my-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th className="d-none d-xl-table-cell">Name</th>
                    <th className="d-none d-xl-table-cell">Voucher</th>
                    <th className="d-none d-xl-table-cell">Redeem Code</th>
                    <th className="d-none d-xl-table-cell">Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {exchanges.map((exchange) => (
                    <tr key={exchange.id}>
                      <td>{exchange.id}</td>
                      <td className="d-none d-xl-table-cell">
                        {exchange.user.username}
                      </td>
                      <td className="d-none d-xl-table-cell">
                        {exchange.voucher.jenis_voucher}
                      </td>
                      <td className="d-none d-xl-table-cell">
                        {exchange.redeem_voucher ?? 'No redeem code'}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {exchange.createdAt}
                      </td>
                      {exchange.status == "1" ? (
                        <td
                          className="d-none d-md-table-cell"
                          style={{ color: "green" }}
                        >
                          Processed
                        </td>
                      ) : (
                        <td
                          className="d-none d-md-table-cell"
                          style={{ color: "red" }}
                        >
                          Not Processed
                        </td>
                      )}
                      <td>
                        {exchange.status == "1" ? (
                          <button
                            className="btn btn-success shadow-xl"
                            style={{ width: "50%" }}
                            disabled
                          >
                            <i className="align-middle bi bi-pencil"></i>
                          </button>
                        ) : (
                          <button
                            className="btn btn-success shadow-xl"
                            style={{ width: "50%" }}
                            onClick={() => handleShowModal(exchange.id)}
                          >
                            <i className="align-middle bi bi-pencil"></i>
                          </button>
                        )}
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
          <Modal.Title>Update Voucher Redemption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="redeemForm">
              <Form.Label>Redeem Voucher</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter redemption details"
                value={voucherRedeem}
                onChange={(e) => setVoucherRedeem(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateRedemption}>
            Update Redemption
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Voucher;
