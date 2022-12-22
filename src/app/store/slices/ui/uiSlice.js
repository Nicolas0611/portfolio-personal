import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "UI",
  initialState: {
    status: "done", //not-authenticated - authenticated
    isOpen: false,
    projects: [],
  },
  reducers: {
    openModal: (state /* action */) => {
      state.isOpen = !state.isOpen;
    },
    getIndexContent: (state, action) => {
      state.projects = action.payload;
      state.status = "done";
    },
    checkData: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, getIndexContent, checkData } = uiSlice.actions;
