import React from 'react';

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Contact Us</h1>
        <p className="text-muted">
          Have questions or need assistance? We'd love to hear from you. Get in touch with us using the form below.
        </p>
      </div>
      <div className="row">
        {/* Contact Info Section */}
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold">Our Office</h5>
          <p className="text-muted">
            <i className="bi bi-geo-alt-fill text-primary"></i> 123 Luxury Lane, Cityscape, USA
          </p>
          <p className="text-muted">
            <i className="bi bi-telephone-fill text-primary"></i> +1 (234) 567-8901
          </p>
          <p className="text-muted">
            <i className="bi bi-envelope-fill text-primary"></i> support@hotelbooking.com
          </p>
          <p className="text-muted">
            <i className="bi bi-clock-fill text-primary"></i> Mon - Fri: 9:00 AM - 6:00 PM
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
