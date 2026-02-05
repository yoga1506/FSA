import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValue: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.initialValue = state.initialValue + 1;
    },
    decrement(state) {
      state.initialValue = state.initialValue - 1;
    },
    reset(state) {
      state.initialValue = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
