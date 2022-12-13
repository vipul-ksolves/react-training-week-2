import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStateValue = {
  allBlogs: [],

  loading: false,

  error: null,

  blogDetails: {
    title: "",
    image: "",
    body: "",
    publishedAt: "",
    category: "",
    isSponsored: "",
  },

  filteredBlog: {
    title: "",
    image: "",
    body: "",
    publishedAt: "",
    category: "",
    isSponsored: "",
  },
};

//getBlog
// let getID = 0;
// export const getBlog = createAsyncThunk("blog/getBlog", async (id) => {
//   getID = id;
//   const res = await fetch(`http://localhost:3333/allBlogs/${id}`).then((data) =>
//     data.json()
//   );
//   return res;
// });

//allBlogs
export const getAllBlog = createAsyncThunk("blog/getBlog", async () => {
  const res = await fetch("http://localhost:3333/allBlogs").then((data) =>
    data.json()
  );
  return res;
});

//delete
let deleteItem = 0;
export const deleteBlog = createAsyncThunk("blog/deleteBlog", async (id) => {
  deleteItem = id;
  const res = await fetch(`http://localhost:3333/allBlogs/${id}`, {
    method: "DELETE",
  }).then((data) => data.json());
  return res;
});

// createBlog
export const createBlog = createAsyncThunk("blog/createBlog", async (data) => {
  console.log(data);
  const res = await fetch("http://localhost:3333/allBlogs", {
    method: "POST",
    header: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
  return res;
});

const blogSlice = createSlice({
  name: "blog",
  initialState: initialStateValue,
  reducers: {
    // getBlog: (state, action) => {
    //   console.log(action.payload);
    //   console.log(state.allBlogs);
    //   state.blogDetails = state.allBlogs.find((el) => el.id == action.payload);
    // },
    filterBlog: (state, action) => {
      console.log(action.payload);
      state.filteredBlog = state.allBlogs.filter(
        (card) => card.category == `${action.payload}`
      );
    },

    // createBlog: (state, action) => {
    //   console.log(action.payload);
    //   // state.allBlogs = [...state.allBlogs, action.payload];
    // },
  },
  extraReducers: {
    [getAllBlog.pending]: (state) => {
      state.loading = true;
    },
    [getAllBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.allBlogs = action.payload;
    },
    [getAllBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // edit/update
    // [getBlog.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getBlog.fulfilled]: (state) => {
    //   state.loading = false;
    //   state.allBlogs = state.allBlogs.filter((card) => card.id === getID);
    // },
    // [getBlog.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },

    // delate
    [deleteBlog.pending]: (state) => {
      state.loading = true;
    },
    [deleteBlog.fulfilled]: (state) => {
      state.loading = false;
      state.allBlogs = state.allBlogs.filter((card) => card.id !== deleteItem);
    },
    [deleteBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // create
    // [createBlog.pending]: (state) => {
    //   state.loading = true;
    // },
    // [createBlog.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   // state.allBlogs = state.allBlogs.filter((card) => card.id !== idItem);
    //   console.log(action.payload);
    // },
    // [createBlog.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },

  //   },
});

// Action creators are generated for each case reducer function
export const { filterBlog } = blogSlice.actions;

export default blogSlice.reducer;
