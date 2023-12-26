"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ShopByCategory.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const categories = [
  {
    title: "SUVs",
    icon: "/images/detail-page/category-icon-suv.webp",
    url: "#",
  },
  {
    title: "Sedan",
    icon: "/images/detail-page/category-icon-sedan.webp",
    url: "#",
  },
  {
    title: "Convertible",
    icon: "/images/detail-page/category-icon-convertable.webp",
    url: "#",
  },
  {
    title: "Coupe",
    icon: "/images/detail-page/category-icon-coupe.webp",
    url: "#",
  },
  {
    title: "Sports",
    icon: "/images/detail-page/category-icon-sports.webp",
    url: "#",
  },
];

const ShopByCategory = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-24 lg:pb-36 xl:py-32 xl:pb-44 3xl:pb-60">
      <div className="container">
        <h2
          className="titleWithLine xl:tracking-tighter"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <span className="lg:bg-white lg:pr-10 relative z-10 ">
            Shop By Categories
          </span>
        </h2>

        <ul
          className="flex items-center flex-wrap mt-8 1xl:mt-24 3xl:mt-36"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          {categories.map((category, index) => (
            <li
              key={index}
              className={`w-31% three-column-item ${styles.categoryItem}`}
            >
              <Link
                href={category.url}
                className={`px-2 py-10 w-full h-full rounded-xl border border-neutral-300 mt-5 block text-center lg:py-20 xl:pb-16 xl:pt-20 3xl:pt-32 3xl:pb-24 hover:bg-black transition-all duration-500 group`}
              >
                <Image
                  src={category.icon}
                  width="67"
                  height="25"
                  alt={category.title}
                  className="object-contain block w-full max-h-11 xl:max-h-16 3xl:max-h-20"
                />
                <p className="text-black text-1xl mt-3 xl:text-1.6xl xl:mt-12 1xl:text-3xl group-hover:text-white  transition-all duration-500">{category.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShopByCategory;
