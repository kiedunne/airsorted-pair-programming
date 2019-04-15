import React from "react";

const Booking = ({ booking, handleUpdateBooking }) => {
  return (
    <div className="eachBooking">
      <img src={booking.image_url} />
      <div className="bookingInfo">
        <h1 className="bookingName">{booking.name}</h1>
        <p>{new Date(booking.date).toLocaleDateString()}</p>
      </div>
      <button onClick={() => handleUpdateBooking(booking)}>
        {booking.cancelled ? "Accept" : "Cancel"}
      </button>
    </div>
  );
};

export default Booking;
