import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "UI",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state /* action */) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal } = uiSlice.actions;
