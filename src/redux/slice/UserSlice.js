import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.roles = action.payload.roles;
      state.access_token = action.payload.access_token;
    },
    logout: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.roles = [];
      state.access_token = "";
    },
  },
});

export const {
  setUser,
  logout
} = userSlice.actions;

export default userSlice.reducer;
