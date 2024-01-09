import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div className="header">
      <div className="container header__wrapper">
        <div className="header__logo">Fuad.com</div>
        <ul className="header__nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
        <ul className="header__btns">
          <li>Basket</li>
          <li>Wishlist</li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
