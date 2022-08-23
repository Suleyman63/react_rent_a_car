import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div class="register-box">
      <form>
        <h1>Register</h1>
        <input type="text" name="" placeholder="Firstname" />
        <input type="text" name="" placeholder="Lastname" />
        <input type="email" name="" placeholder="Email" />
        <input type="text" name="" placeholder="Username" />
        <input type="password" name="" placeholder="Password" />
        <input type="password" name="" placeholder="password verification" />
        <input type="submit" value="Register" />
        <a href="signin" className="btn btn-register">
          Login
        </a>
      </form>
    </div>
  );
};

export default Register;
