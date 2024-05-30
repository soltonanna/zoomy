import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container flex justify-center items-center p-4 bg-white">
        <div className="navbar__links flex space-x-10">
          <Link to="/" className="navbar__link text-lg text-main-color hover:text-blue">Home</Link>
          <Link to="/blog" className="navbar__link text-lg text-main-color hover:text-blue">Blog</Link>
          <Link to="/instructors" className="navbar__link text-lg text-main-color hover:text-blue">Instructors</Link>
          <Link to="/price" className="navbar__link text-lg text-main-color hover:text-blue">Price</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
