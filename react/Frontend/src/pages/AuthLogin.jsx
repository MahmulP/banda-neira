import { useState } from "react";
import Header from "../components/Header";
import backgroundLogin from "../assets/images/backgrounds/background-login.jpg";

function AuthLogin() {
  if (window.location.pathname == "/login") {
    import("../assets/css/login.css");
  }

  return (
    <>
      <Header></Header>
      <div className="login-container" style={{ marginTop: "230px" }}>
        <h1>OLSAM</h1>
        <h2>Protect our Environment</h2>
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
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
