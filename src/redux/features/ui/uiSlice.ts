import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  mobileNavMenuOpen: boolean;
}

const initialState: UiState = {
  mobileNavMenuOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileNavMenu: (state) => {
      state.mobileNavMenuOpen = !state.mobileNavMenuOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMobileNavMenu } = uiSlice.actions;

export default uiSlice.reducer;
