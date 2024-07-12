import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    horse: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  },
  reducers: {
    setBookingDetails: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { setBookingDetails } = bookingSlice.actions;
export default bookingSlice.reducer;
