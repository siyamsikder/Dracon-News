import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const today = new Date();
  const formattedDate = format(today, "EEEE, MMMM d, yyyy");
  return (
    <div className="flex flex-col justify-center items-center gap-3 pt-2">
      <img src={logo} className="w-[400px]" alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default Header;
