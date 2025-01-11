import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"; // Adjust the path as needed
import themeReducer from "../features/theme/themeSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default store; // Make sure the store is exported as default
