import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="blog-home">
      <div>
        <img
          className="blog-home-img"
          src="https://st3.depositphotos.com/1006009/13234/i/450/depositphotos_132348890-stock-photo-blogging-concept-on-a-napkin.jpg"
          alt="blog-home-img"
        />
      </div>
      <div className="home-content">
        <h1>What You’ll Find on <b>BLOGGER</b></h1>
        <ul className="home-content-list">
          <li>Thoughtful Articles</li>
          <li>Personal Stories & Experiences</li>
          <li>Practical Tips & Advice</li>
          <li>Trending Topics</li>
          <li>Guest Posts & Collaborations</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
