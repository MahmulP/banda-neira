import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login() {
  if (window.location.pathname === "/login") {
    import("../assets/css/login.css");
  }

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      navigate("/");
      toastr.success("Login berhasil");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        toastr.error("Login gagal: " + error.response.data.msg);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="login-container" style={{ marginTop: "230px" }}>
        <h1>OLSAM</h1>
        <h2>Protect our Environment</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="register">Sign up</a>
        </p>
      </div>
    </>
  );
}

export default Login;
