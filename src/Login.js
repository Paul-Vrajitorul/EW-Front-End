import React, { useState } from "react";
import styles from './style/login.module.css';
import "./style/Login.css";

function Login({ onSwitchToRegister ,onSwitchToForgotPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", email, password);
  };

  return (
    <div className={styles['login-container']}>
      <form className="login-form " onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-login">
        </button>
          <button type="button" className="btn-register" onClick={onSwitchToRegister}>
          </button>
          <button type="button" className="btn-forgotpass" onClick={onSwitchToForgotPassword}>
          </button>
      </form>
    </div>
  );
}

export default Login;
