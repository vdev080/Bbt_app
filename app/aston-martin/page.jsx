import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/AstonMartin/BannerSection/BannerSection";
import CarList from "../Components/AstonMartin/CarList/CarList";
import CarModels from '../Components/AstonMartin/CarModels/CarModels';
import StoreHouses from '../Components/AstonMartin/StoreHouses/StoreHouses';
import FaqSection from '../Components/AstonMartin/FaqSection/FaqSection';
import AboutSection from '../Components/AstonMartin/AboutSection/AboutSection';
import MostSearched from '../Components/AstonMartin/MostSearched/MostSearched';

const AstonMartin = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <BannerSection />
      <CarList />
      <CarModels />
      <StoreHouses />
      <AboutSection />
      <FaqSection />
      <MostSearched />
      
      <Footer />
    </main>
  );
};

export default AstonMartin;
