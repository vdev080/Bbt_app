'use client';
import React from "react";
import Header from "../../Components/Header/Header";
import BannerSection from "../../Components/SingleProduct/BannerSection/BannerSection";
import SpecificationSection from "../../Components/SingleProduct/SpecificationSection/SpecificationSection";
import RelatedCars from "../../Components/SingleProduct/RelatedCars/RelatedCars";
import CompareSection from "../../Components/SingleProduct/CompareSection/CompareSection";
import PopularBrands from "../../Components/SingleProduct/PopularBrands/PopularBrands";
import ShopByCategory from "../../Components/SingleProduct/ShopByCategory/ShopByCategory";
import AboutUs from '../../Components/SingleProduct/AboutUs/AboutUs';
import FinanceSection from '../../Components/SingleProduct/FinanceSection/FinanceSection';
import PreviewSection from '../../Components/SingleProduct/PreviewSection/PreviewSection';
import Footer from "../../Components/Footer/Footer";

const SingleProductPage = () => {
  return (
    <main>
      <Header isPageHeader={true}/>
      <BannerSection />
      <SpecificationSection />
      <PreviewSection />
      <RelatedCars />
   
      <FinanceSection />
      <CompareSection />
      <PopularBrands />
      <ShopByCategory/>
      <AboutUs />
      <Footer />

    </main>
  );
};

export default SingleProductPage;
