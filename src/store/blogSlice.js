import { createSlice, nanoid } from "@reduxjs/toolkit";
import {blogs} from "./data.js";

const loadBlogsFromLocalStorage = () => {
    const savedBlogs = localStorage.getItem('blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : blogs;
};

const initialState = {
    blogs: loadBlogsFromLocalStorage()
};

const saveBlogsToLocalStorage = (blogs) => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
};

const blogSlice = createSlice({
    name : "blog",
    initialState,
    reducers : {
        addBlog : (state, action)=>{
            state.blogs.push({...action.payload, id: nanoid()});
            saveBlogsToLocalStorage(state.blogs);
        },
        deleteBlog : (state, action)=>{
            state.blogs = state.blogs.filter(blog=>blog.id!==action.payload);
            saveBlogsToLocalStorage(state.blogs);
        },
    }
});
export default blogSlice.reducer;
export const {addBlog, deleteBlog} = blogSlice.actions;