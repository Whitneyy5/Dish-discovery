import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import quick from "../assets/quick.jpeg";
import salad from "../assets/salad.jpeg";
import health from "../assets/healthy.jpeg";
import breakfast from "../assets/breakfast.jpeg";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="pt-8">
        <div className="flex flex-wrap items-center gap-4 pt-6 w-[100%]">
           <img src={quick} alt="" />
           <img src={salad} alt="" />
           <img src={health} alt="" />
           <img src={breakfast} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
