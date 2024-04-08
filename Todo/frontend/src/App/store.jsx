import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer  from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
