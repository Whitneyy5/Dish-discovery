import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/faceb.png";
import insta from "../assets/insta.png";
import linked from "../assets/linked.png";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-start font-serif pt-[10rem] text-[#636363] bg-white list-none w-full py-12 gap-3 ">
        <div className="ml-[5%]">
          <h1>Dish Discovery</h1>
          <li>About</li>
          <li>Blog</li>
          <li>Recipe Index</li>
        </div>
        <div className="ml-[10%]">
          <h1>Food and Recipe</h1>
          <li>Sugar Free Month</li>
          <li>Freezer Meals 101</li>
          <li>Quick and Easy Recipe</li>
          <li>Instant pot Recipe</li>
          <li>Pasta Recipe</li>
          <li>Vegan Recipe</li>
          <li>Soup Recipe</li>
          <li>Taco Recipe</li>
          <li>Meal Prep Recipe</li>
        </div>
        <div className=" ml-[10%] bg-[#663056] gap-4 h-36 w-[45%] text-white">
          <h2 className="flex justify-center font-semibold">
            Signup for Email Updates
          </h2>
          <h3 className=" flex justify-center">
            Get a free ECookbook with our top 25 recipes
          </h3>
          <div className="flex justify-center items-baseline">
            <form className="flex justify-center items-center pt-5 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex border border-[#9DA39F]  h-10 px-2 py-3 items-center "
                />
              </div>
              <div className="bg-white w-full outline-none focus:border-black ">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="flex border border-[#9DA39F] h-10 px-2 py-3 items-start "
                />
              </div>
              <div>
                <h3 className="border-0 bg-[#edb654] h-10 w-10 flex justify-center items-center ">
                  GO
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex gap-4 ml-[10%]">
        <a
          href="https://twitter.com/login"
          className=" rounded-full bg-[#663056]"
        >
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.instagram.com/accounts/login/?hl=en">
          <img src={insta} alt="" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="" />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <img src={linked} alt="" />
        </a>
      </div>
      <div className="flex justify-start ml-[10%] pt-8">
        <p>Dish Discovery</p>
        <div>
          <div className="ml-4">
            <h1>© 2024 Dish discovery. All Rights Reserved</h1>
            <h2>Your Culinary Compass</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
