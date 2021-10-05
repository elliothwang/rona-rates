import './AuthPage.css';
import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';

export default function AuthPage({ setUser, showLogIn, setShowLogIn }) {
  function handlePasswordReset() {
    alert('not quite working yet!')
  }

  return (
    <main>
      <div className="form">
        {showLogIn ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
      { showLogIn ? 
        <div className="bottomLinks">
          <div className="resetPassword">
          Forgot Password? &nbsp;
          <span className="link" onClick={handlePasswordReset}>Reset</span>
          </div>
          <div className="signUp">
            New here? &nbsp;
            <span className="link" onClick={() => setShowLogIn(!showLogIn)}>Sign Up</span>
          </div>
        </div>
        :
        <div className="bottomLinks">
          Already have an account? &nbsp;
          <span className="link" onClick={() => setShowLogIn(!showLogIn)}>Log In</span>
        </div>
      }
    </main>
  );
}