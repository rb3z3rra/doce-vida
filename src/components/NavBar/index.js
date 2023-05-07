import React from "react";
import NavMenu from "../NavMenu";
import logo from "../../assets/snake.png";

const NavBar = () => {
  return (
    <header className="h-16 border border-amber-600 flex justify-between px-3 ">
      <div>
        <img src={logo} alt="Logo" className="w-16 cursor-pointer h-auto" />
      </div>
      <div>
        <NavMenu />
      </div>
    </header>
  );
};

export default NavBar;
