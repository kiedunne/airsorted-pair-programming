import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import axios from "axios";
import { receiveBookings } from "./js/actions/index";

import URL from "./url";
import BookingList from "./components/BookingList";

class App extends Component {
  async componentDidMount() {
    const { data } = await axios.get(URL);

    this.props.receiveBookings(data);
  }

  sortBookings(bookings) {
    let sortedBookings = bookings.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    return sortedBookings;
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Airsorted Bookings Dashboard</h1>
        </header>

        <BookingList bookings={this.props.bookings} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bookings: state.bookings };
};

export default connect(
  mapStateToProps,
  {
    receiveBookings
  }
)(App);
