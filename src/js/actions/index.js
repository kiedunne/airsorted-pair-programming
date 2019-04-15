export function receiveBookings(bookings) {
  console.log(bookings);

  return {
    type: "RECEIVE_BOOKINGS",
    bookings: bookings
  };
}
