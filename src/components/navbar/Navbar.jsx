import React from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import person from "../../assets/person.svg";
import cart from "../../assets/cart.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <img src={logo} alt="logo" />
          <ul>
            <li>Home</li>
            <li>
              <select name="brands" className="brands">
                <option value="brands">Brands</option>
                <option value="categories">Categories</option>
              </select>
            </li>
            <li>Recent Products</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
          <div className="nav_icons">
            <img src={search} alt="heart" />
            <img src={person} alt="person" />
            <img src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
