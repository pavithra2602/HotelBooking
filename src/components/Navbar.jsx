import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    // Navigate to the home page
    navigate('/');
    // Scroll to the "available-hotels" section with a delay to ensure the page loads
    setTimeout(() => {
      window.location.hash = 'available-hotels';
    }, 500); // Adjust the timeout if needed
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          <i className="bi bi-building me-2"></i> Goibibo
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


