import './Footer.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer flex-ctr-ctr">
      <div className="socials">
        <a href="https://www.linkedin.com/">
          <i className="icon ion-social-linkedin"></i>
        </a>
        <a href="https://github.com/">
          <i className="icon ion-social-github"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="icon ion-social-instagram"></i>
        </a>
        <a href="https://www.youtube.com/">
          <i className="icon ion-social-youtube"></i>
        </a>
      </div>
      <div className="links">
        <NavLink to="/" exact activeStyle={{ color: '#60a6dc' }}>
          Home
        </NavLink>
        <NavLink to="">Services</NavLink>
        <NavLink to="">About</NavLink>
        <NavLink to="">Terms</NavLink>
        <NavLink to="">Privacy Policy</NavLink>
      </div>
      <div className="copyright">Rona Rates © 2021</div>
    </div>
  );
}
