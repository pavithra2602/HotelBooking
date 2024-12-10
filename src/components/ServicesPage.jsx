import React from 'react';

const Services = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Our Services</h1>
        <p className="text-muted">
          Explore the wide range of services we offer to enhance your travel experience.
        </p>
      </div>
      <div className="row gy-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <i className="bi bi-building fs-1 text-primary mb-3"></i>
              <h5 className="card-title fw-bold">Luxury Accommodations</h5>
              <p className="card-text text-muted">
                Choose from a selection of world-class hotels that redefine luxury and comfort.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <i className="bi bi-calendar2-check fs-1 text-primary mb-3"></i>
              <h5 className="card-title fw-bold">Seamless Booking</h5>
              <p className="card-text text-muted">
                Enjoy a smooth and hassle-free booking process with just a few clicks.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <i className="bi bi-wifi fs-1 text-primary mb-3"></i>
              <h5 className="card-title fw-bold">Free Amenities</h5>
              <p className="card-text text-muted">
                Stay connected and relaxed with complimentary Wi-Fi, breakfast, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <i className="bi bi-compass fs-1 text-primary mb-3"></i>
              <h5 className="card-title fw-bold">Travel Assistance</h5>
              <p className="card-text text-muted">
                Get expert guidance on local attractions, transport, and itineraries.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <i className="bi bi-stars fs-1 text-primary mb-3"></i>
              <h5 className="card-title fw-bold">Exclusive Offers</h5>
              <p className="card-text text-muted">
                Access special deals and discounts to save on your next stay.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <i className="bi bi-headset fs-1 text-primary mb-3"></i>
              <h5 className="card-title fw-bold">24/7 Support</h5>
              <p className="card-text text-muted">
                Our dedicated team is available around the clock to assist you with your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
