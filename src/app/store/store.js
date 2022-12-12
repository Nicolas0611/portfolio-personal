import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./slices/ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});
