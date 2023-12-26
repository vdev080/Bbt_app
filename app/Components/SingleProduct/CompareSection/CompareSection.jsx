"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";

const CompareSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="py-24 lg:py-36 xl:py-44 2xl:py-52 3xl:py-64"
      style={{
        background:
          "linear-gradient(180deg, #F4F4F1 -13.45%, rgba(244, 244, 241, 0.5) 137.55%)",
      }}
    >
      <div className="container">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div
            className="flex justify-between items-center mb-10 sm:block sm:w-40% sm:pr-20 md:w-2/6 md:pr-10 xl:pr-28 lg:w-30% lg:pr-20"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Image
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="hidden invert sm:inline-block sm:w-24 mb-8 object-contain lg:w-32 1xl:w-36 3xl:w-44 3xl:mb-10"
            />
            <span className="h-px w-auto grow bg-black sm:hidden"></span>
            <h2 className=" pl-8 sm:pl-0 sm:mb-3 md:tracking-tight lg:text-4.5xl 1xl:text-5.5xl 3xl:text-7xl 3xl:mb-8">
              Compare Cars
            </h2>
            <p className="hidden sm:block text-lg leading-8 lg:text-base lg:leading-8 1xl:text-xl  3xl:text-3xl 3xl:leading-loose 1xl:mt-5">
              Get your dream luxury car in 4 easy steps at Big Boy Toyz, India's
              trusted used car portal.
            </p>
          </div>
          <div
            className="w-full sm:w-60% md:w-4/6  lg:w-70% 1xl:pl-8"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="w-full bg-white px-5 py-8 rounded-lg shadow-compare-card md:px-0 md:py-0 md:rounded-none">
              <ul>
                <li className="flex justify-between items-center">
                  <div className="w-56 md:w-2/5 h-full lg:w-49%">
                    <Image
                      src="/images/detail-page/detail-compare-car-thumb.webp"
                      alt="Car Image"
                      width="536"
                      height="390"
                      className=" object-contain inline-block rounded-lg md:min-h-16 md:rounded-none md:h-full md:object-cover lg:min-h-24"
                    />
                  </div>

                  <div className="w-3/6 md:py-8 md:px-6 md:w-3/5 lg:w-51% lg:px-16 lg:py-10 1xl:px-24 3xl:px-32">
                    <p
                      className={`hidden lg:inline-block bg-black text-white text-center rounded-2xl text-base px-5 pt-2 py-1 leading-4 lg:text-sm lg:pt-1 3xl:text-lg 3xl:px-8`}
                    >
                      Reg.Year : 2022
                    </p>
                    <h5 className="font-medium text-2xl lg:mt-4 1xl:text-3xl 3xl:text-4.5xl 3xl:mt-7">
                      Rolls-Royce Ghost Series II
                    </h5>
                    <div className="flex justify-between items-center mt-4 lg:mt-2 1xl:mt-3 3xl:mt-7">
                      <p className="flex items-center font-medium text-lg lg:text-2xl 1xl:text-3xl 3xl:text-4xl xl:tracking-tight">
                        ₹ 4,99,00,000
                      </p>
                      <p className="text-zinc-500 text-base lg:hidden">
                        R Year :{" "}
                        <strong className="font-medium text-zinc-800">
                          2022
                        </strong>
                      </p>
                    </div>
                    <div className="hidden lg:block lg:mt-8">
                      <CommonInfoUsp />
                    </div>
                    <div className="mt-10 hidden md:block lg:mt-6 1xl:mt-9">
                      <button className="addBtn lg:py-4 lg:justify-between 3xl:py-6">
                        <span className="uppercase font-medium lg:text-sm lg:capitalize 2xl:text-lg 3xl:text-1xl">
                          Add Cars
                        </span>
                        <Image
                          src="/images/detail-page/detail-compare-plus-icon.webp"
                          width="13"
                          height="13"
                          alt="Plus Icon"
                          className="object-contain w-5 ml-8 lg:w-3 2xl:w-5 3xl:w-7"
                        />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-10 md:hidden">
                <button className="addBtn">
                  <span className="uppercase font-medium">Add Cars</span>
                  <Image
                    src="/images/detail-page/detail-compare-plus-icon.webp"
                    width="13"
                    height="13"
                    alt="Plus Icon"
                    className="object-contain w-5 ml-8"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
