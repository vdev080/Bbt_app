"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import Image from "next/image";
import Link from "next/link";
import styles from "./NewInclusion.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Dummy Data
import {cars} from '../../../../public/data/dummyData';

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Previous Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

const NewInclusion = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
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

  return (
    <section
      className={`overflow-x-hidden bg-inclusionBG pt-20 sm:pb-20 lg:py-40 xl:py-48 3xl:py-72`}
    >
      <div
        className={`px-8 sm:mb-16 md:px-28 lg:px-40 flex justify-between items-center relative lg:mb-24 xl:px-48 1xl:px-52 3xl:px-72 3xl:mb-36 ${styles.incSecHead}`}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <span className="h-px w-auto grow bg-black lg:hidden"></span>
        <h2 className="tracking-tighter pl-8 lg:pl-0">New Inclusion</h2>

        <div className="hidden lg:inline-block">
          <Link href="#" className="btn btnBlack roundedBtn">
            All Collection
          </Link>
        </div>
      </div>
      <div
        className="inclusionSlider"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <Slider {...settings}>
         {cars.map((car)=>( <SliderItem data={car} key={car._id} />))}
          
        </Slider>
      </div>
    </section>
  );
};

export default NewInclusion;
