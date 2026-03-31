import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./features/userSlice";

// Configure Redux store with user reducer
export const store = configureStore({
    reducer: userReducer
})
