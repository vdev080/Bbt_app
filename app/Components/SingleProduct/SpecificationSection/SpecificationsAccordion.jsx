"use client";
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecificationsAccordion = ({ specifications }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-28 hidden lg:block bg-white accordion-box xl:py-40 2xl:py-48">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <h6 className="font-medium text-3.5rem mb-20 xl:text-4xl xl:mb-16 1xl:text-4.5xl 1xl:tracking-tighter 2xl:mb-20 3xl:text-5.5xl 3xl:mb-28">
          Full Specification
        </h6>
        {specifications?.map((item, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            className="border-b border-b-blue-gray-100 first-of-type:border-t first-of-type:border-t-blue-gray-100"
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="w-full py-8 border-none xl:py-7 1xl:py-8 2xl:py-9 3xl:py-11"
            >
              <div
                className={`${
                  open === index + 1
                    ? "flex items-center justify-between w-full  active"
                    : "flex items-center justify-between w-full "
                }`}
              >
                <div className="flex items-center w-max">
                  <Image
                    src={item.icon}
                    alt=""
                    width="20"
                    height="20"
                    className="object-contain w-7 h-7 inline-block mr-3 xl:w-9 xl:h-9 xl:mr-4 1xl:w-10 1xl:h-10 1xl:mr-5 3xl:w-12 3xl:h-12 3xl:mr-8"
                  />
                  <p className="font-medium text-3xl 1xl:text-3.5xl 1xl:tracking-tight 2xl:text-4xl 3xl:text-4.5xl">
                    {item.title}
                  </p>
                </div>
                <div className="w-max">
                  <Image
                    src="/images/dropdown-icon.webp"
                    alt="Arrow Icon"
                    width="17"
                    height="9"
                    className="w-7 object-contain transition-all duration-500 ease-in-out accordion-arrow"
                  />
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <ul className="pb-5 px-10">
                {item.detailList.map((listItem, index) => (
                  <li key={index} className={`flex justify-between py-5`}>
                    <p className="text-lg font-medium sm:text-xl 1xl:text-1xl 3xl:text-3xl">
                      {listItem.title}
                    </p>
                    <p className="text-lg font-light text-gray-500 sm:text-xl 1xl:text-1xl 3xl:text-3xl">
                      {listItem.description}
                    </p>
                  </li>
                ))}
              </ul>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default SpecificationsAccordion;
