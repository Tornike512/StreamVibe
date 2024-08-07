import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "src/Redux/store";

interface slideState {
  slide: number;
}

const initialState: slideState = {
  slide: 0,
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    slideLeft: (state) => {
      state.slide -= 1904;
      if (state.slide < -5712) {
        state.slide = 0;
      }
    },
    slideRight: (state) => {
      state.slide += 1904;
      if (state.slide > 0) {
        state.slide = -5712;
      }
    },
  },
});

export const { slideLeft, slideRight } = slideSlice.actions;

export const selectLeftSlide = (state: RootState) => state.slide.slide;

export default slideSlice.reducer;
