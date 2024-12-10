import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ConfirmationPage = () => {
    const location = useLocation();
    const {
        hotel,
        checkIn,
        checkOut,
        checkInTime,
        checkOutTime,
        rooms,
        adults,
        children,
        totalPrice
    } = location.state || {};

    return (
        <div className="container mt-4 text-center">
            <h1>Booking Confirmed!</h1>
            <p>Your booking details have been saved successfully.</p>

            {hotel && (
                <div className="mt-4">
                    <h3>Hotel Details</h3>
                    <p><strong>Hotel Name:</strong> {hotel.name}</p>
                    <p><strong>Location:</strong> {hotel.location}</p>
                    <p><strong>Price per night:</strong> ${hotel.price}</p>
                    <p><strong>Rooms:</strong> {rooms}</p>
                    <p><strong>Total Cost:</strong> ${totalPrice}</p>
                </div>
            )}

            {checkIn && checkOut && (
                <div className="mt-4">
                    <h3>Booking Dates</h3>
                    <p><strong>Check-in Date:</strong> {checkIn} at {checkInTime}</p>
                    <p><strong>Check-out Date:</strong> {checkOut} at {checkOutTime}</p>
                </div>
            )}

            <div className="mt-4">
                <h3>Guest Details</h3>
                <p><strong>Adults:</strong> {adults}</p>
                <p><strong>Children:</strong> {children}</p>
            </div>

            <Link to="/" className="btn btn-primary mt-4">
                Back to Home
            </Link>
        </div>
    );
};

export default ConfirmationPage;

