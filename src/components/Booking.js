import React from "react";
import { connect } from "react-redux";
import { updateBooking } from "../js/actions/updateBooking";
import { deleteBooking } from "../js/actions/deleteBooking";
import axios from "axios";
import URL from "../url";

const Booking = ({ booking, updateBooking, deleteBooking }) => {
  const handleUpdateBooking = async booking => {
    const { data } = await axios.patch(`${URL}/${booking._id}`, {
      cancelled: !booking.cancelled
    });

    updateBooking(data);
  };

  const handleDeleteBooking = id => {
    deleteBooking(id);
  };

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
      <button onClick={() => handleDeleteBooking(booking._id)}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  {
    updateBooking,
    deleteBooking
  }
)(Booking);
