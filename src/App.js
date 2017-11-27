import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Endpoint to get arrivals https://pair-programming-task.firebaseio.com/arrivals.json (accepts GET & PATCH)
  // Follows standard REST
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Airsorted Arrivals</h1>
        </header>
        <p className="App-intro">
          {/* TODO SHOW ARRIVALS */}
        </p>
      </div>
    );
  }
}

export default App;
