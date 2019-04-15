const initialState = {
  bookings: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_BOOKINGS":
      const { bookings } = action;

      return { ...initialState, bookings };

    case "UPDATE_BOOKING":
      let newBookings = state.bookings.map(currentBooking => {
        if (currentBooking._id === action.booking._id) {
          return action.booking;
        } else {
          return currentBooking;
        }
      });
      return { ...state, bookings: newBookings };

    case "DELETE_BOOKING":
      const updatedBookings = state.bookings.filter(
        booking => booking._id !== action.id
      );
      return { ...state, bookings: updatedBookings };
    default:
      return state;
  }
}

export default rootReducer;
