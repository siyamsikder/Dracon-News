import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png"

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center">
        <div className=""></div>
      <div className="nav flex gap-3 text-accent">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img src={user} alt="" />
        <NavLink className="btn btn-primary px-10 text-accent">Login</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
