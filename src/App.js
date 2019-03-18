import React, { Component } from "react";
import "./App.css";

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
