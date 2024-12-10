import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Luxury Hotel"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5 fw-bold mb-3">About Us</h1>
          <p className="text-muted">
            Welcome to <strong>Goibibo</strong>, your premier destination for finding luxurious and budget-friendly accommodations around the globe. Our mission is to provide an unparalleled booking experience, ensuring that your travel stays are comfortable, memorable, and hassle-free.
          </p>
          <p className="text-muted">
            Whether you’re traveling for business or leisure, we connect you with world-class hotels offering top-notch amenities, personalized services, and competitive prices.
          </p>
          <p className="text-muted">
            Our platform is built on trust, quality, and customer satisfaction. Join thousands of happy customers who’ve discovered their perfect stay through us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
