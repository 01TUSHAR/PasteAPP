import React from "react";
import { Clipboard } from "react-feather";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" w-full h-[50px] flex flex-row items-center justify-between bg-linear-to-t from-sky-500 to-indigo-500 px-10 py-2 font-bold text-xl">
      <div className="flex flex-row items-center">
        <Clipboard />
        <p>Pastes</p>
      </div>
     <div className="flex flex-row items-center space-x-5"> <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/paste"> Pastes </NavLink>
      <NavLink to="/about"> About </NavLink></div>
    </div>
  );
};

export default Navbar;
