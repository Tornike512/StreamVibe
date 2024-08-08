import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "src/Redux/store";

interface slideState {
  slide: number;
}

interface SlidePayload {
  width: number | null;
}

const initialState: slideState = {
  slide: 0,
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    slideLeft: (state, action: PayloadAction<SlidePayload>) => {
      const { width } = action.payload;
      if (width !== null && width > 1536) {
        state.slide -= 1904;
        if (state.slide < -5712) {
          state.slide = 0;
        }
      } else if (width !== null && width < 1536) {
        state.slide -= 1485;
        if (state.slide < -4455) {
          state.slide = 0;
        }
      }
    },
    slideRight: (state, action: PayloadAction<SlidePayload>) => {
      const { width } = action.payload;
      if (width !== null && width > 1536) {
        state.slide += 1904;
        if (state.slide > 0) {
          state.slide = -5712;
        }
      } else if (width !== null && width < 1536) {
        state.slide += 1485;
        if (state.slide > 0) {
          state.slide = -4455;
        }
      }
    },
  },
});

export const { slideLeft, slideRight } = slideSlice.actions;

export const selectLeftSlide = (state: RootState) => state.slide.slide;

export default slideSlice.reducer;
