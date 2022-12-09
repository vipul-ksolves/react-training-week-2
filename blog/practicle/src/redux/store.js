import { configureStore } from "@reduxjs/toolkit";

//reducers
import blogSlice from "../redux/reducers/blog/blogSlice";

export const store = configureStore({
  reducer: { blog: blogSlice },
});
