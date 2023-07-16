import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  name: string;
  email: string;
  accessToken: string;
}

const initialState: AuthState = {
  name: "",
  email: "",
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveAuth: (state, action: PayloadAction<AuthState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
    },
    deleteAuth: (state) => {
      state.name = initialState.name;
      state.email = initialState.email;
      state.accessToken = initialState.accessToken;
    },
  },
});

export const { saveAuth, deleteAuth } = authSlice.actions;

export default authSlice.reducer;
