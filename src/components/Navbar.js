import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/certificate">Certificate</Link></li>
      <li><Link to="/miscellaneous">Miscellaneous</Link></li>
    </ul>
  </nav>
);

export default Navbar;
