import './NavBar.css';
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
      {/* <div className="Title">COVID-19 Dashboard</div> */}
      <div className="Exit">X</div>
      <Link to="/" className="Home">Home</Link>
      <Link to="/stats"className="Stats">Stats</Link>
      <span className="Welcome">Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut} className="LogOut">Log Out</Link>
    </nav>
  );
}