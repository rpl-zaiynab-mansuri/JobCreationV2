
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

const Header: React.FC = () => {
  return (
    <header className="flex overflow-hidden z-10 gap-5 justify-between items-center px-6 w-full text-sm  text-white bg-black shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:px-5 max-md:max-w-full">
     <div className="flex items-center gap-5"><Logo />
      <Navigation /></div> 
      <UserProfile />
    </header>
  );
};

export default Header;
