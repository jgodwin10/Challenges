import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "",
  user: '',
};



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token += action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    setUser: (state, action) => {
      state.token += action.payload
    }
  },
});

export const { setCredentials } = userSlice.actions;
export default userSlice.reducer;
