import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import TopNavBar from "../components/TopNavBar";

const Home = () => {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
