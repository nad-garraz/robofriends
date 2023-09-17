import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const searchFieldSlice = createSlice({
  name: 'searchField',
  initialState,
  reducers: {
    updateSearchField: (state, action) => {
      const newState = action.payload; //payload es la info nueva
      state.value = newState;
    },
  },
});

export const { updateSearchField } = searchFieldSlice.actions;
export default searchFieldSlice.reducer;
