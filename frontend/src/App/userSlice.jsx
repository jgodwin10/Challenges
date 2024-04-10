import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "",
  edit: false,
};



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token += action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    Logout: (state, action) => {
      state.token = ''
      localStorage.removeItem('token')
    },
    changeEdit: (state, action) => {
      state.edit = action.payload
    },
  },
});

export const { setCredentials, changeEdit, Logout } = userSlice.actions;
export default userSlice.reducer;
