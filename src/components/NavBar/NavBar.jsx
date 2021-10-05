import './NavBar.css';
import { NavLink } from 'react-router-dom';
import React, { Fragment, useState }  from 'react';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  };

  function handleArrowClick() {
    if (!sideNavOpen) {
      document.querySelector(".sideNavBar").classList.add('sideNavOpened');
      document.querySelector(".openIcon").classList.remove('hidden');
      document.querySelector(".closeIcon").classList.add('hidden');
      setSideNavOpen(true);
    } else {
      document.querySelector(".sideNavBar").classList.remove('sideNavOpened');
      document.querySelector(".openIcon").classList.add('hidden');
      document.querySelector(".closeIcon").classList.remove('hidden');
      setSideNavOpen(false);
    };
  };

  return (
    <nav>
      <div className="topNavBar">
        <div className="pageTitle">
          <NavLink to="/" exact className="flx-ctr-ctr" name="activeHome">COVID-19 Dashboard</NavLink>
        </div>
        <div>
          { user && (
            <NavLink to="/me" exact className="myCountyTopNav flex-ctr-ctr" name="activeMyCounty" activeStyle={{color : "#172121", borderTop : "0.2vmin solid #dce4e9"}}>My County</NavLink>
          )}
          {/* <NavLink to="/stats" exact className="statsTopNav flex-ctr-ctr" name="activeStats" activeStyle={{color : "#172121", borderTop : "0.2vmin solid #dce4e9"}}>Stats</NavLink> */}
          <NavLink to="/" exact className="homeTopNav flex-ctr-ctr" name="activeHome" activeStyle={{color : "#172121", borderTop : "0.2vmin solid #dce4e9"}}>Home</NavLink>
          <div to="" className="spacerTopNav flex-ctr-ctr"></div>
        { user ?
          <NavLink to="" className="logOutTopNav flex-ctr-ctr" onClick={handleLogOut}>Log Out</NavLink>
          :
          <Fragment>
            <div className="logInTopNav open">Log In</div>
            <div className="signUpTopNav open">Sign Up</div>
          </Fragment>
        }
        </div>
        <div className="sideNavButtonContainer">
          <div className="sideNavButton" onClick={handleArrowClick}>
            <div className="openIcon hide">
              <svg xmlns="http://www.w3.org/2000/svg" width="3vmin" height="3vmin" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
              </svg>
            </div>
            <div className="closeIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="3vmin" height="3vmin" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="sideNavBar">
        <NavLink to="/" exact className="homeSideNav" name="activeHome" activeStyle={{color : "#dce4e9"}} onClick={handleArrowClick}>Home</NavLink>
        {/* <NavLink to="/stats" exact className="statsSideNav" name="activeStats" activeStyle={{color : "#dce4e9"}} onClick={handleArrowClick}>Stats</NavLink> */}
        { user && (
          <NavLink to="/me" exact className="myCountySideNav" name="activeMyCounty" activeStyle={{color : "#dce4e9"}} onClick={handleArrowClick}>My County</NavLink>
        )}
        <NavLink to="" className="spacerSideNav flex-ctr-ctr"></NavLink>
        { user ?
          <NavLink to="" className="logOutSideNav" onClick={handleLogOut}>Log Out</NavLink>
          :
          <Fragment>
            <div className="logInTopNav">Log In</div>
            <div className="signUpTopNav">Sign Up</div>
          </Fragment>
        }
      </div>
    </nav>
  );
};