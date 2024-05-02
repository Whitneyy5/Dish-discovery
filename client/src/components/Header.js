import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";

const Header = () => {
  const [hideSloganBox, setHideSloganBox] = useState(true);
  return (
    <div className="sticky w-full z-50 top-0">
      {/* header section */}
      <section>
        {hideSloganBox && (
          <div className="font-consulsans relative bg-[#663056] font-medium text-[#f8f8ff] flex p-2 justify-center">
            <h3 className="text-center justify-center text-sm ">
              <span> DISH DISCOVERY : YOUR CULINARY COMPASS</span>
            </h3>
            <div className="flex items-center gap-[1rem] absolute right-5">
              {/* sign up div */}
              <div className="flex gap-1">
                <div className="tracking-wide text-sm">
                  <Link to={"/signup"} href="" className="">
                    <h3>SIGN UP</h3>
                  </Link>
                </div>
                <div>
                  <IoMdArrowForward />
                </div>
              </div>
              {/* end of sign up div */}

              <IoMdClose
                onClick={() => setHideSloganBox(false)}
                fontSize={20}
                className="cursor-pointer"
              />
            </div>
          </div>
        )}
      </section>
      {/* end of header section */}

      {/* nav bar section */}
      <section>
        <div className="sectiona h-[40px] z-40 w-full bg-white top-0 flex items-center text-[#001712] px-[7vw] py-[5rem]  justify-between font-bold text-xl  ">
          <img src={logo} className="w-[20rem] object-cover" alt="" />
          <div className="flex gap-11">
            <Link
              to={"/"}
              href=""
              className="hover:underline decoration-[#663056]  decoration-2"
            >
              <h6>HOME</h6>
            </Link>
            <Link
              to={"about"}
              href=""
              className="hover:underline decoration-[#663056] decoration-2"
            >
              <h6>ABOUT</h6>
            </Link>
            <Link
              to={"recipes"}
              href=""
              className="hover:underline decoration-[#663056] decoration-2"
            >
              <h6>RECIPES</h6>
            </Link>
            <Link
              to={"shop"}
              href=""
              className="hover:underline decoration-[#663056] decoration-2"
            >
              <h6>SHOP</h6>
            </Link>
            <IoSearch className="size-7 text-[#663056] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
          </div>
        </div>
        <hr />
      </section>
      {/* end of nav bar section */}
    </div>
  );
};

export default Header;
