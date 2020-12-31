import React from 'react';
import { Link } from 'react-router-dom';

require('./Style.css');

const Nav = () =>
  (
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
          <ul className="navbar-nav m1-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" style={{color:'#fff'}} to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" style={{color:'#fff'}} to="/signup">Signup</Link></li>
          </ul>
      </nav>
  );

export default Nav;
