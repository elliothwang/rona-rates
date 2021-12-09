import './NavBar.css';
import { NavLink } from 'react-router-dom';
import React, { Fragment, useState }  from 'react';
import * as userService from '../../utilities/users-service';
import AuthPopUp from '../AuthPopUp/AuthPopUp';
import logo from '../../assets/2019-nCoV.png';
import useKeypress from 'react-use-keypress';

export default function NavBar({ user, setUser }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [showLogIn, setShowLogIn] = useState(true);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  };

  function handleArrowClick() {
    if (!sideNavOpen) {
      document.querySelector(".sideNavBar").classList.add('opened');
      document.querySelector(".openArrowIcon").classList.add('hidden');
      document.querySelector(".closeArrowIcon").classList.remove('hidden');
      setSideNavOpen(true);
    } else {
      document.querySelector(".sideNavBar").classList.remove('opened');
      document.querySelector(".openArrowIcon").classList.remove('hidden');
      document.querySelector(".closeArrowIcon").classList.add('hidden');
      setSideNavOpen(false);
    };
  };

  function handleAuthClick(evt) {
    const name = evt.target.className;
    if ((!popUpOpen && name === "logInTopNav") || (!popUpOpen && name === "logInSideNav")) {
      document.querySelector(".authPopUpContainer").classList.remove('hidden');
      setPopUpOpen(true);
      setShowLogIn(true);
    }
    if ((!popUpOpen && name === "signUpTopNav") || (!popUpOpen && name === "signUpSideNav"))  {
      document.querySelector(".authPopUpContainer").classList.remove('hidden');
      setPopUpOpen(true);
      setShowLogIn(false);
    }
    document.querySelector(".sideNavBar").classList.remove('opened');
    (name === "logInSideNav" || name === "signUpSideNav") && handleArrowClick();
  }

  function closeAuthPopUp() {
    document.querySelector(".authPopUpContainer").classList.add('hidden');
    setPopUpOpen(false);
  }

  useKeypress('Escape', () => {
    closeAuthPopUp();
  });

  return (
    <nav>
      <div className="authPopUpContainer hidden">
        <div className="authPopUp">
          <div className="closeAuthIcon" onClick={closeAuthPopUp}>
            <svg xmlns="http://www.w3.org/2000/svg" width="3.5vh" height="3.5vh" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
          <div className="authPage">
            <AuthPopUp setUser={setUser} showLogIn={showLogIn} setShowLogIn={setShowLogIn} closeAuthPopUp={closeAuthPopUp} />
          </div>
        </div>
      </div>
      <div className="topNavBar">
        <div className="pageTitle">
          <NavLink to="/" exact className="flx-ctr-ctr" name="activeHome">
            <img className="logo" src={logo} alt="2019-nCoV"/>Rona Rates
          </NavLink>
        </div>
        <div className="topNavLinks">
          <NavLink to="/" exact className="homeTopNav" name="activeHome" activeStyle={{color : "#60a6dc", borderTop : "0.2vmin solid #60a6dc"}}>Home</NavLink>
          <NavLink to="" className="spacerTopNav"></NavLink>
          {user ?
            <NavLink to="" className="logOutTopNav" onClick={handleLogOut}>Log Out</NavLink>
            :
            <Fragment>
              <div className="logInTopNav" onClick={handleAuthClick}>Log In</div>
              <div className="signUpTopNav" onClick={handleAuthClick}>Sign Up</div>
            </Fragment>
          }
        </div>
      </div>
      <div className="sideNavBar">
        <div className="sideNavButton flex-ctr-ctr" onClick={handleArrowClick}>
          <div className="closeArrowIcon hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="2vh" height="2vh" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
            </svg>
          </div>
          <div className="openArrowIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="2vh" height="2vh" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
            </svg>
          </div>
        </div>
        <NavLink to="/" exact className="homeSideNav" name="activeHome" activeStyle={{color : "#dce4e9"}} onClick={handleArrowClick}>Home</NavLink>
        <NavLink to="" className="spacerSideNav flex-ctr-ctr"></NavLink>
        { user ?
          <NavLink to="" className="logOutSideNav" onClick={handleLogOut}>Log Out</NavLink>
          :
          <Fragment>
            <div className="logInSideNav" onClick={handleAuthClick}>Log In</div>
            <div className="signUpSideNav" onClick={handleAuthClick}>Sign Up</div>
          </Fragment>
        }
      </div>
    </nav>
  );
};