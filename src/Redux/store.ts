import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "src/Features/SwitchSlider";

export const store = configureStore({
  reducer: {
    slide: slideReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
