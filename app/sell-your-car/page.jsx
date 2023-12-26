import React from "react";
import Header from "../Components/Header/Header";
import HowToSell from "../Components/SellCar/HowToSell/HowToSell";
import SellList from "../Components/SellCar/HowToSellList/SellList";
import FeaturedSection from "../Components/Homepage/FeaturedSection/FeaturedSection";
import Footer from "../Components/Footer/Footer";

const SellCar = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <HowToSell />
      <SellList />
      

      <FeaturedSection />
      <Footer />
    </main>
  );
};

export default SellCar;
