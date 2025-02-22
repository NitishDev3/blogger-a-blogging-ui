import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogCards from "./BlogCards";
import "./blog.css";
import BlogInput from "./BlogInput";

const Blogs = () => {
  const [isInputActive, setIsInputActive] = useState(false);

  const blogs = useSelector((state) => state.blog.blogs);

  const handleAddClick = () => {
    setIsInputActive(!isInputActive);
  }

  return blogs ? (
    <div className="blog-page">
      <div>
        <h1>Blogs</h1>
        <button className="blog-add-btn" onClick={() => handleAddClick()}>
          Add a Blog
        </button>
      </div>
      <div className="blog-container">
        {
          isInputActive ? (
            <BlogInput setIsInputActive={setIsInputActive} />
          ) : null
        }
        {blogs.map((blog) => (
          <BlogCards
            key={blog.id}
            heading={blog.heading}
            author={blog.author}
            id={blog.id}
          />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h1>No Blogs</h1>
    </div>
  );
};

export default Blogs;
