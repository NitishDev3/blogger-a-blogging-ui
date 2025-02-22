import React from "react";
import "./Blog.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlog } from "../../store/blogSlice";

function BlogContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.filter((blog) => blog.id == id)[0];


  return (
    <div className="blog-content-page">
      <h1>{blog?.heading}</h1>

      <button className="delete-blog-btn"
      onClick={() => {
        dispatch(deleteBlog(blog.id));
        navigate('/blogs');
      }}
      >Delete Blog</button>

      <div className="blog-content">
      <h3>Introduction</h3>
      <p>{blog?.introduction}</p>
      <h3>Content</h3>
      <p>{blog?.content}</p>
      <h3>Conclusion</h3>
      <p>{blog?.conclusion}</p>
      </div>
    </div>
  );
}

export default BlogContent;
