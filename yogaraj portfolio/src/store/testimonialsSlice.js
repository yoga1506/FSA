import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Product Manager",
    feedback:
      "Working with Yogaraj was a pleasure. He delivered clean, responsive code on time.",
  },
  {
    id: 2,
    name: "Mark Davis",
    designation: "CEO of TechCorp",
    feedback:
      "Yogaraj brings creativity and precision to every project. Highly recommended.",
  },
  {
    id: 3,
    name: "Sophia Lee",
    designation: "CTO of InnovateX",
    feedback:
      "His attention to detail and communication makes collaboration effortless.",
  },
];

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export const selectTestimonials = (state) => state.testimonials;
export default testimonialsSlice.reducer;
