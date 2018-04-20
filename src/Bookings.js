import React, { Component } from "react";

export default class Bookings extends Component {
  render() {
    const { bookings, toggleBooking } = this.props;

    return bookings.map(booking => (
      <div
        key={booking._id}
        className={`booking booking--${
          booking.cancelled ? "inactive" : "active"
        }`}
      >
        <img src={booking.image} alt="Profile" />
        <p>Name: {booking.name}</p>
        <p>Date: {booking.date.toLocaleString()}</p>
        <button type="button" onClick={() => toggleBooking(booking)}>
          {booking.cancelled ? "Activate" : "Cancel"}
        </button>
      </div>
    ));
  }
}
