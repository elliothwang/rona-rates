import './NavBar.css';
import { Link } from 'react-router-dom';
import React  from 'react';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  function openSideNav () {
    document.querySelector(".sideNav").style.width = "25%";
    // document.querySelector(".openSideNavButton").style.color = "green";
  }

  function closeSideNav () {
    document.querySelector(".sideNav").style.width = "0";
    // document.querySelector(".openSideNavButton").style.color = "red";
  }

  return (
    <nav>
      <div className="openSideNavButton" onClick={ openSideNav }>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
        </svg>
      </div>
      <div className="sideNav">
        <div className="closeSideNavButton" onClick={closeSideNav} >X</div>
        <Link to="/" className="home" onClick={closeSideNav}>Home</Link>
        <Link to="/stats"className="stats" onClick={closeSideNav}>Stats</Link>
        <span className="welcome">Welcome, {user.name}</span>
        <Link to="" className="logOut" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}