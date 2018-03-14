import React, { Component } from "react";
import "./App.css";

// Endpoint to get arrivals https://pair-programming-task.firebaseio.com/bookings.json (accepts GET & PATCH)
// Returns array of bookings for today
// API Follows standard REST patterns e.g. updating an arrival `bookings/2.json` - body: { thing_that_changed: value}

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Airsorted Bookings Dashboard</h1>
        </header>

        <div className="app-content">
          {/* TODO SHOW BOOKINGS - ASSUME ENDPOINT ONLY RETURNS TODAYS ARRIVALS */}
          {/* TODO ORDER BOOKINGS BY ARRIVAL TIME */}
          {/* TODO ALLOW BOOKING TO BE CANCELLED - CHANGE COLOR AND MAKE OPAQUE */}
          {/* WRITE A TEST TO ENSURE OUR LIST OF BOOKINGS IS RENDERED */}

          <p className="empty-alert">No bookings found...</p>
        </div>
      </div>
    );
  }
}

export default App;
