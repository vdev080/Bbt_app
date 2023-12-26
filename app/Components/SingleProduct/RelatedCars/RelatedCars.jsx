"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RelatedCarsCard from "./RelatedCarsCard";
import AOS from "aos";
import "aos/dist/aos.css";

const RelatedCars = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 989,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-24 bg-inclusionBG lg:py-36 xl:py-44 2xl:py-52 3xl:py-60">
      <div className="container">
        <div
          className="flex justify-between items-center mb-10 2xl:mb-16 3xl:mb-36"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <span className="h-px w-auto grow bg-black lg:hidden"></span>
          <h2 className=" pl-8 lg:pl-0 titleWithLine lg:w-full 2xl:tracking-tighter">
            <span className="lg:bg-inclusionBG lg:pr-5 relative z-10 2xl:pr-16">
              Related Cars
            </span>
          </h2>
        </div>
      </div>

      <div
        className="pl-8 lg:px-36 lg:mt-24 xl:px-40 1xl:px-48 3xl:px-60"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <Slider {...settings} className="hp-services-slider">
          <RelatedCarsCard />
          <RelatedCarsCard />
          <RelatedCarsCard />
        </Slider>
      </div>
    </section>
  );
};

export default RelatedCars;
