"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const BasicDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="container container-lg-full lg:px-12 lg:py-12 lg:shadow-detail-space xl:px-24 xl:py-20 2xl:py-24 2xl:px-28 3xl:px-32 3xl:py-28"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="block lg:flex lg:flex-wrap lg:justify-between">
        <div className="flex items-center mb-20 lg:mb-0 lg:w-40% xl:w-2/6">
          <div className="w-36 pr-8 border-r border-stone-400 lg:border-none lg:pr-4 xl:w-32 2xl:w-36 3xl:w-44">
            <Image
              src="/images/detail-page/detail-bbt-certified.webp"
              alt="BBT Certified"
              width="53"
              height="72"
              className="w-full object-contain"
            />
          </div>
          <div className="w-auto pl-8 3xl:pl-12">
            <p
              className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 mb-5 leading-4 lg:text-sm lg:pt-1 3xl:text-lg 3xl:px-8 xl:py-1 xl:px-7 2xl:mb-8 3xl:mb-10 3xl:tracking-wide`}
            >
              Reg.Year : 2015 | EMI STARTS @ 6,20,270.04
            </p>
            <h4 className="leading-tight text-1.9xl tracking-tight xl:text-4xl 1xl:text-25px 2xl:text-4.5xl 3xl:text-5.5xl">
              Rolls-Royce Ghost Series II
            </h4>
            <p className="text-red font-medium tracking-tight text-1.6xl mt-3 xl:text-3xl 1xl:mt-5 1xl:text-4xl 3xl:text-5xl 2xl:mt-6 3xl:mt-9">
              ₹ 4,99,00,000
            </p>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-between lg:w-60% xl:w-4/6 xl:pl-10 3xl:pl-16">
          <div className="sm:w-60% xl:w-4/6">
            <CommonInfoUsp isDetailPage={true} />
          </div>

          <div className="flex items-center justify-between callBtnGroup detailsCallBtnGroup mt-12 overflow-hidden flex-wrap sm:flex-col sm:w-40% sm:mt-0 sm:items-end xl:w-2/6">
            <div className="callBtnLeft">
              <Link href="#" className="btn btnBlack btnSquare sm:text-left">
                <Image
                  src="/images/reserve-btn-icon-white.webp"
                  width="25"
                  height="25"
                  alt="Call Icon"
                  className="object-contain w-7 hidden sm:inline-block sm:mr-6 sm:w-8 3xl:w-10 3xl:mr-9"
                />
                <span>Reserve The Car</span>
              </Link>
            </div>
            <div className="callBtnRight ml-4 sm:ml-0 sm:mt-5 xl:mt-7">
              <a
                href="#"
                className="btn smallCallBtn sm:text-left sm:justify-start"
              >
                <Image
                  src="/images/call-btn-icon-black.webp"
                  width="25"
                  height="25"
                  alt="Call Icon"
                  className="object-contain w-7 sm:w-8 3xl:w-10"
                />
                <span className="hidden sm:inline-block sm:ml-6 3xl:ml-9">
                  Call For Price
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
