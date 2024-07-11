import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //initialise the state
  user: null,
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      //checks to see id the username and password match from registering
      const registeredUser = state.users.find(
        (u) =>
          u.username === action.payload.username &&
          u.password === action.payload.password
      );
      //if not found throw error
      if (registeredUser) {
        state.user = registeredUser;
      } else {
        throw new Error("Invalid username or password");
      }
    },
    //clear state when logout
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
