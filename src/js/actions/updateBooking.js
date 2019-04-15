export function updateBooking(booking) {
  console.log(booking);

  return {
    type: "UPDATE_BOOKING",
    booking
  };
}
