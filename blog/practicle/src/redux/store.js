import { configureStore } from "@reduxjs/toolkit";

//reducers
import blogSlice from "../redux/features/blogSlice";

export const store = configureStore({
  reducer: { blog: blogSlice },
});
