import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const hotels = [
    {
        id: 1,
        name: "Hotel Sunshine",
        location: "New York",
        price: 120,
        image: "src/assets/image1.jpg",
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

// Define available time slots for check-in and check-out
const availableSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
];

const BookingPage = () => {
    const { hotelId } = useParams();
    const hotel = hotels.find((h) => h.id === parseInt(hotelId));
    const navigate = useNavigate();

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    // Calculate the total price based on the number of rooms, adults, and children
    const totalPrice = hotel ? (hotel.price * rooms) + (adults * 20) + (children * 10) : 0;

    const handleBooking = () => {
        const today = new Date();
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        // Validate check-in date is not in the past
        if (checkInDate < today) {
            alert('The check-in date must be in the future.');
            return;
        }

        // Validate check-out date is after check-in date
        if (checkOutDate <= checkInDate) {
            alert('The check-out date must be after the check-in date.');
            return;
        }

        if (!checkIn || !checkOut || !checkInTime || !checkOutTime) {
            alert('Please fill in all the required fields.');
            return;
        }

        // Navigate to confirmation page with booking details
        navigate('/confirmation', {
            state: {
                hotel,
                checkIn,
                checkOut,
                checkInTime,
                checkOutTime,
                rooms,
                adults,
                children,
                totalPrice
            }
        });
    };

    return (
        <div className="container mt-4">
            <h2>{hotel ? hotel.name : 'Hotel not found'}</h2>
            <p>Location: {hotel ? hotel.location : ''}</p>
            <p>Price per night: ${hotel ? hotel.price : 0}</p>

            <div className="row my-4">
                <div className="col-md-4">
                    <label>Check-in Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label>Check-in Time:</label>
                    <select
                        className="form-control"
                        value={checkInTime}
                        onChange={(e) => setCheckInTime(e.target.value)}
                    >
                        <option value="">Select Time</option>
                        {availableSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <label>Check-out Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label>Check-out Time:</label>
                    <select
                        className="form-control"
                        value={checkOutTime}
                        onChange={(e) => setCheckOutTime(e.target.value)}
                    >
                        <option value="">Select Time</option>
                        {availableSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-md-6">
                    <label>Rooms:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={rooms}
                        min="1"
                        onChange={(e) => setRooms(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label>Adults:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={adults}
                        min="1"
                        onChange={(e) => setAdults(e.target.value)}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label>Children:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={children}
                        min="0"
                        onChange={(e) => setChildren(e.target.value)}
                    />
                </div>
            </div>

            <div className="my-4">
                <h4>Total Cost: ${totalPrice}</h4>
            </div>

            <button className="btn btn-success" onClick={handleBooking}>
                Confirm Booking
            </button>
        </div>
    );
};

export default BookingPage;

