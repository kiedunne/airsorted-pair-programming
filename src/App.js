import React, { Component } from "react";
import "./App.css";

// Endpoint to get arrivals https://pair-programming-task.firebaseio.com/arrivals.json (accepts GET & PATCH)
// Returns array of arrivals for today
// API Follows standard REST patterns e.g. updating an arrival `arrivals/${arrivalKey}.json` - body: { thing_that_changed: value}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Airsorted Guest Arrivals</h1>
        </header>

        <div className="App-content">
          {/* TODO SHOW ARRIVALS - ASSUME ENDPOINT ONLY RETURNS TODAYS ARRIVALS */}
          {/* TODO ORDER BY TIME */}
          {/* TODO ALLOW ARRIVAL TO BE UPDATED AND SAVED TO "ARRIVED" & CHANGE COLOR */}
        </div>
      </div>
    );
  }
}

export default App;
