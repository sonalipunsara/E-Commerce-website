import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import New from "../Components/New/New";

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <New />
    </div>
  );
};

export default Home;
