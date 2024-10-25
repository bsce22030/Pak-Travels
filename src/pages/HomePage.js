import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Packages from "../components/Packages";
import MorePackages from "../components/MorePackages";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Packages />
      <WhyChooseUs />
      <MorePackages />
      <Footer />
    </div>
  );
};

export default HomePage;
