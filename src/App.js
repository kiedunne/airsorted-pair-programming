import React, { Component } from "react";
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
    fetch("http://localhost:8000/bookings")
      .then(res => {
        return res.json();
      })
      .then(bookings => {
        this.setState({
          bookings
        });
      });
  }

  updateBooking(booking) {
    fetch(`http://localhost:8000/bookings/${booking._id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cancelled: !booking.cancelled
      })
    })
      .then(res => {
        return res.json();
      })
      .then(booking => {
        this.getBookings();
      });
  }

  componentDidMount() {
    this.getBookings();
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Airsorted Bookings Dashboard</h1>
        </header>

        <div className="app-content">
          {/* TODO SHOW LIST OF BOOKINGS */}
          {/* TODO ORDER BOOKINGS BY ARRIVAL TIME SERVER OR CLIENT - UP TO YOU */}
          {/* TODO ALLOW BOOKING TO BE CANCELLED/ACTIVATED - CHANGE STYLE TO MAKE APPARENT */}
          {/* WRITE A TEST TO ENSURE LIST OF BOOKINGS IS RENDERED */}

          {!this.state.bookings.length ? (
            <p className="empty-alert">No bookings found...</p>
          ) : (
            this.state.bookings.map(booking => {
              return (
                <div key={booking._id}>
                  <p>{booking.name}</p>
                  <p>{booking.cancelled ? "Inaction" : "Active"}</p>
                  <p>{booking.date.toLocaleString()}</p>

                  <button onClick={() => this.updateBooking(booking)}>
                    Update
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default App;
