import React, { useState } from "react";
import "../assets/css/light.css";
import "../assets/css/dashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState(1);

  return (
    <div className="sidebar d-flex justify-content-between flex-column py-3 ps-3 pe-4 vh-100">
      <div>
        <div className="text-center">
          <a
            href="/dashboard"
            className="admin p-3 text-white"
            style={{ textDecoration: "none" }}
          >
            <div className="mb-2 mt-0">
              <img src="/TRASH-2.png" alt="Logo" style={{ width: "50%" }} />
            </div>
            <h5>Dashboard OLSAM</h5>
          </a>
        </div>
        {/* <hr className="text-white mt-4" /> */}
        <ul className="nav nav-pills flex-column mt-1">
          <li
            className={
              active === 1 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(1)}
          >
            <a
              href="/dashboard"
              className="p-1 text-white"
              style={{ textDecoration: "none" }}
            >
              <i className="bi bi-house me-3 fs-8"></i>
              <span className="fs-8">Dashboard</span>
            </a>
          </li>
          <li
            className={
              active === 2 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(2)}
          >
            <Link to="/role-user" className="p-1 text-white">
              <i className="bi bi-people me-3 fs-8"></i>
              <span className="fs-8">Manage Role</span>
            </Link>
          </li>
          <li
            className={
              active === 3 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(3)}
          >
            <Link to="/voucher" className="p-1 text-white">
              <i className="bi bi-ticket-perforated me-3 fs-8"></i>
              <span className="fs-8">Voucher</span>
            </Link>
          </li>
          <li
            className={
              active === 4 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(4)}
          >
            <Link to="/messages" className="p-1 text-white">
              <i className="bi bi-chat-left me-3 fs-8"></i>
              <span className="fs-8">Messages</span>
            </Link>
          </li>
          <li
            className={
              active === 5 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(5)}
          >
            <Link to="/settings" className="p-1 text-white">
              <i className="bi bi-gear me-3 fs-8"></i>
              <span className="fs-8">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
