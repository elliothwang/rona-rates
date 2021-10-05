import './AuthPage.css';
import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  function handlePasswordReset() {
    alert('not quite working yet!')
  }

  return (
    <main>
      <div className="form">
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
      { showLogin ? 
        <div className="bottomLinks">
          <div className="resetPassword">
          Forgot Password? &nbsp;
          <span className="link" onClick={handlePasswordReset}>Reset</span>
          </div>
          <div className="signUp">
            New here? &nbsp;
            <span className="link" onClick={() => setShowLogin(!showLogin)}>Sign Up</span>
          </div>
        </div>
        :
        <div className="bottomLinks">
          Already have an account? &nbsp;
          <span className="link" onClick={() => setShowLogin(!showLogin)}>Log In</span>
        </div>
      }
    </main>
  );
}