"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OtherServiceCard from "./OtherServiceCard";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/hp-service-slider-arrow.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

const OtherServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [progressWidth, setProgressWidth] = useState(25);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / 4) * (index + 1));
    },
  };

  return (
    <section className="bg-black py-24 lg:py-40 xl:py-52 3xl:py-72">
      <div className="lg:flex justify-between items-center lg:pl-40 xl:pl-48 1xl:pl-52 3xl:pl-72">
        <div
          className="container lg:w-30% lg:pr-20 xl:pr-28"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <Image
            src="/images/down-circle-arrow-white.webp"
            width="123"
            height="123"
            alt="Arrow Icon"
            className="hidden lg:inline-block mb-14 object-contain lg:w-32 xl:w-40 3xl:w-48"
          />
          <h2 className=" text-white mb-16 lg:mb-6">Other Services</h2>
          <p className="hidden lg:block text-xl text-white leading-10 3xl:text-3xl 3xl:leading-loose">
            Get your dream luxury car in 4 easy steps at <br /> Big Boy Toyz,
            India's trusted used car portal.
          </p>
        </div>

        <div
          className="w-full lg:w-70%"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="pl-5">
            <Slider {...settings} className="hp-services-slider">
              <OtherServiceCard />
              <OtherServiceCard />
              <OtherServiceCard />
            </Slider>
          </div>
          <div className="container lg:w-full lg:pl-10 lg:pr-32 3xl:pr-40">
            <div
              className="progress mt-16 3xl:mt-32"
              style={{
                backgroundColor: "rgb(251 251 251 / 10%)",
                height: "2px",
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
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
