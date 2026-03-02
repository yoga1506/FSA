import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
  submitted: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    submitForm(state) {
      state.submitted = true;
    },
    resetForm(state) {
      state.name = "";
      state.email = "";
      state.message = "";
      state.submitted = false;
    },
  },
});

export const { updateField, submitForm, resetForm } = contactSlice.actions;
export const selectContact = (state) => state.contact;
export default contactSlice.reducer;
