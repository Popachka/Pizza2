import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import search from './slices/searchSlice';
export const store = configureStore({
  reducer: {
    filter,
    cart,
    search,
  },
});
