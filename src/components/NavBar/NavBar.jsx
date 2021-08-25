import './NavBar.css';
import { NavLink } from 'react-router-dom';
import React, { useState }  from 'react';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  };

  function openOrCloseSideNav(evt) {
    if (!sideNavOpen) {
      document.querySelector(".sideNav").classList.add('sideNavOpened');
      setSideNavOpen(true);
    } else {
      document.querySelector(".sideNav").classList.remove('sideNavOpened');
      setSideNavOpen(false);
    };
  };

  return (
    <nav>
      <div className="sideNavButton" onClick={ openOrCloseSideNav }>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
        </svg>
      </div>
      <div className="sideNav">
        <NavLink to="/" exact className="home" name="activeHome" activeStyle={{color : "white"}} onClick={openOrCloseSideNav}>Home</NavLink>
        <NavLink to="/stats"className="stats" name="activeStats" activeStyle={{color : "white"}} onClick={openOrCloseSideNav}>Stats</NavLink>
        <span className="welcome">Welcome, {user.name}</span>
        <NavLink to="" className="logOut" onClick={handleLogOut}>Log Out</NavLink>
      </div>
    </nav>
  );
};