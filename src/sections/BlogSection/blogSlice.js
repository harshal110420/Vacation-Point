import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [], // Initial empty array to store blogs
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload); // Add a new blog to the list
    },
    updateBlog: (state, action) => {
      const { id, updatedData } = action.payload;
      const blogToUpdate = state.blogs.find((blog) => blog.id === id);
      if (blogToUpdate) {
        Object.assign(blogToUpdate, updatedData); // Update the specified blog
      }
    },
    deleteBlog: (state, action) => {
      const idToDelete = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== idToDelete); // Remove the specified blog
    },
  },
});

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export const selectAllBlogs = (state) => state.blogs.blogs;

export default blogSlice.reducer;
