import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from "./testimonialsSlice";
import contactReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
    contact: contactReducer,
  },
});
