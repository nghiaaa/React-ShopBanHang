import { configureStore } from "@reduxjs/toolkit";
import cartSlide from "./slices/cartSlide";
const store = configureStore({
  reducer: {
    cart: cartSlide,
  },
});

export default store;
