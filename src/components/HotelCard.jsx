import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={hotel.image}
          className="card-img-top img-fluid"
          alt={hotel.name}
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h5 className="card-title">{hotel.name}</h5>
          <p className="card-text">
            Location: {hotel.location} <br />
            Price: ${hotel.price}/night
          </p>
          <Link to={`/booking/${hotel.id}`} className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

