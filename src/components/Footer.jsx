import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} HotelFinder. All rights reserved.</p>
        <p>Follow us on 
          <a href="https://facebook.com" className="text-white ms-2">Facebook</a>,
          <a href="https://twitter.com" className="text-white ms-2">Twitter</a>, and
          <a href="https://instagram.com" className="text-white ms-2">Instagram</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

