import React, { useState } from "react";
import dish from "../assets/dish.png";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [hideSloganBox, setHideSloganBox] = useState(true);
  return (
    <div>
      {/* header section */}

      {hideSloganBox && (
        <div className="font-consulsans relative bg-[#663056] font-medium text-[#f8f8ff] flex p-2 justify-center">
          <h3 className="text-center justify-center ">
            <span> YOUR CULINARY COMPASS : DISH DISCOVERY</span>
          </h3>
          <div className="flex items-center gap-[1rem] absolute right-5">
            <div>
              <Link to={"login"} href="" className="ml-[1rem]">
                LOGIN/
              </Link>

              <Link to={"signup"} href="" className="">
                SIGNUP
              </Link>
            </div>
            <IoMdClose
              onClick={() => setHideSloganBox(false)}
              fontSize={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
      {/* end of header section */}

      {/* nav bar section */}

      <div className="sectiona h-[40px] z-40 w-full bg-white pt-3 top-0 flex items-center text-[#001712] px-[7vw] py-2 justify-between">
        <img src={dish} className="w-[5vw] h-[7vh]" alt="" />
        <div className="flex gap-6">
          <Link to={"/"} href="" className="hover:underline">
            HOME
          </Link>
          <Link to={"about"} href="" className="hover:underline">
            ABOUT
          </Link>
          <Link to={"recipes"} href="" className="hover:underline">
            RECIPES
          </Link>
          <Link to={"shop"} href="" className="hover:underline">
            SHOP
          </Link>
        </div>
      </div>
      {/* end of nav bar section */}
    </div>
  );
};

export default Header;
