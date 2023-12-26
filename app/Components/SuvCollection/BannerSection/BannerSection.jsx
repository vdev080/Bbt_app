import Image from "next/image";
import React from "react";
import BreadCrumb from "../../CommonComponents/BreadCrumb/BreadCrumb";

const BannerSection = () => {
  return (
    <section className="text-white bg-black">
      <div className="relative">
        <div>
          <Image
            src="/images/hp-banner-desk.webp"
            alt="Banner Image"
            width="1920"
            height="1100"
            className="hidden md:block"
          />
          <Image
            src="/images/suv/suv-banner-mob.webp"
            alt="Banner Image"
            width="390"
            height="741"
            className="block w-full md:hidden"
          />
        </div>
        <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-between pt-10 pb-16">
          <div className="text-center px-20">
            <div className="flex justify-center">
              <BreadCrumb pageTitle="SUVs" />
            </div>
            <h1 className="font-light text-3.3rem tracking-tighter leading-1.4 mt-5 [&>strong]:font-normal">
              Planning to buy a used <strong>luxury Suv car ?</strong> Take a
              look.
            </h1>
          </div>
          <div
            className={`text-center flex flex-col justify-center items-center`}
          >
            <Image
              src="/images/banner-scroll-icon-white.webp"
              alt="Scroll Down"
              width="19"
              height="29"
              className="inline-block object-contain w-8 1xl:w-6"
            />
            <span className="uppercase mt-5 text-base">
              Scroll Down
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
