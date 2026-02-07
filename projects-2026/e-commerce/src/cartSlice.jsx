import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state) {
      state.cart = state.cart + 1;
      state.price = state.price * state.cart;
      console.log(initialState.price);
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
