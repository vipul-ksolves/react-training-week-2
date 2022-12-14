import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStateValue = {
  allBlogs: [],

  loading: false,

  error: null,

  blogDetails: [],

  filteredBlog: {
    title: "",
    image: "",
    body: "",
    publishedAt: "",
    category: "",
    isSponsored: "",
  },
};

//getSingleBlog
export const getBlog = createAsyncThunk("blog/getBlog", async (id) => {
  const res = await fetch(`http://localhost:3333/allBlogs/${id}`).then((data) =>
    data.json()
  );
  return res;
});

//allBlogs
export const getAllBlog = createAsyncThunk("blog/getAllBlog", async () => {
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
export const createBlog = createAsyncThunk("createBlog", async (data) => {
  return fetch("http://localhost:3333/allBlogs", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      image: data.image,
      body: data.body,
      publishedAt: data.publishedAt,
      category: data.category,
      isSponsored: data.isSponsored,
    }),
  }).then((data) => data.json());
});

// editBlog
export const editBlog = createAsyncThunk("editBlog", async (data) => {
  console.log(data);
  // console.log(id);
  return fetch(`http://localhost:3333/allBlogs/${data.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      image: data.image,
      body: data.body,
      publishedAt: data.publishedAt,
      category: data.category,
      isSponsored: data.isSponsored,
    }),
  }).then((data) => data.json());
});

const blogSlice = createSlice({
  name: "blog",
  initialState: initialStateValue,
  reducers: {
    filterBlog: (state, action) => {
      console.log(action.payload);
      state.filteredBlog = state.allBlogs.filter(
        (card) => card.category == `${action.payload}`
      );
    },
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

    //getSingleBlog
    [getBlog.pending]: (state) => {
      state.loading = true;
    },
    [getBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogDetails = action.payload;
    },
    [getBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

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
    [createBlog.pending]: (state) => {
      state.loading = true;
    },
    [createBlog.fulfilled]: (state, action) => {
      state.loading = false;
      // state.allBlogs = state.allBlogs.filter((card) => card.id !== idItem);
      // console.log(action.payload);
    },
    [createBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // edit
    [editBlog.pending]: (state) => {
      state.loading = true;
    },
    [editBlog.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [editBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterBlog } = blogSlice.actions;

export default blogSlice.reducer;
