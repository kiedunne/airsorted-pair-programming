import React, { Component } from "react";
import "./App.css";

// Endpoint to get arrivals https://pair-programming-task.firebaseio.com/arrivals.json (accepts GET & PATCH)
// Returns denormalised data - object with keys (not array)
// API Follows standard REST patterns e.g. updating an arrival `arrivals/${arrivalKey}.json`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Airsorted Arrivals</h1>
        </header>

        <div className="App-content">
          {/* TODO SHOW ARRIVALS - ASSUME ENDPOINT ONLY RETURNS TODAYS ARRIVALS */}
          {/* TODO MAKE LOOK DECENT :) */}
          {/* TODO ORDER BY TIME */}
          {/* TODO ALLOW ARRIVAL TO BE UPDATED TO "ARRIVED" CHANGE COLOR */}
        </div>
      </div>
    );
  }
}

export default App;
