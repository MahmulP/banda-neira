import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Register() {
  if (window.location.pathname === "/register") {
    import("../assets/css/login.css");
  }

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/register', {
        username: username,
        email: email,
        password: password,
        phone: phone
      });
      navigate('/login');
    } catch (error) {
      if(error.response){
        console.log(error.response.data);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="login-container" style={{ marginTop: "180px" }}>
        <h1>OLSAM</h1>
        <h2>Protect our Environment</h2>
        {alertMessage && <p className="alert">{alertMessage}</p>}
        <form className="login-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="No. HP"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Daftar</button>
        </form>
        <p>
          Already registered? <a href="login">Sign in</a>
        </p>
      </div>
    </>
  );
}

export default Register;
