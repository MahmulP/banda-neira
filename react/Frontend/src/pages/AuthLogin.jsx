import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Swal from 'sweetalert2'
import backgroundLogin from "../assets/images/backgrounds/background-login.jpg";

function AuthLogin() {
  if (window.location.pathname === "/login") {
    import("../assets/css/login.css");
  }

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your login endpoint
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        console.error("Login failed", data.message);
        // Show an alert for failed login
        alert("Login failed. Please check your credentials.");
        return;
      }

      const data = await response.json();
      console.log("Login successful");

      // Perform authentication (store token, set user as authenticated, etc.)
      // For simplicity, let's assume the server returns a token upon successful login
      const token = data.token;
      localStorage.setItem("token", token);

      // Show an alert for successful login
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500
      });
      
      // alert("Login successful!");

      // Redirect the user to the home page
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error during login. Please try again!",
      });
      // console.error("Error during login", error.message);
      // alert("Error during login. Please try again.");
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
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

export default AuthLogin;
