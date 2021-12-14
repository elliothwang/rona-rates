import './LoginForm.css';
import React, { useState, useEffect, useRef } from 'react';
import * as usersService from '../../utilities/users-service';
import GoogleIn from '../GoogleIn/GoogleIn';

export default function LogInForm({ setUser, closeAuthPopUp }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  // const [passwordShown, setPasswordShown] = useState(false);
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
      closeAuthPopUp();
      setCredentials({
        email: '',
        password: '',
      });
    } catch (err) {
      setError('Log In Failed - Please Try Again');
    }
  }

  return (
    <div>
      <div className="logInTitle">Welcome back!</div>
      <div className="logInTag">Log in here, friend.</div>
      <div className="form-container">
        <form className="logInForm" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={credentials.email}
            placeholder="Email"
            autoComplete="email"
            onChange={handleChange}
            ref={inputElement}
            required
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            autoComplete="off"
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
      <GoogleIn
        auth={'Log in'}
        setUser={setUser}
        closeAuthPopUp={closeAuthPopUp}
      />
      <p
        className="error-message"
        style={{ display: !error ? 'none' : 'inline' }}
      >
        &nbsp;{error}
      </p>
    </div>
  );
}
