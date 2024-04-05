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
      <section className="pt-8 px-10">
        <div className="flex gap-4 h-[25rem] w-[20rem]">
          <img src={QUICK} alt="" />
          <img src={SALADS} alt="" />
          <img src={HEALTHY} alt="" />
          <img src={BREAKFAST} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
