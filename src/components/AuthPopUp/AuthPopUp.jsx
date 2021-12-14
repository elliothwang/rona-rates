import './AuthPopUp.css';
import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';

export default function AuthPage({
  user,
  setUser,
  showLogIn,
  setShowLogIn,
  closeAuthPopUp,
}) {
  function handlePasswordReset() {
    alert('not quite working yet!');
  }

  return (
    <main>
      <div className="form">
        {showLogIn ? (
          <LoginForm
            user={user}
            setUser={setUser}
            closeAuthPopUp={closeAuthPopUp}
          />
        ) : (
          <SignUpForm
            user={user}
            setUser={setUser}
            closeAuthPopUp={closeAuthPopUp}
          />
        )}
      </div>
      {showLogIn ? (
        <div className="bottomLinks">
          <div className="resetPassword">
            Forgot Password? &nbsp;
            <span className="link" onClick={handlePasswordReset}>
              Reset
            </span>
          </div>
          <div className="signUp">
            New here? &nbsp;
            <span className="link" onClick={() => setShowLogIn(!showLogIn)}>
              Sign Up
            </span>
          </div>
        </div>
      ) : (
        <div className="bottomLinks">
          Already have an account? &nbsp;
          <span className="link" onClick={() => setShowLogIn(!showLogIn)}>
            Log In
          </span>
        </div>
      )}
    </main>
  );
}
