import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  robotsArray: [],
};

const robotsSlice = createSlice({
  name: 'robots',
  initialState,
  reducers: {
    getRobots: (state, action) => {
      const newState = action.payload;
      state.robotsArray = newState;
    },
  },
});

export const { getRobots } = robotsSlice.actions;
export default robotsSlice.reducer;
