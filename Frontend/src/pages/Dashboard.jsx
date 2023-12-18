import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Home from "./Home";
import User from "./Messages";
// import Orders from "./Orders";
// import Settings from "./Settings";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

function Dashboard() {
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
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
