import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import URL from "./url";
import BookingList from "./components/BookingList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(URL);
    console.log(data);
    this.setState({ bookings: this.sortBookings(data) });
  }

  sortBookings(bookings) {
    let sortedBookings = bookings.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    return sortedBookings;
  }

  handleUpdateBooking = async booking => {
    "";
    const { data } = await axios.patch(`${URL}/${booking._id}`, {
      cancelled: !booking.cancelled
    });
    this.updateBooking(data);
  };
  updateBooking(updatedBooking) {
    let newBookings = this.state.bookings.filter(
      b => b._id !== updatedBooking._id
    );
    newBookings.push(updatedBooking);
    this.setState(
      {
        bookings: this.sortBookings(newBookings)
      },
      () => console.log(this.state.bookings)
    );
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Airsorted Bookings Dashboard</h1>
        </header>

        <BookingList
          bookings={this.state.bookings}
          handleUpdateBooking={this.handleUpdateBooking}
        />
      </div>
    );
  }
}

export default App;
