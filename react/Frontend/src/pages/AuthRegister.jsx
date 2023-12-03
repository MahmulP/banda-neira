import Header from "../components/Header";

function AuthRegister() {
  if (window.location.pathname === "/register") {
    import("../assets/css/login.css");
  }
  return (
    <>
      <Header></Header>
      <div className="login-container" style={{ marginTop: "180px" }}>
        <h1>OLSAM</h1>
        <h2>Protect our Environment</h2>
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="No. HP" />
          <input type="password" placeholder="Password" />
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
