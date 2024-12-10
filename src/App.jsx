import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmationPage from './components/ConfirmationPage';
import AboutusPage from './components/AboutusPage'; // Import About Us Page
import ServicesPage from './components/ServicesPage'; // Import Services Page
import ContactPage from './components/ContactPage'; // Import Contact Us Page
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking/:hotelId" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/about" element={<AboutusPage />} /> {/* About Us Route */}
        <Route path="/services" element={<ServicesPage/>} /> {/* Services Route */}
        <Route path="/contact" element={<ContactPage/>} /> {/* Contact Us Route */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

