import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"; // Adjust the path as needed

const store = configureStore({
  reducer: {
    cart: cartReducer, // Include your slice reducers here
  },
});

export default store; // Make sure the store is exported as default
