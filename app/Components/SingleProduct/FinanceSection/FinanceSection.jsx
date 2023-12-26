"use client";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import styles from "./FinanceSection.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const FinanceSection = () => {
  const [percent, setPercent] = useState([0, 40]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="bg-black py-24 lg:py-36 1xl:py-44 2xl:py-52 3xl:py-64"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div className="lg:flex lg:flex-row-reverse lg:items-center">
        <div className="px-10 sm:px-16 md:px-20 lg:w-40% lg:px-36 1xl:pr-44">
          <div className="text-center">
            <h2 className=" lg:font-normal text-white mb-10 lg:mb-5 lg:leading-tight xl:text-6xl 1xl:leading-1.3 1xl:text-7xl 1xl:tracking-tighter 3xl:text-8xl 3xl:mb-10">
              {" "}
              <span className="block font-light">Get Your Ride</span> Financed
              Today!
            </h2>
            <p className="text-zinc-500 text-1.6xl lg:text-xl 3xl:text-3xl">
              Easy and hassle free Emi options available.
            </p>
          </div>
          <div
            className={`relative text-white text-center mx-auto px-5 py-8 mt-16 lg:mt-10 lg:py-5 lg:px-8 xl:mt-12 3xl:mt-24 3xl:px-16 3xl:py-9 ${styles.emiBox}`}
          >
            <p className="absolute text-xl bg-black lg:text-base 3xl:text-1xl">
              Emi Starts @
            </p>
            <h5 className="lg:text-1xl xl:text-xl 1xl:text-2xl 3xl:text-3.5xl">
              ₹ 45,000/- <span className="font-extralight">Per Month</span>
            </h5>
          </div>

          <div className="flex justify-between flex-wrap items-center text-white mt-20 3xl:mt-28">
            <p className="text-xl lg:text-base 2xl:text-lg 3xl:text-2xl">Down Payment</p>
            <p className="text-xl lg:text-base 2xl:text-lg 3xl:text-2xl">₹ 3,000,00,0</p>
          </div>
          <div className="mt-10 mb-16 lg:mb-0 lg:mt-5">
            <RangeSlider
              className="emiSlider"
              value={percent}
              onInput={setPercent}
              step={1}
              max={70}
            />
            <div className="relative overflow-x-hidden emiPercentBox">
              <span className="absolute text-white font-light emiPercent leftOne">
                10%
              </span>
              <span className="absolute text-white font-light emiPercent leftTwo">
                20%
              </span>
              <span className="absolute text-white font-light emiPercent leftThree">
                30%
              </span>
              <span className="absolute text-white font-light emiPercent leftFour">
                40%
              </span>
              <span className="absolute text-white font-light emiPercent leftFive">
                50%
              </span>
              <span className="absolute text-white font-light emiPercent leftSix">
                60%
              </span>
              <span className="absolute text-white font-light emiPercent leftSeven">
                70%
              </span>
              <span className="absolute text-white font-light emiPercent leftEight">
                80%
              </span>
            </div>
          </div>

          <div className=" mt-10 hidden sm:text-center lg:block 1xl:mt-14 3xl:mt-20">
            <a href="#" className="btn btnWhite roundedBtn">
              Get More Details
            </a>
          </div>
        </div>

        <div className="block w-full lg:w-60% lg:pl-40 1xl:pl-52 1xl:pr-5 3xl:pl-64">
          <Image
            src="/images/detail-page/detail-finance-thumb.webp"
            width="965"
            height="644"
            className="w-full object-cover block"
            alt="Car Image"
          />
        </div>
      </div>

      <div className="px-8 mt-16 sm:text-center lg:hidden">
        <a href="#" className="btn btnWhite roundedBtn">
          Get More Details
        </a>
      </div>
    </section>
  );
};

export default FinanceSection;
