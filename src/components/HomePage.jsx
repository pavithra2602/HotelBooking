import React, { useState } from 'react';
import HotelCard from './HotelCard';
import hotel1 from '/src/assets/hotel1.jpg';
import hotel2 from '/src/assets/hotel2.jpg';
import hotel3 from '/src/assets/hotel3.jpg';
import hotel4 from '/src/assets/hotel4.jpg';
import hotel5 from '/src/assets/hotel5.jpg';
import hotel6 from '/src/assets/hotel6.jpg';
import hotel7 from '/src/assets/hotel7.jpg';
import hotel8 from '/src/assets/hotel8.jpg';
import hotel9 from '/src/assets/hotel9.jpg';
import hotel10 from '/src/assets/hotel10.jpg';
import hotel11 from '/src/assets/hotel11.jpg';
import hotel12 from '/src/assets/hotel12.jpg';

const hotels = [
    {
      id: 1,
      name: "Hotel Sunshine",
      location: "New York",
      price: 120,
      image: "src/assets/hotel1.jpg",
    },
    {
      id: 2,
      name: "Ocean View",
      location: "Miami",
      price: 200,
      image: "src/assets/hotel2.jpg",
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Denver",
      price: 150,
      image: "src/assets/hotel3.jpg",
    },
    {
      id: 4,
      name: "City Lights Inn",
      location: "Los Angeles",
      price: 180,
      image: "src/assets/hotel4.jpg",
    },
    {
      id: 5,
      name: "Desert Oasis",
      location: "Las Vegas",
      price: 220,
      image: "src/assets/hotel5.jpg",
    },
    {
      id: 6,
      name: "Rainforest Haven",
      location: "Seattle",
      price: 140,
      image: "src/assets/hotel6.jpg",
    },
    {
      id: 7,
      name: "Historic Downtown Stay",
      location: "Boston",
      price: 170,
      image: "src/assets/hotel7.jpg",
    },
    {
      id: 8,
      name: "Lakeside Lodge",
      location: "Chicago",
      price: 160,
      image: "src/assets/hotel8.jpg",
    },
    {
      id: 9,
      name: "Tropical Paradise",
      location: "Honolulu",
      price: 300,
      image: "src/assets/hotel9.jpg",
    },
    {
      id: 10,
      name: "Countryside Getaway",
      location: "Nashville",
      price: 130,
      image: "src/assets/hotel10.jpg",
    },
    {
        id: 11,
        name: "Evergreen Getaway",
        location: "Spain",
        price: 150,
        image: "src/assets/hotel11.jpg",
    },
    {
        id: 12,
        name: "Paradise",
        location: "Bali",
        price: 140,
        image: "src/assets/hotel12.jpg",
      },
    
  ];
  
  const HomePage = () => {
    const [filters, setFilters] = useState({ location: '', maxPrice: '' });
  
    const filteredHotels = hotels.filter((hotel) => {
      return (
        (!filters.location || hotel.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.maxPrice || hotel.price <= parseInt(filters.maxPrice))
      );
    });
  
    return (
      <div>
        {/* Hero Section */}
        <div
          className="hero-section text-white text-center d-flex align-items-center"
          style={{
            backgroundImage: `url(${hotel1})`,
            height: '90vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container">
            <h1 className="display-4 fw-bold">Your Luxury Hotel for Vacation</h1>
            <p className="lead">Just enjoy and relax</p>
            {/* Anchor link to the Available Hotels section */}
            <a href="#available-hotels" className="btn btn-primary btn-lg">
              See Our Rooms
            </a>
          </div>
        </div>
  
        {/* Filters and Hotels Section */}
        <div className="container mt-5" id="available-hotels">
          <h1 className="mb-4">Available Hotels</h1>
          <div className="row mb-4">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search by location"
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                placeholder="Max price"
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  