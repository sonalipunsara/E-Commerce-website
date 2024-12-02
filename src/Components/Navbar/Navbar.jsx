import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
