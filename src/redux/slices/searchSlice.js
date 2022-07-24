import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  valueSearch: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValueSearch(state, action) {
      state.valueSearch = action.payload;
    },
  },
});

export const { setValueSearch } = searchSlice.actions;

export default searchSlice.reducer;
