"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./SpecificationSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";



const SpecificationTabs = ({specifications}) => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="block lg:hidden">
      <ul
        className={`${styles.specTabList} detailPageTabs flex items-center mt-20 pl-8 pr-8 mb-16 sm:pl-12`}
      >
        {specifications?.map((item, index) => (
          <li
            key={index}
            className={`${
              styles.specTabItem
            } flex items-center pl-5 pr-12 py-3 rounded-2rem mr-4 group ${
              activeTab === `tab-${index + 1}` ? "active" : ""
            }`}
            onClick={() => handleTabChange(`tab-${index + 1}`)}
          >
            <Image
              src={item.icon}
              alt=""
              width="18"
              height="18"
              className="object-contain w-6 h-6 sm:w-7 sm:h-7"
            />
            <span className="text-black text-lg font-normal ml-3 whitespace-nowrap inline-block sm:text-xl">
              {item.title}
            </span>
          </li>
        ))}
      </ul>

      <div className="container">
        {specifications?.map((item, index) => (
          <div
          key={index}
            className={`tabContainer ${
              activeTab === `tab-${index + 1}` ? "active" : ""
            }`}
          >
            <div className="flex items-center mb-6">
              <Image
                src={item.icon}
                alt=""
                width="20"
                height="20"
                className="object-contain w-7 h-7 mr-4 sm:w-8 sm:h-8"
              />
              <h6 className="font-medium sm:text-3xl">{item.title}</h6>
            </div>
            <ul>
              {item.detailList.map((listItem, index) => (
                <li
                  key={index}
                  className={`${styles.tabContentList} flex justify-between py-6 sm:py-8`}
                >
                  <p className="text-lg font-medium sm:text-xl">{listItem.title}</p>
                  <p className="text-lg font-light text-gray-500 sm:text-xl">
                    {listItem.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificationTabs;
