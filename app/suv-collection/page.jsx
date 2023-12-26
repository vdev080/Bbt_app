import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/SuvCollection/BannerSection/BannerSection";
import CarList from "../Components/SuvCollection/CarList/CarList";
import AboutSection from '../Components/SuvCollection/AboutSection/AboutSection';

const SuvCollection = () => {
  return (
    <main>
      <Header isPageHeader={true} />
      <BannerSection />
      <CarList />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default SuvCollection;
