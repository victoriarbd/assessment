import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <div>
      <div className="titleHome">
        <h1>
          <NavLink className="textHeader" to="/">
            Home
          </NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Header;
