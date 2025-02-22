import React from 'react';
import './blog.css';
import { useNavigate } from 'react-router-dom';

const BlogCards = ({ heading, author, id }) => {
  const navigate = useNavigate();

  return (
    <div className='blog-card' onClick={() => {navigate(`/${id}`)}}>
      <h3>{heading}</h3>
      <p>By: {author}</p>
    </div>
  );
};

export default BlogCards;