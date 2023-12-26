"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black">
      <div className="relative">
        <div
          className="text-box text-white absolute z-10 px-10 w-full right-0 top-0 pt-20 text-center md:w-5/12 md:text-left md:pt-32 lg:pt-52 lg:right-10 lg:max-w-3xl xl:max-w-4xl xl:right-0 2xl:pt-56 2xl:right-16 3xl:max-w-6xl 3xl:pt-72"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <p className="uppercase text-lg mb-4 md:mb-8 lg:text-xl xl:mb-10 xl:text-2xl 2xl:mb-12 3xl:text-3xl 3xl:mb-14">
            LET'S KEEP IT SIMPLE.
          </p>
          <h2 className="font-light leading-tight tracking-tight lg:text-6xl lg:tracking-tighter lg:leading-snug xl:text-6.5xl 2xl:text-7xl 3xl:text-8xl">
            We are the best when it <br /> comes{" "}
            <span className="font-medium">to exotic cars.</span>
          </h2>
          <div className="hidden md:block mt-10 xl:mt-14 2xl:mt-20">
            <Link href="#" className="btn btnWhite roundedBtn">
              About Us
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-1/4 md:top-2/4">
          <Image
            src="/images/360-deg-badge.webp"
            width="197"
            height="301"
            className="object-contain w-40 lg:w-52 1xl:w-60 3xl:w-80"
            alt="Interactive Virtual Tour"
          />
        </div>
        <div className="absolute bottom-20 w-full left-0 text-center px-10 md:hidden">
          <Link href="#" className="btn btnWhite roundedBtn">
            Explore More
          </Link>
        </div>
        <div className="video-box">
          <video
            src=""
            poster="/images/360-deg-vid-thumb-mob.webp"
            className="w-full block object-cover md:hidden"
          ></video>
          <video
            src=""
            poster="/images/360-deg-vid-thumb-desk.webp"
            className="w-full md:block object-cover hidden"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
