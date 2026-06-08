// the main tassk of slice is to initialize variable and create reducer function to update the variable

import { createSlice } from "@reduxjs/toolkit";

/* const initialStateValue = {
 loader: false,
} */

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAllUSers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { setUser, setAllUsers } = userSlice.actions;

export default userSlice.reducer;
