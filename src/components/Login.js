import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <Link href="">Forgot Password</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
