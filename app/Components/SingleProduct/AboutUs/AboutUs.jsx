"use client";
import React, { useEffect } from "react";
import LocationCounter from "../../CommonComponents/CommonLocation/LocationCounter";
import CommonLocationItem from "../../CommonComponents/CommonLocation/CommonLocationItem";
import AOS from "aos";
import "aos/dist/aos.css";

const locations = [
  { city: "DEL", sector: "Gurgaon, Sector 37", url: "#" },
  { city: "BOM", sector: "Mumbai, Andheri East", url: "#" },
  { city: "HYD", sector: "Hyderabad,  Banjara Hills", url: "#" },
  { city: "AMD", sector: "Gujarat, Ahmedabad", url: "#" },
  { city: "BLR", sector: "Bengaluru, Residency Road", url: "#" },
];
const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-24 lg:py-36 xl:py-44 3xl:py-64" style={{ background: "#F3F3F3" }}>
      <div className="container">
        <div
          className="text-center mb-16 lg:text-left 3xl:mb-32"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <p className="titleWithLine lg:text-4.5xl lg:font-medium lg:mb-10 1xl:text-5.5xl 3xl:text-7xl">
            <span
              className=" lg:pr-10 relative z-10 3xl:pr-16"
              style={{ background: "#F3F3F3" }}
            >
              About Us
            </span>
          </p>
          <div className="3xl:mt-32">
            <h2 className="font-normal tracking-tighter my-4 lg:inline lg:text-5xl lg:font-normal lg:text-black lg:leading-normal  xl:text-6xl xl:leading-relaxed 1xl:mb-5 2xl:text-7xl 2xl:leading-1.3 3xl:text-8xl 3xl:leading-1.4">
              {" "}
              BigBoyToyz Is In Your City !
            </h2>
            <p className="font-light px-8 text-2xl text-stone-700 lg:inline lg:text-5xl lg:font-normal lg:text-black [&>br]:hidden lg:leading-normal lg:[&>br]:block lg:px-0 xl:text-6xl xl:leading-relaxed 1xl:tracking-tighter 2xl:text-7xl 2xl:leading-1.3 3xl:text-8xl 3xl:leading-1.4">
              Visit our super cars showroom <br /> and get a feel  of the ride
              awaiting your presence.
            </p>
          </div>
        </div>

        <div className="lg:flex flex-row-reverse items-center lg:mt-24 1xl:mt-36 3xl:mt-44">
          <LocationCounter />

          <ul
            className="[&>*:last-child]:border-b border-gray-300 lg:w-60% lg:pr-10 xl:w-55% xl:mr-auto"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            {locations.map((location, index) => (
              <CommonLocationItem key={index} location={location} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
