"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import SellYourCarUsp from "./SellYourCarUsp";
import MarqueeSlider from "./MarqueeSlider";
import styles from "./SellYourCar.module.css";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const SellYourCar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const count1 = useRef();
  const count2 = useRef();

  useEffect(() => {
    gsap.to(count1.current, {
      duration: 2,
      innerHTML: 2,
      roundProps: "innerHTML",
      ease: "power1.out",
      scrollTrigger: {
        trigger: count1.current,
        // markers: true,
        start: "top 100%",
        end: "top 82%",
        toggleActions: "restart none none none",
      },
    });

    gsap.to(count1.current, {
      duration: 2,
      innerHTML: 2,
      roundProps: "innerHTML",
      ease: "power1.out",
      scrollTrigger: {
        trigger: count1.current,
        // markers: true,
        start: "bottom 5%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
      },
    });

    gsap.to(count2.current, {
      duration: 6,
      innerHTML: 9,
      roundProps: "innerHTML",
      ease: "power1.out",
      scrollTrigger: {
        trigger: count2.current,
        // markers: true,
        start: "top 100%",
        end: "top 82%",
        toggleActions: "restart none none none",
      },
    });

    gsap.to(count2.current, {
      duration: 6,
      innerHTML: 9,
      roundProps: "innerHTML",
      ease: "power1.out",
      scrollTrigger: {
        trigger: count2.current,
        // markers: true,
        start: "bottom 5%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
      },
    });
  }, []);

  return (
    <section className="pt-20 pb-24 bg-dark-800 lg:py-40 3xl:py-64">
      <div className="container">
        <h2
          className={`text-white mb-16 tracking-tighter relative xl:mb-20 3xl:mb-32 ${styles.sectionHeading}`}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Planning To Sell?
        </h2>
      </div>

      <div className="relative lg:mb-14">
        <div className="mb-8 lg:mb-0 lg:w-max lg:relative z-20 mx-auto">
          <div
            className={`${styles.sellCarNumber} text-center`}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <span className=" text-white relative font-black" ref={count1}>
              0
            </span>
            <span className=" text-white relative font-black" ref={count2}>
              0
            </span>
            <div className={`${styles.sellCarImg}`}>
              <Image
                src="/images/sell-car-desktop.webp"
                width="301"
                height="544"
                alt="Car Image"
                className="hidden lg:block object-contain"
              />
              <Image
                src="/images/sell-car-mob.webp"
                width="327"
                height="181"
                alt="Car Image"
                className="lg:hidden block object-contain w-full"
              />
            </div>
          </div>
        </div>
        <div
          className={`lg:absolute left-0 w-full ${styles.marqueeWrapper}`}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <MarqueeSlider />
        </div>
      </div>

      <div className="container">
        <p
          className="hidden text-white text-center mx-auto text-5xl lg:block font-light leading-snug xl:mt-28 2xl:text-6xl 2xl:leading-normal 2xl:tracking-tighter 3xl:text-7xl 3xl:leading-relaxed"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Accelerate your selling journey with our <br />{" "}
          <span className="font-normal">29-minute car-selling magic!</span>
          Transform your car <br /> into cash in record time, hassle-free.
        </p>
        <ul
          className="flex flex-wrap justify-between mt-10 mb-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl 1xl:max-w-9xl 2xl:max-w-10xl 3xl:max-w-16xl 3xl:mt-16"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <SellYourCarUsp
            usp={{
              icon: "/images/sell-plan-usp-icon-1.webp",
              title: "Best Offer",
              titleStrong: "in 29 Minutes",
            }}
          />
          <SellYourCarUsp
            usp={{
              icon: "/images/sell-plan-usp-icon-2.webp",
              title: "Outright",
              titleStrong: "Sale",
            }}
          />
          <SellYourCarUsp
            usp={{
              icon: "/images/sell-plan-usp-icon-3.webp",
              title: "7600+ Satisfied",
              titleStrong: "Customers",
            }}
          />
          <SellYourCarUsp
            usp={{
              icon: "/images/sell-plan-usp-icon-4.webp",
              title: "Hassle Free",
              titleStrong: "Process",
            }}
          />
        </ul>

        <div
          className="text-center mt-24 3xl:mt-32"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <Link href="#" className="btn btnWhite roundedBtn">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SellYourCar;
