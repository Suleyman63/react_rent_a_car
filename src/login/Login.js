import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <form className="box">
      <h1>Login</h1>
      <input type="text" name="" placeholder="Username" />
      <input type="password" name="" placeholder="Password" />
      <input type="submit" value="Login" />
      <a href="register" className="btn btn-register">
        Register
      </a>
    </form>
  );
};

export default Login;
