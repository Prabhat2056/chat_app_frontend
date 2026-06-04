// the main tassk of slice is to initialize variable and create reducer function to update the variable

import { createSlice } from "@reduxjs/toolkit";

/* const initialStateValue = {
 loader: false,
} */

export const userSlice = createSlice({
    name: "user",
    initialState: {user: null},
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
          },
    },
});

 export const {setUser} = userSlice.actions;

export default userSlice.reducer;