import React, { Component } from "react";
import "./App.css";

// Bookings endpoint http://localhost:8000/bookings (accepts GET & PATCH only)
// GET returns array of all bookings for today (note weird Mongo DB _id instead of id property)
// PATCHING a booking will return the resource that changed
// API follows standard REST patterns e.g. updating a booking `/bookings/${id}` - body: { thing_that_changed: value}

// TODO SHOW LIST OF BOOKINGS
// TODO ORDER BOOKINGS BY ARRIVAL TIME
// TODO ALLOW BOOKING TO BE CANCELLED/ACTIVATED - CHANGE STYLE TO MAKE APPARENT
// TODO WRITE A TEST TO ENSURE LIST OF BOOKINGS IS RENDERED
// TODO TALK ABOUT HOW THIS WOULD BE IMPROVED

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Airsorted Bookings Dashboard</h1>
        </header>

        {/* CODE GOES HERE - MUCH LUCK :) */}
        
        <p className="empty-alert">No bookings found...</p>
      </div>
    );
  }
}

export default App;
