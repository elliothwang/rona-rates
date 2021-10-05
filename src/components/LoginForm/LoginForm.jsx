import './LoginForm.css';
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
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="logInTitle">Log In</div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}