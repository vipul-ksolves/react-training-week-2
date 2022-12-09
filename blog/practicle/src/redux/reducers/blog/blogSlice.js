import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  allBlogs: [
    {
      id: 1,
      title: "Why clean design creates better experiences",
      image: "https://focus-theme.netlify.app/assets/img/pencils.jpg",
      body: "This is a sample intro paragraph and can be used to introduce readers to your article. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      publishedAt: "2022-04-12T00:38:51.947Z",
      category: "travel",
      isSponsored: true,
    },
    {
      id: 2,
      title: "How to make origami for beginners",
      image: "https://focus-theme.netlify.app/assets/img/origami.jpg",
      body: "This is a sample intro paragraph and can be used to introduce readers to your article. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      publishedAt: "2022-05-03T00:38:51.947Z",
      category: "game",
      isSponsored: false,
    },
    {
      id: 3,
      title: "How to take better photos with your Canon DSLR",
      image: "https://focus-theme.netlify.app/assets/img/camera.jpg",
      body: "This is a sample intro paragraph and can be used to introduce readers to your article. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      publishedAt: "2022-07-22T00:38:51.947Z",
      category: "history",
      isSponsored: true,
    },
    {
      id: 4,
      title: "The world's 11 greatest modern buildings",
      image: "https://focus-theme.netlify.app/assets/img/building.jpg",
      body: "This is a sample intro paragraph and can be used to introduce readers to your article. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      publishedAt: "2022-04-12T00:38:51.947Z",
      category: "travel",
      isSponsored: true,
    },
  ],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: initialStateValue,
  reducers: {
    getBlog: (state) => {
      state.allBlogs = initialStateValue.allBlogs;
    },
    deleteBlog: (state, action) => {
      state.allBlogs = action.payload;
    },
    // addBlog: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { getBlog } = blogSlice.actions;

export default blogSlice.reducer;
