import React, { useState } from 'react';
import styles from './style/register.module.css';
import "./style/Register.css";

const Register = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register:', email, password, confirmPassword);
  };

  return (
    <div className={styles['register-container']}>
      <form onSubmit={handleRegister}>
        <div className="register-form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-btn-register">Register</button>
      </form>
        <button type="button" className="register-btn-login" onClick={onSwitchToLogin}>
          Login
        </button>
    </div>
  );
};

export default Register;
