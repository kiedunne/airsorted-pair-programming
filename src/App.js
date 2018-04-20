import React, { Component } from "react";
import axios from "axios";
import Bookings from "./Bookings";
import "./App.css";

// Bookings endpoint http://localhost:8000/bookings (accepts GET & PATCH only)
// GET returns array of all bookings for today
// PATCHING a booking will return the single resource that changed
// API Follows standard REST patterns e.g. updating a booking `/bookings/${id}` - body: { thing_that_changed: value}

class App extends Component {
  state = {
    bookings: []
  };

  getBookings() {
    axios.get("http://localhost:8000/bookings").then(res => {
      this.setState({
        bookings: res.data.sort((a, b) => {
          return a.date > b.date ? 1 : -1;
        })
      });
    });
  }

  componentDidMount() {
    this.getBookings();
  }

  toggleBooking = booking => {
    axios
      .patch(`http://localhost:8000/bookings/${booking._id}`, {
        cancelled: !booking.cancelled
      })
      .then(res => {
        this.setState({
          bookings: this.state.bookings.map(booking => {
            return booking._id === res.data._id
              ? { ...booking, cancelled: res.data.cancelled }
              : booking;
          })
        });
      });
  };

  render() {
    const { bookings } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1>Airsorted Bookings Dashboard</h1>
        </header>

        <div className="app-content">
          {bookings.length ? (
            <Bookings bookings={bookings} toggleBooking={this.toggleBooking} />
          ) : (
            <p className="empty-alert">No bookings found...</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
