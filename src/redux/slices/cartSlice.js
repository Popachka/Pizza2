import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};
const NewPrice = (state) => {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      NewPrice(state);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      NewPrice(state);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      NewPrice(state);
    },
    clearItems(state, action) {
      state.totalPrice = 0;
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
