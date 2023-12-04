import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function AuthRegister() {
  if (window.location.pathname === "/register") {
    import("../assets/css/login.css");
  }

  const navigate = useNavigate(); // Initialize useNavigate hook

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); // New state for alert messages

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        password,
      }),
    });

    const data = await response.json();

    // Handle the response from the server
    if (response.ok) {
      console.log("Registration successful");
      alert("User registered successfully!");
      // Navigate to the home page after successful registration
      navigate("/login");
    } else {
      console.error("Registration failed", data.alert);
      alert(data.alert);
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

export default AuthRegister;
