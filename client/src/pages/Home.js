import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QUICK from "../assets/quick and easy.jpg";
import SALADS from "../assets/saladss.jpg";
import HEALTHY from "../assets/healthy3.jpg";
import BREAKFAST from "../assets/breakfast.webp";
import DINNER from "../assets/dinner.jpg";
import VEGETARIAN from "../assets/vegetarian3.jpg";
import INSTANTPOT from "../assets/instant pot3.webp";
import VEGAN from "../assets/vegan4.jpg";
import MEALPREP from "../assets/vegan2.jpg";
import SOUPS from "../assets/instant pot.webp";
import RECIPES from "../assets/recipess.png";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <hr /> */}
      <section>
        <h3 className="text-center py-8 font-semibold text-[2rem] text-[#663056]">
          ~EVERYDAY RECIPES MADE FOR YOU~
        </h3>
      </section>
      {/* images section */}
      <section className="bg-[#F7F7F7]">
        <div className="py-8 overflow-hidden max-w-[69rem] mx-auto ">
          {/* 4 images start */}
          <div className=" gap-4 w-full grid grid-cols-4">
            <div className="relative grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img src={QUICK} className="h-[25rem] object-cover " alt="" />
              <h3 className=" absolute -bottom-3.5 border-0 bg-[#edb654] text-white py-2 w-fit px-6 text-[0.7rem] tracking-[0.15em] font-semibold">
                QUICK AND EASY
              </h3>
            </div>

            <div className="relative grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img src={SALADS} className="h-[25rem] object-cover " alt="" />
              <h3 className=" absolute -bottom-3.5 border-0 bg-[#edb654] text-white py-2 w-fit px-6 text-[0.7rem] tracking-[0.15em] font-semibold">
                SALADS
              </h3>
            </div>

            <div className="relative grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img src={HEALTHY} className="h-[25rem] object-cover " alt="" />
              <h3 className=" absolute -bottom-3.5 border-0 bg-[#edb654] text-white py-2 w-fit px-6 text-[0.7rem] tracking-[0.15em] font-semibold">
                HEALTHY
              </h3>
            </div>

            <div className="relative grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img src={BREAKFAST} className="h-[25rem] object-cover " alt="" />
              <h3 className=" absolute -bottom-3.5 border-0 bg-[#edb654] text-white py-2 w-fit px-6 text-[0.7rem] tracking-[0.15em] font-semibold">
                BREAKFAST
              </h3>
            </div>
          </div>
          {/* end of 4 images */}

          {/* circle images begin */}
          <div className="flex justify-between my-[4rem]">
            <div className="grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img
                src={QUICK}
                className="w-[6rem] h-[6rem] rounded-full object-cover"
                alt=""
              />
              <h3 className="text-[0.9rem] font-semibold my-3">
                QUICK AND EASY
              </h3>
            </div>

            <div className="grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img
                src={DINNER}
                className="w-[6rem] h-[6rem] rounded-full object-cover"
                alt=""
              />
              <h3 className="text-[0.9rem] font-semibold my-3">DINNER</h3>
            </div>

            <div className="grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img
                src={VEGETARIAN}
                className="w-[6rem] h-[6rem] rounded-full object-cover"
                alt=""
              />
              <h3 className="text-[0.9rem] font-semibold my-3">VEGETARIAN</h3>
            </div>

            <div className="grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img
                src={HEALTHY}
                className="w-[6rem] h-[6rem] rounded-full object-cover"
                alt=""
              />
              <h3 className="text-[0.9rem] font-semibold my-3">HEALTHY</h3>
            </div>

            <div className="grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img
                src={INSTANTPOT}
                className="w-[6rem] h-[6rem] rounded-full object-cover"
                alt=""
              />
              <h3 className="text-[0.9rem] font-semibold my-3">INSTANT POT</h3>
            </div>

            <div className="grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img
                src={VEGAN}
                className="w-[6rem] h-[6rem] rounded-full object-cover"
                alt=""
              />
              <h3 className="text-[0.9rem] font-semibold my-3">VEGAN</h3>
            </div>

            <div className="grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img
                src={MEALPREP}
                className="w-[6rem] h-[6rem] rounded-full object-cover"
                alt=""
              />
              <h3 className="text-[0.9rem] font-semibold my-3">MEAL PREP</h3>
            </div>

            <div className="grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img
                src={SOUPS}
                className="w-[6rem] h-[6rem] rounded-full object-cover"
                alt=""
              />
              <h3 className="text-[0.9rem] font-semibold my-3">SOUPS</h3>
            </div>

            <div className="grid place-items-center hover:opacity-60 transition-all duration-300 cursor-pointer">
              <img
                src={SALADS}
                className="w-[6rem] h-[6rem] rounded-full object-cover"
                alt=""
              />
              <h3 className="text-[0.9rem] font-semibold my-3">SALADS</h3>
            </div>
          </div>
          {/* circle images end */}

          {/* search recipes section */}
          <div className="flex max-w-[40rem] mx-auto justify-center gap-4 items-center">
            <div
              className="flex items-center bg-white border-2 p-2
            "
            >
              <IoSearch className="text-[1.5rem] text-[#663056] cursor-pointer" />
              <input
                className="p-2 w-full outline-none"
                type="text"
                placeholder="Search recipes"
              />
            </div>
            <h6> Or </h6>

            <div>
              <h3 className=" hover:bg-[#4c3244] cursor-pointer transition-all duration-300 font-semibold text-white bg-[#663056] p-4">
                VIEW ALL RECIPES
              </h3>
            </div>
          </div>

          {/* end of search recipes section */}
        </div>
      </section>
      {/* end of images section */}

      <section>
        <div className="flex justify-center bg-[#605f5f] text-start  gap-8">
          <div>
            <img src={RECIPES} className="w-[30rem] h-[20rem]" alt="" />
          </div>

          <div className="text-white max-w-[30rem] py-10">
            <h2 className="text-center text-[#edb654] text-2xl italic py-5">
              Get It Now
            </h2>
            <h2 className="tracking-wider font-bold text-2xl pb-5">
              DISH DISCOVERY COOKBOOK
            </h2>
            <h3 className="tracking-wide text-lg">
              This cookbook includes our most popular 25 recipes in a beautiful,
              easy to download format.
            </h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
