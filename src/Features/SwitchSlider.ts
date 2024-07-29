import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "src/Redux/store";

interface slideState {
  leftSlide: number;
  rightSlide: number;
}

const initialState: slideState = {
  leftSlide: 0,
  rightSlide: 5,
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    slideLeft: (state) => {
      state.leftSlide -= 5;
    },
    slideRight: (state) => {
      state.rightSlide += 5;
    },
  },
});

export const { slideLeft, slideRight } = slideSlice.actions;

export const selectLeftSlide = (state: RootState) => state.slide.leftSlide;
export const selectRightSlide = (state: RootState) => state.slide.rightSlide;

export default slideSlice.reducer;
