import { Link } from 'react-router-dom';
import React  from 'react';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className="Title">COVID-19 Dashboard</div>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/stats">Stats</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}