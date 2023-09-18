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
    resetSearchField: (state, action) => {
      state.value = '';
    },
  },
});

export const { updateSearchField, resetSearchField } = searchFieldSlice.actions;
export default searchFieldSlice.reducer;
