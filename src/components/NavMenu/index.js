import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
