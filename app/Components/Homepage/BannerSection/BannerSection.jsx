"use client";
import React, { useState, useEffect } from "react";
import styles from "./BannerSection.module.css";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import FilterPopup from "../../FilterPopup/FilterPopup";

const BannerSection = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black">
      <div className={`relative`}>
        <div className={`${styles.hpBannerImage}`}>
          <Image
            src="/images/hp-banner-desk.webp"
            alt="Banner Image"
            width="1920"
            height="1100"
            className="hidden md:block"
          />
          <Image
            src="/images/hp-banner-mob.webp"
            alt="Banner Image"
            width="390"
            height="685"
            className="block w-full md:hidden"
          />
        </div>
        <div
          className={`${styles.bannerContent} absolute top-0 left-0 text-center w-full h-full`}
        >
          <div className="container h-full">
            <div
              className="flex flex-col justify-between h-full"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="lg:pt-5 xl:pt-9 1xl:pt-11 2xl:pt-14 3xl:pt-28">
                <p className="banner-sub-title text-white font-light text-base mb-6 hidden lg:block xl:text-lg 2xl:text-xl 3xl:text-2xl 3xl:mb-8">
                  We are the best when it comes to Exotic Cars.
                </p>
                <h1 className="banner-title text-white font-normal leading-tight">
                  Super Cars{" "}
                  <span className="font-thin block lg:inline-block">
                    For Super Stars
                  </span>
                </h1>
                <p className="text-white lg:hidden mt-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos quam itaque eos!
                </p>
                <div className="banner-filter-desktop lg:flex flex-wrap items-center hidden justify-center mt-12 1xl:mt-14 3xl:mt-20">
                  <div
                    className={`${styles.bannerSearchBox} relative flex items-center`}
                  >
                    <span className={`absolute left-8 ${styles.searchIcon}`}>
                      <Image
                        src="/images/banner-search-icon-white.webp"
                        width="17"
                        height="17"
                        alt="Search Icon"
                      />
                    </span>
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search Your Dream Car Here... "
                    />
                    <div
                      className={`${styles.filterBtn} absolute right-8 z-10 cursor-pointer 3xl:right-10 p-3 rounded-50% hover:bg-gray-300 transition-all duration-500 group`}
                      onClick={togglePopup}
                    >
                      <Image
                        src="/images/banner-filter-icon-white.webp"
                        width="23"
                        height="22"
                        alt="Filter Button"
                        className="w-8 hover:scale-110 transition-all duration-500 group-hover:invert"
                      />
                    </div>
                  </div>
                  <div className={styles.bannerBtnBox}>
                    <Link
                      href="#"
                      className="bg-white text-black relative text-xl flex items-center font-medium 3xl:text-2xl"
                    >
                      Discover Collection
                      <span className="bg-black absolute flex justify-center items-center">
                        <Image
                          src="/images/banner-arrow-icon-white.webp"
                          alt="Arrow Icon"
                          width="20"
                          height="20"
                          className="w-full object-contain"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="#"
                className={`${styles.hpBannerBtnMob} text-white relative w-full text-left text-xl lg:hidden`}
              >
                Let’s Explore Luxury <br /> Cars Collection
                <span className="flex items-center justify-center bg-white absolute">
                  <Image
                    src="/images/banner-btn-arrow-mob.webp"
                    alt="Button Arrow"
                    width="25"
                    height="21"
                    className="object-contain"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-16 ${styles.bannerScrollBtn} text-center w-max lg:flex flex-col justify-center items-center hidden`}
        >
          <Image
            src="/images/banner-scroll-icon-white.webp"
            alt="Scroll Down"
            width="19"
            height="29"
            className="inline-block object-contain w-8 1xl:w-6"
          />
          <span className="uppercase text-white mt-5 text-xs 1xl:leading-relaxed">
            Scroll Down
          </span>
        </div>
      </div>
      {filterOpen && <FilterPopup active={filterOpen} togglePopup={togglePopup} />}
    </section>
  );
};

export default BannerSection;
