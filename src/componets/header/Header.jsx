import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="head-container">
      <div>
        <NavLink to={"/"}>
          <img
            className="app-logo"
            src="https://logos-world.net/wp-content/uploads/2021/08/Blogger-Logo-2016-present.jpg"
            alt="app-logo"
          />
        </NavLink>
      </div>
      <div className="menu-container">
        <ul className="menu-list">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-item" : "menu-item"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-item" : "menu-item"
              }
              to={"/blogs"}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-item" : "menu-item"
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <img
          className="user-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDv19xNxzcYbXdTiCZqMbPLXXpD-9aeCvQOg&s"
          alt="user-logo"
        />
      </div>
    </div>
  );
};

export default Header;
