import React, { useState } from "react";
import "./blog.css";
import { addBlog } from "../../store/blogSlice";
import { useDispatch } from "react-redux";

const BlogInput = ({ setIsInputActive }) => {
  const [addBlogInput, setAddBlogInput] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (addBlog) {
      dispatch(addBlog(addBlogInput));
    } else {
      alert("Please fill all the fields");
    }
    setIsInputActive(false);
  };
  return (
    <div className="blog-input">
      <h1>Add a Blog</h1>
      <input
        type="text"
        placeholder="Enter Blog Heading"
        onChange={(e) => {
          setAddBlogInput((pre) => {
            return { ...pre, heading: e.target.value };
          });
        }}
      />
      <input
        type="text"
        placeholder="Enter Blog Introduction"
        onChange={(e) => {
          setAddBlogInput((pre) => {
            return { ...pre, introduction: e.target.value };
          });
        }}
      />
      <input
        type="text"
        placeholder="Provide Img URL for the blog"
        onChange={(e) => {
          setAddBlogInput((pre) => {
            return { ...pre, imgURL: e.target.value };
          });
        }}
      />
      <textarea
        placeholder="Enter Blog Content"
        onChange={(e) => {
          setAddBlogInput((pre) => {
            return { ...pre, content: e.target.value };
          });
        }}
      />
      <input
        type="text"
        placeholder="Enter Blog Conclusion"
        onChange={(e) => {
          setAddBlogInput((pre) => {
            return { ...pre, conclusion: e.target.value };
          });
        }}
      />
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => {
          setAddBlogInput((pre) => {
            return { ...pre, author: e.target.value };
          });
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button>Cancel</button>
    </div>
  );
};

export default BlogInput;
