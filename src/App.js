import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import './style/App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleSwitchToRegister = () => {
    setIsLogin(false);
    setIsForgotPassword(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
    setIsForgotPassword(false);
  };

  const handleSwitchToForgotPassword = () => {
    setIsForgotPassword(true);
    setIsLogin(false);
  };

  return (
    <div className="App">
      {isLogin && !isForgotPassword && (
        <Login onSwitchToRegister={handleSwitchToRegister} onSwitchToForgotPassword={handleSwitchToForgotPassword} />
      )}
      {!isLogin && !isForgotPassword && (
        <Register onSwitchToLogin={handleSwitchToLogin} />
      )}
      {!isLogin && isForgotPassword && (
        <ForgotPassword onSwitchToLogin={handleSwitchToLogin} />
      )}
    </div>
  );
}

export default App;