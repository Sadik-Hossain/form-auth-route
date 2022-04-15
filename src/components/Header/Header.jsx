import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "salmon",
      }}
    >
      <h1 style={{color:"white"}}>this is header</h1>
      <div>

        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/vip">
          VIP
        </Link>
        <Link className="link" to="/register">
          Register
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
