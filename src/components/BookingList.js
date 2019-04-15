import React from "react";
import Booking from "./Booking";

const BookingList = ({ bookings }) => {
  return bookings.length !== 0 ? (
    <div className="eachBookingContainter">
      {bookings.map(booking => (
        <Booking key={booking._id} booking={booking} />
      ))}
    </div>
  ) : (
    <p className="empty-alert">No bookings found...hey there</p>
  );
};
export default BookingList;
