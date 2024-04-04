import React from "react";
import dish from "../assets/dish.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="font-consulsans bg-[#663056] font-medium text-[#f8f8ff] h-[2.2rem] pt-1">
        <h3 className="text-center justify-center ">
          YOUR CULINARY COMPASS : DISH DISCOVERY
        </h3>
      </div>
      <div className="sectiona h-[40px] z-40 w-full bg-white pt-3 top-0 flex items-center text-[#001712] px-[7vw] py-2 justify-between">
        <img src={dish} className="w-[5vw] h-[7vh]" alt="" />
        <div className="flex gap-6">
          <Link to={"/"} href="" className="hover:underline">
            <a>HOME</a>
          </Link>
          <Link to={"About"} href="" className="hover:underline">
            <a>ABOUT</a>
          </Link>
          <Link to={"Recipe"} href="" className="hover:underline">
            <a>RECIPE</a>
          </Link>
          <Link to={"Shop"} href="" className="hover:underline">
            <a>SHOP</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
