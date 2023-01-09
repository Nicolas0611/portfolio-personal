import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "UI",
  initialState: {
    status: "done", //not-authenticated - authenticated
    isOpen: false,
    projects: [],
    pageLimit: 4,
    filteredType: "All",
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
    pageLimitContent: (state) => {
      state.pageLimit = state.pageLimit + 4;
      state.status = "checking";
    },
    filterContent: (state, action) => {
      //Filtrar desde el front
      state.filteredType = action.payload;

      //Modificando el objeto actual
      /*     state.projects = state.projects.filter((project) =>
        project.tech.includes(action.payload)
      ); */
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openModal,
  getIndexContent,
  checkData,
  pageLimitContent,
  filterContent,
} = uiSlice.actions;
