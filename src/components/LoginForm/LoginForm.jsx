import './LogInForm.css';
import React, { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { useHistory } from 'react-router-dom';

export default function LogIn({ setUser }) {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  // const [passwordShown, setPasswordShown] = useState(false);

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
      history.push('/');
    } catch (err) {
      setError('Log In Failed - Please Try Again');
    }
  }

  return (
    <div>
      <div className="logInTitle">Log In</div>
      <div className="logInTag">Welcome back, friend!</div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form >
          <input type="text" name="email" value={credentials.email} autoComplete="on" onChange={handleChange} placeholder="Email" required autoFocus />
          <input type="password" name="password" value={credentials.password} autoComplete="off" onChange={handleChange} placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
      </div>
      <p className="error-message" style={{ display: !error ? "none" : "inline"}}>&nbsp;{error}</p>
    </div>
  );
}