import React, { useState } from 'react';
import styles from './style/forgotp.module.css';
import "./style/forgotp.css";

function ForgotPassword(props) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement password reset functionality
  };

  return (
    <div className={styles['forgotp-container']}>
      <h2 className='.forgotp-h2 '>Forgot Password</h2>
      <form className='.forgotp-form' onSubmit={handleSubmit}>
        <label className='.forgotp-label'>
          Email:
          <input type="email" className='.forgotp-input' value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit" className='.forgotp-button'>Reset Password</button>
      </form>
      <button onClick={props.onSwitchToLogin} className='.forgotp-lbutton'>Back to Login</button>
    </div>
  );
}

export default ForgotPassword;
