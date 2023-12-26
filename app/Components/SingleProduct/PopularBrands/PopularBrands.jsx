"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PopularBrans.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const brands = [
  { title: "BMW", logo: "/images/detail-page/brand-icon-bmw.webp", url: "#" },
  { title: "AUDI", logo: "/images/detail-page/brand-icon-audi.webp", url: "#" },
  {
    title: "MERCEDES",
    logo: "/images/detail-page/brand-icon-mercedes.webp",
    url: "#",
  },
  {
    title: "JAGUAR",
    logo: "/images/detail-page/brand-icon-jaguar.webp",
    url: "#",
  },
  {
    title: "LAND ROVER",
    logo: "/images/detail-page/brand-icon-land-rover.webp",
    url: "#",
  },
  {
    title: "BENTLEY",
    logo: "/images/detail-page/brand-icon-bentley.webp",
    url: "#",
  },
  {
    title: "PORSCHE",
    logo: "/images/detail-page/brand-icon-porsche.webp",
    url: "#",
  },
  {
    title: "LAMBORGHINI",
    logo: "/images/detail-page/brand-icon-lambo.webp",
    url: "#",
  },
  {
    title: "JEEP",
    logo: "/images/detail-page/brand-icon-jeep.webp",
    url: "#",
  },
  {
    title: "FERRARI",
    logo: "/images/detail-page/brand-icon-ferrari.webp",
    url: "#",
  },
  {
    title: "ROLLS ROYCE",
    logo: "/images/detail-page/brand-icon-rolls-royace.webp",
    url: "#",
  },
  {
    title: "Honda",
    logo: "/images/detail-page/brand-icon-honda.webp",
    url: "#",
  },
  {
    title: "SKODA",
    logo: "/images/detail-page/brand-icon-skoda.webp",
    url: "#",
  },
  {
    title: "TOYOTA",
    logo: "/images/detail-page/brand-icon-toyota.webp",
    url: "#",
  },
  {
    title: "VOLVO",
    logo: "/images/detail-page/brand-icon-volvo.webp",
    url: "#",
  },
  {
    title: "HYUNDAI",
    logo: "/images/detail-page/brand-icon-hyundai.webp",
    url: "#",
  },
];

const PopularBrands = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="pt-24 bg-white lg:pt-40 2xl:pt-52 3xl:pt-60">
      <div className="container">
        <div
          className="relative lg:flex lg:justify-between"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h2 className="titleWithLine flex-grow xl:tracking-tighter">
            <span className="lg:bg-white lg:pr-10 relative z-10">
              Popular Brands
            </span>
          </h2>
          <div className="hidden lg:inline-block w-max bg-white pl-10">
            <a href="#" className="btn btnBlack roundedBtn">
              View All Brands
            </a>
          </div>
        </div>
        <ul
          className={`${styles.brandsList} flex flex-wrap mt-5 pb-20 border-b border-stone-300 lg:mt-20 lg:border-none lg:pb-0 3xl:mt-32`}
        >
          {brands.map((brand, index) => (
            <li
              key={index}
              title={brand.title}
              className="w-1/4 h-24 my-8 lg:w-1/6 lg:h-36 xl:w-1/8 1xl:h-40 1xl:my-10 2xl:h-40 3xl:h-60"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Link
                href={brand.url}
                className="flex px-5 py-3 items-center justify-between w-full h-full lg:px-12 lg:py-10 xl:px-12 xl:py-8"
              >
                <Image
                  src={brand.logo}
                  width="100"
                  height="100"
                  alt={brand.title}
                  className="object-contain block w-full max-h-16 xl:max-h-18 1xl:max-h-20 1xl:max-w-7r 1xl:mx-auto 2xl:max-w-8r 2xl:max-h-24 3xl:max-h-32 hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularBrands;
