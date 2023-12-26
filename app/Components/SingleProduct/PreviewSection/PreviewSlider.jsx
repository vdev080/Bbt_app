"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderData = [
  { tag: "Vehicle History", title: "Service Recalls (OASIS) performed" },
  {
    tag: "Road Test",
    title:
      "Auto/Manual Transmission/ Transaxle Noise Operation- Cold and Hot Shift Quality",
  },
  { tag: "Vehicle History", title: "Service Recalls (OASIS) performed" },
  {
    tag: "Road Test",
    title:
      "Auto/Manual Transmission/ Transaxle Noise Operation- Cold and Hot Shift Quality",
  },
  { tag: "Vehicle History", title: "Service Recalls (OASIS) performed" },
  {
    tag: "Road Test",
    title:
      "Auto/Manual Transmission/ Transaxle Noise Operation- Cold and Hot Shift Quality",
  }
];

const PreviewSliderItem = ({ data, index }) => {
  return (
    <div className="mr-8">
      <div
        className="text-white relative pt-8 pb-16 px-8 overflow-hidden rounded-2xl min-h-20 sm:min-h-24 lg:min-h-20 1xl:min-h-24 3xl:min-h-33"
        style={{ backgroundColor: "#131313" }}
      >
        <p className="w-max border border-white rounded-2xl text-sm py-1 px-5 text-right ml-auto sm:text-lg lg:text-sm 2xl:text-lg 2xl:leading-5 2xl:rounded-3xl 3xl:text-1xl 3xl:leading-7">
          {data.tag}
        </p>
        <h6 className="text-lg mt-8 font-normal sm:text-2xl lg:text-lg 1xl:text-xl 1xl:leading-relaxed 2xl:mt-16 2xl:leading-1.7 3xl:text-3xl 3xl:leading-1.6">{data.title}</h6>
        <span className="absolute text-neutral-700 text-8xl -right-2 -bottom-6 font-medium sm:text-9xl lg:text-8xl 2xl:text-9xl 2xl:-right-4 2xl:-bottom-9 3xl:text-11xl 3xl:-bottom-11" >
          {index > 9 ? "" : "0"}{index + 1}
        </span>
      </div>
    </div>
  );
};

const PreviewSlider = () => {
  const [progressWidth, setProgressWidth] = useState(16.7);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / 6) * (index + 1));
    },
  };
  return (
    <>
      <div className="pl-5 sm:pl-12 md:pl-16 lg:pl-0">
        <Slider {...settings} className="hp-services-slider">
          {sliderData.map((data, index) => (
            <PreviewSliderItem key={index} data={data} index={index} />
          ))}
        </Slider>
      </div>
      <div className="px-8 sm:px-16 lg:w-full lg:pl-10 xl:pl-0 xl:pr-40">
        <div
          className="progress mt-16 3xl:mt-32 2xl:mt-24"
          style={{
            backgroundColor: "rgb(251 251 251 / 10%)",
            height: "1px",
          }}
        >
          <div
            style={{
              width: `${progressWidth}%`,
              backgroundColor: "rgba(255, 255, 255, 1)",
              height: "100%",
            }}
            className="progressFill"
          ></div>
        </div>
      </div>
    </>
  );
};

export default PreviewSlider;
