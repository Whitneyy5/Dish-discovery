import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QUICK from "../assets/quick and easy.jpg";
import SALADS from "../assets/saladss.jpg";
import HEALTHY from "../assets/healthy3.jpg";
import BREAKFAST from "../assets/breakfast.webp";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <hr /> */}
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
