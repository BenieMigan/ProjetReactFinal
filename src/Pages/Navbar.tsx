
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
        <Link to ="/">
            <img
              src={"https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4-free-img.png"}
              alt=""
            />
          </Link>
        </div>
        
        <ul className="navbar-links">
        <li><Link to ="/Aboutus">About Us</Link></li>
                <li><Link to ="/Livingroom">Living Room</Link></li>
                <li><Link to ="/Kitchen">Kitchen</Link></li>
                <li><Link to ="/Outdoors">Outdoors</Link></li>
                <li><Link to ="/Contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Main Section */}
      <header className="main-header">
        <h1>Coming Home Never <br /> Felt So Good!</h1>
        <p>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
        <button className="main-button">Find Your Style</button>
      </header>
     
    </div>
  );
};

export default Navbar;
