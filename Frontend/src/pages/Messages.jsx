import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Messages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/contacts");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
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
                      {messages.map((message) => (
                        <tr>
                          <td>{message.id}</td>
                          <td>{message.name}</td>
                          <td>{message.email}</td>
                          <td>{message.phone}</td>
                          <td className="d-none d-md-table-cell">{message.subject}</td>
                          <td className="table-action">
                            {message.message}
                          </td>
                        </tr>
                      ))}
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
