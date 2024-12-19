import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="nav">
      {/* Link to the home page */}
      <Link to="/" className='navButton'>Blogs</Link>  
      {/* Link to the page for creating a new blog */}
      <Link to="/create" className='navButton'>Create</Link>
    </nav>
  );
};

export default Navbar;
