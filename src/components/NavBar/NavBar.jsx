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

  function openOrCloseSideNav() {
    if (!sideNavOpen) {
      document.querySelector(".sideNav").classList.add('sideNavOpened');
      document.querySelector(".openSideNavButton").classList.add('hide');
      document.querySelector(".closeSideNavButton").classList.remove('hide');
      setSideNavOpen(true);
    } else {
      document.querySelector(".sideNav").classList.remove('sideNavOpened');
      document.querySelector(".openSideNavButton").classList.remove('hide');
      document.querySelector(".closeSideNavButton").classList.add('hide');
      setSideNavOpen(false);
    };
  };

  return (
    <nav>
      <div className="sideNavButton" onClick={ openOrCloseSideNav }>
        <div className="openSideNavButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
          </svg>
        </div>
        <div className="closeSideNavButton hide">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
          </svg>
        </div>
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