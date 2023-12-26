"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

const FooterMenuWrapper = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="text-white FooterMenuWrapper pt-20">
      <div className="footerMenuBox py-7">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <div
              className={`${
                open === 1
                  ? "flex items-center justify-between active-menu"
                  : "flex items-center justify-between"
              }`}
            >
              <h3 className="font-normal text-3xl">BBT World</h3>
              <div className="footerAccordionIcon relative">
                <span></span>
                <span></span>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="footer-menu mt-5">
              <ul>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
      <div className="footerMenuBox py-7">
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <div
              className={`${
                open === 2
                  ? "flex items-center justify-between active-menu"
                  : "flex items-center justify-between"
              }`}
            >
              <h3 className="font-normal text-3xl">General</h3>
              <div className="footerAccordionIcon relative">
                <span></span>
                <span></span>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="footer-menu mt-5">
              <ul>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="footerMenuBox py-7">
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <div
              className={`${
                open === 3
                  ? "flex items-center justify-between active-menu"
                  : "flex items-center justify-between"
              }`}
            >
              <h3 className="font-normal text-3xl">Styles</h3>
              <div className="footerAccordionIcon relative">
                <span></span>
                <span></span>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="footer-menu mt-5">
              <ul>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="footerMenuBox py-7">
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            <div
              className={`${
                open === 4
                  ? "flex items-center justify-between active-menu"
                  : "flex items-center justify-between"
              }`}
            >
              <h3 className="font-normal text-3xl">Brands</h3>
              <div className="footerAccordionIcon relative">
                <span></span>
                <span></span>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="footer-menu mt-5">
              <ul>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl py-1 mt-4 block" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FooterMenuWrapper;
