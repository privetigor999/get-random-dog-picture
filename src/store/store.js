import { configureStore } from "@reduxjs/toolkit";
import dogsSlice from "../features/dogsSlice";
export const store = configureStore({
  reducer: {
    dogs: dogsSlice,
  },
});
