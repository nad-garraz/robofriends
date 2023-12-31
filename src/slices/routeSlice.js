import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  route: 'home',
  id: 0,
};

const routeSlice = createSlice({
  name: 'routeMap',
  initialState,
  reducers: {
    changeRoute: (state, action) => {
      const newState = action.payload; //payload es la info nueva
      state.route = newState.route
      state.id = newState.id
    },
  },
});

export const { changeRoute } = routeSlice.actions;
export default routeSlice.reducer;
